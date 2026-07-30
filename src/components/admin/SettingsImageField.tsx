"use client";

import { useState, useRef } from "react";
import { Upload, X, ImageIcon } from "lucide-react";

type Props = {
  label: string;
  value: string;
  onChange: (url: string) => void;
};

export default function SettingsImageField({ label, value, onChange }: Props) {
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  async function resizeIfNeeded(file: File): Promise<Blob> {
    const MAX = 2000;
    if (!file.type.startsWith("image/") || file.type.includes("svg")) return file;
    if (file.size < 1 * 1024 * 1024) return file;
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width, h = img.height;
        if (w <= MAX && h <= MAX) { resolve(file); return; }
        if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
        else { w = Math.round(w * MAX / h); h = MAX; }
        const canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d")!.drawImage(img, 0, 0, w, h);
        canvas.toBlob((blob) => resolve(blob || file), "image/jpeg", 0.8);
      };
      img.onerror = () => resolve(file);
      img.src = URL.createObjectURL(file);
    });
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const blob = await resizeIfNeeded(file);
    const formData = new FormData();
    formData.append("file", blob, file.name);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        onChange(data.url);
      } else {
        const err = await res.json().catch(() => ({}));
        setError(err.error || "Upload failed");
      }
    } catch {
      setError("Upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  function handleDelete() {
    onChange("");
    setError("");
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>

      {/* Preview or empty state */}
      {value ? (
        <div className="relative mb-2 w-full max-w-[200px] aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
          <img src={value} alt={label} className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          <button
            type="button"
            onClick={handleDelete}
            className="absolute top-1 right-1 rounded-full bg-red-600 p-1 text-white hover:bg-red-700 transition-colors"
            title="Remove image"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ) : (
        <div className="mb-2 w-full max-w-[200px] aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
          <ImageIcon className="h-8 w-8 text-gray-300" />
        </div>
      )}

      {/* Upload button + URL display */}
      <div className="flex items-center gap-2">
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={handleUpload} className="hidden" />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
        >
          <Upload className="h-3.5 w-3.5" />
          {uploading ? "Uploading..." : value ? "Replace" : "Upload"}
        </button>
        {value && (
          <span className="text-xs text-gray-400 truncate max-w-[300px]" title={value}>
            {value.split("/").pop()?.substring(0, 30) || value.substring(0, 30)}
          </span>
        )}
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
