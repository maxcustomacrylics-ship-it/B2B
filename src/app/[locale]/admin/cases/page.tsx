"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import { Briefcase, Save, Upload } from "lucide-react";
import type { CaseStudy } from "@/lib/types";

export default function AdminCasesPage() {
  const router = useRouter();
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    fetchCases();
  }, []);

  async function fetchCases() {
    try {
      const res = await fetch("/api/admin/cases");
      const data = await res.json();
      setCases(Array.isArray(data) ? data : []);
    } catch {
      showToast("Failed to load case studies", "error");
    } finally {
      setLoading(false);
    }
  }

  function updateCase(index: number, field: keyof CaseStudy, value: string) {
    setCases((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    setDirty(true);
  }

  async function uploadCaseImage(index: number, file: File) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        updateCase(index, "image", data.url);
      } else {
        showToast("Image upload failed", "error");
      }
    } catch {
      showToast("Image upload failed", "error");
    }
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/cases", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cases),
      });
      if (res.ok) {
        showToast("Case studies saved");
        setDirty(false);
      } else {
        showToast("Failed to save case studies", "error");
      }
    } catch {
      showToast("Failed to save case studies", "error");
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
          <h1 className="text-2xl font-bold text-gray-900">Case Studies</h1>
          <p className="mt-1 text-sm text-gray-500">Edit case study details inline</p>
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

      {cases.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-3 text-sm font-semibold text-gray-900">No case studies</h3>
          <p className="mt-1 text-sm text-gray-500">No case studies have been added yet.</p>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {cases.map((caseItem, index) => (
            <CaseEntry key={caseItem.slug} caseItem={caseItem} index={index} updateCase={updateCase} uploadImage={uploadCaseImage} />
          ))}
        </div>
      )}
    </div>
  );
}

function CaseEntry({
  caseItem,
  index,
  updateCase,
  uploadImage,
}: {
  caseItem: CaseStudy;
  index: number;
  updateCase: (i: number, f: keyof CaseStudy, v: string) => void;
  uploadImage: (i: number, file: File) => Promise<void>;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    await uploadImage(index, file);
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="h-20 w-20 shrink-0 rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
          {caseItem.image ? (
            <img src={caseItem.image} alt={caseItem.title || "Case study image"} className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-300">
              <Briefcase className="h-8 w-8" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <label className="block text-xs font-medium text-gray-500 mb-1">Image URL</label>
          <input
            type="text"
            value={caseItem.image || ""}
            onChange={(e) => updateCase(index, "image", e.target.value)}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="/images/cases/example.jpg or https://..."
          />
        </div>
        <div className="pt-5">
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFilePick} className="hidden" />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            <Upload className="h-3 w-3" />
            {uploading ? "..." : "Upload"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
          <input
            type="text"
            value={caseItem.title}
            onChange={(e) => updateCase(index, "title", e.target.value)}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Client</label>
          <input
            type="text"
            value={caseItem.client}
            onChange={(e) => updateCase(index, "client", e.target.value)}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Industry</label>
          <input
            type="text"
            value={caseItem.industry}
            onChange={(e) => updateCase(index, "industry", e.target.value)}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>
    </div>
  );
}
