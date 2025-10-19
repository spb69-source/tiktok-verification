import { cn } from "@/lib/utils";

interface TikTokLogoProps {
  className?: string;
}

export function TikTokLogo({ className }: TikTokLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <a 
        href="https://tiktok.com" 
        data-testid="link-tiktok-home"
        className="inline-block"
      >
        <img 
          src="/logo.png" 
          alt="TikTok Logo" 
          width="80" 
          height="80" 
          data-testid="img-tiktok-logo"
          className="drop-shadow-lg"
        />
      </a>
    </div>
  );
}
