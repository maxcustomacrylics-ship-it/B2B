"use client";

import { useState, useRef, useEffect } from "react";

interface GalleryImage { src: string; alt: string; title?: string }

export default function ProductGallery({ images }: { images: GalleryImage[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActive(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(i: number) {
    scrollRef.current?.children[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }

  if (images.length === 0) {
    return <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-blue-100 to-blue-200/50" />;
  }

  return (
    <div>
      <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory rounded-xl" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {images.map((img, i) => (
          <div key={i} className="snap-center shrink-0 w-full aspect-[16/9] bg-gradient-to-br from-blue-50 to-blue-200/50 overflow-hidden">
            <img src={img.src} alt={img.alt} title={img.title || ""} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-[#0F2744]" : "bg-gray-300 hover:bg-gray-400"}`} />
          ))}
        </div>
      )}
    </div>
  );
}
