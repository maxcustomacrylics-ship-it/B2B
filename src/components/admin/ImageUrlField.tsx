"use client";

import { ImageIcon, X } from "lucide-react";

type Props = { label: string; value: string; onChange: (url: string) => void };

export default function ImageUrlField({ label, value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      {value ? (
        <div className="relative mb-2 w-full max-w-[200px] aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
          <img src={value} alt={label} className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          <button type="button" onClick={() => onChange("")} className="absolute top-1 right-1 rounded-full bg-red-600 p-1 text-white hover:bg-red-700" title="Remove">
            <X className="h-3 w-3" />
          </button>
        </div>
      ) : (
        <div className="mb-2 w-full max-w-[200px] aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
          <ImageIcon className="h-8 w-8 text-gray-300" />
        </div>
      )}
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Paste image URL here" />
    </div>
  );
}
