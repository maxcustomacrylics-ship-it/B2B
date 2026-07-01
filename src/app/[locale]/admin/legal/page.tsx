"use client";

import { useState, useEffect } from "react";
import { showToast } from "@/components/admin/Toast";
import { Save, Scale } from "lucide-react";

const pages = [
  { slug: "privacy", title: "Privacy Policy" },
  { slug: "terms", title: "Terms of Service" },
  { slug: "refund", title: "Refund Policy" },
  { slug: "shipping", title: "Shipping Policy" },
];

export default function AdminLegalPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [active, setActive] = useState("privacy");
  const [form, setForm] = useState<Record<string, string>>({});

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    try {
      const res = await fetch("/api/admin/settings");
      const d = await res.json();
      const f: Record<string, string> = {};
      for (const p of pages) {
        f[`${p.slug}Title`] = d[`${p.slug}Title`] || p.title;
        f[`${p.slug}Content`] = d[`${p.slug}Content`] || "";
      }
      setForm(f);
    } catch { showToast("Failed to load", "error"); }
    finally { setLoading(false); }
  }

  function update(field: string, value: string) { setForm((prev) => ({ ...prev, [field]: value })); }

  async function save() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) showToast("Saved successfully");
      else { const d = await res.json().catch(() => ({})); showToast(d.error || "Save failed", "error"); }
    } catch { showToast("Save failed", "error"); }
    finally { setSaving(false); }
  }

  if (loading) return <div className="flex items-center justify-center py-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" /></div>;

  const inp = "block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><Scale className="h-6 w-6 text-blue-600" /> Legal Pages</h1><p className="mt-1 text-sm text-gray-500">Edit Privacy Policy, Terms, Refund, and Shipping pages</p></div>
        <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"><Save className="h-4 w-4" />{saving ? "Saving..." : "Save All"}</button>
      </div>

      <div className="flex gap-1 mb-8 bg-gray-100 rounded-lg p-1 w-fit">
        {pages.map((p) => (<button key={p.slug} onClick={() => setActive(p.slug)} className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${active === p.slug ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>{p.title}</button>))}
      </div>

      <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Page Title</label><input type="text" value={form[`${active}Title`] || ""} onChange={(e) => update(`${active}Title`, e.target.value)} className={inp} /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Page Content (HTML supported)</label><textarea value={form[`${active}Content`] || ""} onChange={(e) => update(`${active}Content`, e.target.value)} rows={20} className={inp} /></div>
        </div>
      </div>
    </div>
  );
}
