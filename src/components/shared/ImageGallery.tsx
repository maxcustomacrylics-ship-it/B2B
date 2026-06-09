"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageGalleryProps = {
  images: string[];
  alt: string;
};

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <div className="flex h-full items-center justify-center text-muted">
          <div className="text-center">
            <div className="text-6xl mb-2">🖼</div>
            <p className="text-sm">{alt}</p>
            <p className="text-xs text-muted mt-1">Product image placeholder</p>
          </div>
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition",
                index === activeIndex
                  ? "border-primary-500"
                  : "border-border hover:border-primary-300"
              )}
            >
              <div className="flex h-full items-center justify-center bg-gray-50 text-xs text-muted">
                {index + 1}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
