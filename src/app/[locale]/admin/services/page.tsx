"use client";

import { useState, useEffect } from "react";
import { showToast } from "@/components/admin/Toast";
import { Wrench, Save } from "lucide-react";

const serviceList = [
  { slug: "laser-cutting", name: "Laser Cutting" },
  { slug: "cnc-machining", name: "CNC Machining" },
  { slug: "diamond-polishing", name: "Diamond Polishing" },
  { slug: "uv-printing", name: "UV Printing" },
  { slug: "bonding-assembly", name: "Assembly & Packaging" },
  { slug: "oem-project-support", name: "Quality Control" },
];

export default function AdminServicesPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [active, setActive] = useState("laser-cutting");
  const [form, setForm] = useState<Record<string, string>>({});

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    try {
      const res = await fetch("/api/admin/settings");
      const d = await res.json();
      const f: Record<string, string> = {};
      const prefix = active[0] === "l" ? "lc" : active[0] === "c" ? "cnc" : active[0] === "d" ? "dp" : active[0] === "u" ? "uv" : active[0] === "b" ? "as" : "qc";
      // Load all service prefixes
      const allPrefixes = ["lc", "cnc", "dp", "uv", "as", "qc"];
      for (const pfx of allPrefixes) {
        f[`${pfx}_heroTitle`] = d[`${pfx}_heroTitle`] || "";
        f[`${pfx}_heroDesc`] = d[`${pfx}_heroDesc`] || "";
        f[`${pfx}_whenTitle`] = d[`${pfx}_whenTitle`] || "";
        f[`${pfx}_whenSub`] = d[`${pfx}_whenSub`] || "";
        f[`${pfx}_ctaTitle`] = d[`${pfx}_ctaTitle`] || "";
        f[`${pfx}_ctaSub`] = d[`${pfx}_ctaSub`] || "";
        // Best Applications × 6
        for (let i = 1; i <= 6; i++) {
          f[`${pfx}_bestTitle${i}`] = d[`${pfx}_bestTitle${i}`] || "";
          f[`${pfx}_bestDesc${i}`] = d[`${pfx}_bestDesc${i}`] || "";
        }
        // Consider Other × 4
        for (let i = 1; i <= 4; i++) {
          f[`${pfx}_otherTitle${i}`] = d[`${pfx}_otherTitle${i}`] || "";
          f[`${pfx}_otherDesc${i}`] = d[`${pfx}_otherDesc${i}`] || "";
        }
        // Design Guidelines × 5
        for (let i = 1; i <= 5; i++) {
          f[`${pfx}_designTitle${i}`] = d[`${pfx}_designTitle${i}`] || "";
          f[`${pfx}_designDesc${i}`] = d[`${pfx}_designDesc${i}`] || "";
        }
        // Mistakes × 6
        for (let i = 1; i <= 6; i++) {
          f[`${pfx}_mistakeTitle${i}`] = d[`${pfx}_mistakeTitle${i}`] || "";
          f[`${pfx}_mistakeDesc${i}`] = d[`${pfx}_mistakeDesc${i}`] || "";
        }
        // File Prep × 6
        for (let i = 1; i <= 6; i++) {
          f[`${pfx}_fmt${i}`] = d[`${pfx}_fmt${i}`] || "";
          f[`${pfx}_check${i}`] = d[`${pfx}_check${i}`] || "";
        }
        // FAQ × 4
        for (let i = 1; i <= 4; i++) {
          f[`${pfx}_faqQ${i}`] = d[`${pfx}_faqQ${i}`] || "";
          f[`${pfx}_faqA${i}`] = d[`${pfx}_faqA${i}`] || "";
        }
      }
      setForm(f);
    } catch { showToast("Failed to load", "error"); }
    finally { setLoading(false); }
  }

  function update(field: string, value: string) { setForm((p) => ({ ...p, [field]: value })); }

  async function save() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) showToast("Saved successfully");
      else { const d = await res.json().catch(() => ({})); showToast(d.error || "Save failed", "error"); }
    } catch { showToast("Save failed", "error"); }
    finally { setSaving(false); }
  }

  function prefix(): string {
    return active === "laser-cutting" ? "lc" : active === "cnc-machining" ? "cnc" : active === "diamond-polishing" ? "dp" : active === "uv-printing" ? "uv" : active === "bonding-assembly" ? "as" : "qc";
  }

  if (loading) return <div className="flex items-center justify-center py-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" /></div>;

  const p = prefix();
  const inp = "block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const sec = "rounded-xl bg-white shadow-sm border border-gray-200 p-6";

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><Wrench className="h-6 w-6 text-blue-600" /> Capabilities</h1><p className="mt-1 text-sm text-gray-500">Edit content for each capability page — Hero, When to Choose, Design Guidelines, FAQ, and more</p></div>
        <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"><Save className="h-4 w-4" />{saving ? "Saving..." : "Save All"}</button>
      </div>

      {/* Service Tabs */}
      <div className="flex gap-1 mb-8 bg-gray-100 rounded-lg p-1 w-fit flex-wrap">
        {serviceList.map((svc) => (<button key={svc.slug} onClick={() => setActive(svc.slug)} className={`rounded-md px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${active === svc.slug ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>{svc.name}</button>))}
      </div>

      <div className="space-y-6">
        {/* Hero */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Hero Section</h2><div className="grid gap-4"><div><label className="block text-sm font-medium text-gray-700 mb-1">H1 Title</label><input type="text" value={form[`${p}_heroTitle`] || ""} onChange={(e) => update(`${p}_heroTitle`, e.target.value)} className={inp} /></div><div><label className="block text-sm font-medium text-gray-700 mb-1">Description</label><textarea value={form[`${p}_heroDesc`] || ""} onChange={(e) => update(`${p}_heroDesc`, e.target.value)} rows={2} className={inp} /></div></div></div>

        {/* When to Choose */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">When Should You Choose</h2><div className="grid gap-4"><div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label><input type="text" value={form[`${p}_whenTitle`] || ""} onChange={(e) => update(`${p}_whenTitle`, e.target.value)} className={inp} /></div><div><label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label><input type="text" value={form[`${p}_whenSub`] || ""} onChange={(e) => update(`${p}_whenSub`, e.target.value)} className={inp} /></div></div>
          <div className="mt-4"><h3 className="text-sm font-medium text-gray-700 mb-2">Best Applications (6 cards)</h3><div className="grid gap-3 sm:grid-cols-2">{[...Array(6)].map((_, i) => (<div key={i} className="border rounded-lg p-3"><p className="text-xs text-gray-400 mb-1">Card {i + 1}</p><input type="text" value={form[`${p}_bestTitle${i + 1}`] || ""} onChange={(e) => update(`${p}_bestTitle${i + 1}`, e.target.value)} className={inp} placeholder="Title" /><input type="text" value={form[`${p}_bestDesc${i + 1}`] || ""} onChange={(e) => update(`${p}_bestDesc${i + 1}`, e.target.value)} className={`${inp} mt-1`} placeholder="Description" /></div>))}</div></div>
          <div className="mt-4"><h3 className="text-sm font-medium text-gray-700 mb-2">Consider Other Processes (4 cards)</h3><div className="grid gap-3 sm:grid-cols-2">{[...Array(4)].map((_, i) => (<div key={i} className="border rounded-lg p-3"><p className="text-xs text-gray-400 mb-1">Card {i + 1}</p><input type="text" value={form[`${p}_otherTitle${i + 1}`] || ""} onChange={(e) => update(`${p}_otherTitle${i + 1}`, e.target.value)} className={inp} placeholder="Title" /><input type="text" value={form[`${p}_otherDesc${i + 1}`] || ""} onChange={(e) => update(`${p}_otherDesc${i + 1}`, e.target.value)} className={`${inp} mt-1`} placeholder="Description" /></div>))}</div></div>
        </div>

        {/* Design Guidelines */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Design Guidelines (5 tips)</h2><div className="grid gap-3 sm:grid-cols-2">{[...Array(5)].map((_, i) => (<div key={i} className="border rounded-lg p-3"><p className="text-xs text-gray-400 mb-1">Tip {i + 1}</p><input type="text" value={form[`${p}_designTitle${i + 1}`] || ""} onChange={(e) => update(`${p}_designTitle${i + 1}`, e.target.value)} className={inp} placeholder="Title" /><input type="text" value={form[`${p}_designDesc${i + 1}`] || ""} onChange={(e) => update(`${p}_designDesc${i + 1}`, e.target.value)} className={`${inp} mt-1`} placeholder="Description" /></div>))}</div></div>

        {/* Common Mistakes */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Common Design Mistakes (6 tips)</h2><div className="grid gap-3 sm:grid-cols-2">{[...Array(6)].map((_, i) => (<div key={i} className="border rounded-lg p-3"><p className="text-xs text-gray-400 mb-1">Mistake {i + 1}</p><input type="text" value={form[`${p}_mistakeTitle${i + 1}`] || ""} onChange={(e) => update(`${p}_mistakeTitle${i + 1}`, e.target.value)} className={inp} placeholder="Title" /><input type="text" value={form[`${p}_mistakeDesc${i + 1}`] || ""} onChange={(e) => update(`${p}_mistakeDesc${i + 1}`, e.target.value)} className={`${inp} mt-1`} placeholder="Description" /></div>))}</div></div>

        {/* File Preparation */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">File Preparation Guide</h2><div className="grid gap-3 sm:grid-cols-2"><div className="border rounded-lg p-3"><p className="text-xs text-gray-400 mb-1">File Formats (6)</p>{[...Array(6)].map((_, i) => (<input key={i} type="text" value={form[`${p}_fmt${i + 1}`] || ""} onChange={(e) => update(`${p}_fmt${i + 1}`, e.target.value)} className={`${inp} mb-1`} placeholder={`Format ${i + 1}`} />))}</div><div className="border rounded-lg p-3"><p className="text-xs text-gray-400 mb-1">Checklist (6)</p>{[...Array(6)].map((_, i) => (<input key={i} type="text" value={form[`${p}_check${i + 1}`] || ""} onChange={(e) => update(`${p}_check${i + 1}`, e.target.value)} className={`${inp} mb-1`} placeholder={`Item ${i + 1}`} />))}</div></div></div>

        {/* FAQ */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">FAQ (4 questions)</h2><div className="grid gap-3 sm:grid-cols-2">{[...Array(4)].map((_, i) => (<div key={i} className="border rounded-lg p-3"><p className="text-xs text-gray-400 mb-1">Q{i + 1}</p><input type="text" value={form[`${p}_faqQ${i + 1}`] || ""} onChange={(e) => update(`${p}_faqQ${i + 1}`, e.target.value)} className={inp} placeholder="Question" /><textarea value={form[`${p}_faqA${i + 1}`] || ""} onChange={(e) => update(`${p}_faqA${i + 1}`, e.target.value)} rows={2} className={`${inp} mt-1`} placeholder="Answer" /></div>))}</div></div>

        {/* CTA */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Final CTA</h2><div className="grid gap-4 sm:grid-cols-2"><div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label><input type="text" value={form[`${p}_ctaTitle`] || ""} onChange={(e) => update(`${p}_ctaTitle`, e.target.value)} className={inp} /></div><div><label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label><input type="text" value={form[`${p}_ctaSub`] || ""} onChange={(e) => update(`${p}_ctaSub`, e.target.value)} className={inp} /></div></div></div>
      </div>
    </div>
  );
}
