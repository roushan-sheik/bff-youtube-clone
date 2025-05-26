import { cn } from "@/lib/utils/formatters";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const fallbackInitial = alt.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "rounded-full overflow-hidden bg-gray-300 flex items-center justify-center",
        sizes[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-600 font-medium text-sm">
          {fallbackInitial}
        </span>
      )}
    </div>
  );
}
