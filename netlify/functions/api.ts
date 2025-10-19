import express, { type Request, Response, NextFunction } from "express";
import serverless from "serverless-http";
import { registerRoutes } from "../../server/routes";
import { connectMongoDB } from "../../server/mongodb";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let isConnected = false;

app.use(async (req, res, next) => {
  if (!isConnected) {
    try {
      await connectMongoDB();
      isConnected = true;
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  }
  next();
});

registerRoutes(app);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export const handler = serverless(app);
