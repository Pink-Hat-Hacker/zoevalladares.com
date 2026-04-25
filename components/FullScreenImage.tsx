import { getBlobUrl } from "@/data/lib/blob";
import { useEffect } from "react";

type FullscreenImageProps = {
  src: string;
  alt?: string;
  onClose: () => void;
};

export default function FullscreenImage({ src, alt, onClose }: FullscreenImageProps) {
  // Allow closing with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-white/90 flex items-center justify-center z-50 cursor-zoom-out"
      onClick={onClose} // closes on any click
    >
      <img
        src={getBlobUrl(src)}
        alt={alt}
        className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>
  );
}
