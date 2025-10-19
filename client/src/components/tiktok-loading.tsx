import { cn } from "@/lib/utils";

interface TikTokLoadingProps {
  className?: string;
  size?: number;
}

export function TikTokLoading({ className, size = 40 }: TikTokLoadingProps) {
  return (
    <div 
      className={cn("flex items-center justify-center", className)}
      data-testid="loading-tiktok"
    >
      <div className="relative" style={{ width: size * 2, height: size }}>
        <div 
          className="absolute top-1/2 -translate-y-1/2 rounded-full animate-tiktok-swap-left"
          style={{
            width: size,
            height: size,
            backgroundColor: '#25F4EE',
            left: 0,
          }}
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2 rounded-full animate-tiktok-swap-right"
          style={{
            width: size,
            height: size,
            backgroundColor: '#FE2C55',
            right: 0,
          }}
        />
      </div>
    </div>
  );
}
