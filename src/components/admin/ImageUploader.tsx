"use client";

import { useState, useRef } from "react";
import { Upload, X, ImagePlus } from "lucide-react";

type Props = {
  images: string[];
  onChange: (images: string[]) => void;
  multiple?: boolean;
  label?: string;
};

export default function ImageUploader({ images, onChange, multiple = true, label = "Images" }: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Resize image on client side to stay under Vercel body size limit
  async function resizeIfNeeded(file: File): Promise<Blob> {
    const MAX = 2000; // max width/height in px
    if (!file.type.startsWith("image/") || file.type.includes("svg")) return file;
    if (file.size < 1 * 1024 * 1024) return file; // under 1MB, skip resize

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width, h = img.height;
        if (w <= MAX && h <= MAX) { resolve(file); return; }
        if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
        else { w = Math.round(w * MAX / h); h = MAX; }
        const canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, w, h);
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else resolve(file); // fallback
        }, "image/jpeg", 0.8);
      };
      img.onerror = () => resolve(file);
      img.src = URL.createObjectURL(file);
    });
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError("");
    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      try {
        const blob = await resizeIfNeeded(file);
        const formData = new FormData();
        formData.append("file", blob, file.name);

        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          const data = await res.json();
          if (data.url) {
            uploadedUrls.push(data.url);
          } else {
            setError("Server returned empty URL — storage may be unavailable");
          }
        } else {
          const err = await res.json().catch(() => ({}));
          setError(err.error || `Upload failed (HTTP ${res.status})`);
        }
      } catch (err: any) {
        setError(err.message || "Network error — please try again");
      }
    }

    if (uploadedUrls.length > 0) {
      if (multiple) {
        onChange([...images, ...uploadedUrls]);
      } else {
        onChange([uploadedUrls[0]]);
      }
    }

    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  }

  function removeImage(index: number) {
    onChange(images.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {multiple && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-700 disabled:opacity-50"
          >
            <ImagePlus className="h-4 w-4" />
            Add Image
          </button>
        )}
      </div>

      {/* Image grid */}
      {images.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 mb-3">
          {images.map((url, i) => (
            <div key={i} className="group relative aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
              <img
                src={url}
                alt={`${label} ${i + 1}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect fill='%23f1f5f9' width='100' height='100'/><text x='50' y='55' text-anchor='middle' fill='%2394a3b8' font-size='12'>No img</text></svg>";
                }}
              />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 rounded-full bg-red-600 p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-3 rounded-lg border border-dashed border-gray-300 p-8 text-center text-sm text-gray-400">
          No images added yet
        </div>
      )}

      {/* Upload button */}
      <div>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif,image/svg+xml"
          multiple={multiple}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Upload className="h-4 w-4" />
          {uploading ? "Uploading..." : multiple ? "Upload Images" : "Upload Image"}
        </button>
        {!multiple && images.length > 0 && (
          <span className="ml-2 text-xs text-gray-400">Upload a new image to replace</span>
        )}
      </div>
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}
