"use client";

import { useState, useEffect, useRef } from "react";
import { showToast } from "@/components/admin/Toast";
import { BookOpen, Save, Upload } from "lucide-react";
import type { Guide } from "@/lib/types";

export default function AdminGuidesPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => { fetchGuides(); }, []);

  async function fetchGuides() {
    try {
      const res = await fetch("/api/admin/guides");
      const data = await res.json();
      setGuides(Array.isArray(data) ? data : []);
    } catch {
      showToast("Failed to load guides", "error");
    } finally {
      setLoading(false);
    }
  }

  function updateGuide(index: number, field: keyof Guide, value: unknown) {
    setGuides((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    setDirty(true);
  }

  async function uploadGuideImage(index: number, file: File) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        if (data.url) {
          updateGuide(index, "image", data.url);
        } else {
          const errMsg = data.error || "Server returned empty URL — storage may be unavailable";
          showToast(`Upload failed: ${errMsg}`, "error");
        }
      } else {
        const data = await res.json().catch(() => ({}));
        showToast(`Upload failed: ${data.error || res.status}`, "error");
      }
    } catch (e: any) {
      showToast(`Upload error: ${e.message || "Network error"}`, "error");
    }
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/guides", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guides),
      });
      if (res.ok) {
        showToast("Guides saved");
        setDirty(false);
      } else {
        showToast("Failed to save guides", "error");
      }
    } catch {
      showToast("Failed to save guides", "error");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Featured Guides</h1>
          <p className="mt-1 text-sm text-gray-500">Edit the four featured guide cards and their content pages</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving || !dirty}
          className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="h-4 w-4" />
          {saving ? "Saving..." : "Save All"}
        </button>
      </div>

      <div className="mt-8 space-y-8">
        {guides.map((guide, index) => (
          <GuideEntry key={guide.slug} guide={guide} index={index} updateGuide={updateGuide} uploadImage={uploadGuideImage} />
        ))}
      </div>
    </div>
  );
}

function GuideEntry({
  guide,
  index,
  updateGuide,
  uploadImage,
}: {
  guide: Guide;
  index: number;
  updateGuide: (i: number, f: keyof Guide, v: unknown) => void;
  uploadImage: (i: number, file: File) => Promise<void>;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [sectionsText, setSectionsText] = useState(JSON.stringify(guide.sections, null, 2));

  async function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    await uploadImage(index, file);
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleSectionsChange(text: string) {
    setSectionsText(text);
    try {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) {
        updateGuide(index, "sections", parsed);
      }
    } catch { /* invalid JSON while typing — ignore */ }
  }

  return (
    <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-[#0F2744] mb-4">{guide.title}</h2>

      {/* Card image + color */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Card Image</label>
          <div className="flex items-start gap-3">
            <div className="h-20 w-32 shrink-0 rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
              {guide.image ? (
                <img src={guide.image} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-300">
                  <BookOpen className="h-6 w-6" />
                </div>
              )}
            </div>
            <div className="flex-1 space-y-2">
              <input
                type="text"
                value={guide.image || ""}
                onChange={(e) => updateGuide(index, "image", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Image URL"
              />
              <input ref={fileRef} type="file" accept="image/*" onChange={handleFilePick} className="hidden" />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                <Upload className="h-3 w-3" />
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Gradient Color (Tailwind classes)</label>
          <input
            type="text"
            value={guide.imageColor || ""}
            onChange={(e) => updateGuide(index, "imageColor", e.target.value)}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 font-mono"
            placeholder="from-blue-100 to-blue-200/60"
          />
        </div>
      </div>

      {/* Title + Description */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
          <input
            type="text"
            value={guide.title}
            onChange={(e) => updateGuide(index, "title", e.target.value)}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Description (shown on card)</label>
          <input
            type="text"
            value={guide.desc}
            onChange={(e) => updateGuide(index, "desc", e.target.value)}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Sections */}
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Sections (JSON — array of {"{ heading, content }"} objects)
        </label>
        <textarea
          value={sectionsText}
          onChange={(e) => handleSectionsChange(e.target.value)}
          rows={10}
          className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 font-mono"
          spellCheck={false}
        />
        <p className="mt-1 text-xs text-gray-400">
          Each section: {"{ \"heading\": \"Title\", \"content\": \"Paragraph text...\" }"}. Separate with commas inside [ ].
        </p>
      </div>
    </div>
  );
}
