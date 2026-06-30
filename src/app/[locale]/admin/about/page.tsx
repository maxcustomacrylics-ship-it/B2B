"use client";

import { useState, useEffect } from "react";
import { showToast } from "@/components/admin/Toast";
import { Save, Type } from "lucide-react";

export default function AdminAboutPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    try {
      const res = await fetch("/api/admin/settings");
      const d = await res.json();
      setForm({
        heroH1: d.aboutHeroH1 || "About Max Custom Acrylics",
        heroSub: d.aboutHeroSub || "We help businesses develop custom acrylic products through engineering support, coordinated manufacturing and quality-focused project management.",
        whoH2: d.aboutWhoH2 || "Who We Are",
        whoP1: d.aboutWhoP1 || "We help international businesses develop custom acrylic products by combining engineering expertise with coordinated production management.",
        whoP2: d.aboutWhoP2 || "Rather than operating a single facility, we work with specialized production partners — each selected for their expertise in specific acrylic fabrication processes.",
        why1Title: d.aboutWhy1Title || "Engineering Support",
        why1Desc: d.aboutWhy1Desc || "Design review and manufacturability analysis for every project.",
        why2Title: d.aboutWhy2Title || "Flexible Production",
        why2Desc: d.aboutWhy2Desc || "From prototypes to full production runs with consistent quality.",
        why3Title: d.aboutWhy3Title || "Quality Control",
        why3Desc: d.aboutWhy3Desc || "Multi-stage inspection with documented reports at every checkpoint.",
        why4Title: d.aboutWhy4Title || "Responsive Communication",
        why4Desc: d.aboutWhy4Desc || "Clear updates and timely responses throughout your project.",
        qualityH2: d.aboutQualityH2 || "Our Quality System",
        qualitySub: d.aboutQualitySub || "Every project goes through a documented quality control process — from material verification to final inspection before shipment.",
        qs1: d.aboutQs1 || "Incoming Material Inspection",
        qs2: d.aboutQs2 || "Sample Approval",
        qs3: d.aboutQs3 || "In-Process Quality Check",
        qs4: d.aboutQs4 || "Final Inspection",
        qs5: d.aboutQs5 || "Packaging Control",
        step1Title: d.aboutStep1Title || "Share Your Requirements",
        step1Desc: d.aboutStep1Desc || "Send us your drawings or project brief.",
        step2Title: d.aboutStep2Title || "Engineering Review",
        step2Desc: d.aboutStep2Desc || "We assess manufacturability and provide a quotation.",
        step3Title: d.aboutStep3Title || "Production Coordination",
        step3Desc: d.aboutStep3Desc || "We manage manufacturing and quality inspection.",
        step4Title: d.aboutStep4Title || "Delivery",
        step4Desc: d.aboutStep4Desc || "Products are packed and shipped to your destination.",
      });
    } catch { showToast("Failed to load", "error"); }
    finally { setLoading(false); }
  }

  function update(f: string, v: string) { setForm((p) => ({ ...p, [f]: v })); }

  async function save() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) showToast("About page saved");
      else showToast("Save failed", "error");
    } catch { showToast("Save failed", "error"); }
    finally { setSaving(false); }
  }

  if (loading) return <div className="flex items-center justify-center py-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" /></div>;

  const inp = "block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const sec = "rounded-xl bg-white shadow-sm border border-gray-200 p-6";

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-gray-900">About Page</h1><p className="mt-1 text-sm text-gray-500">Edit the About page content</p></div>
        <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"><Save className="h-4 w-4" />{saving ? "Saving..." : "Save All"}</button>
      </div>

      <div className="space-y-6">
        {/* Hero */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><Type className="h-5 w-5 text-blue-600" /> Hero Section</h2>
          <div className="grid gap-4"><div><label className="block text-sm font-medium text-gray-700 mb-1">H1 Title</label><input type="text" value={form.heroH1} onChange={(e) => update("heroH1", e.target.value)} className={inp} /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Description</label><textarea value={form.heroSub} onChange={(e) => update("heroSub", e.target.value)} rows={2} className={inp} /></div></div>
        </div>

        {/* Who We Are */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Who We Are</h2>
          <div className="grid gap-4"><div><label className="block text-sm font-medium text-gray-700 mb-1">H2 Title</label><input type="text" value={form.whoH2} onChange={(e) => update("whoH2", e.target.value)} className={inp} /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Paragraph 1</label><textarea value={form.whoP1} onChange={(e) => update("whoP1", e.target.value)} rows={2} className={inp} /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Paragraph 2</label><textarea value={form.whoP2} onChange={(e) => update("whoP2", e.target.value)} rows={2} className={inp} /></div></div>
        </div>

        {/* Why Work With Us */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Why Work With Us (4 Cards)</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[1,2,3,4].map((n) => (<div key={n} className="border border-gray-200 rounded-lg p-4"><p className="text-xs font-medium text-gray-400 mb-2">Card {n}</p>
              <div className="space-y-2"><input type="text" value={form[`why${n}Title`]} onChange={(e) => update(`why${n}Title`, e.target.value)} className={inp} placeholder="Title" />
                <input type="text" value={form[`why${n}Desc`]} onChange={(e) => update(`why${n}Desc`, e.target.value)} className={inp} placeholder="Description" /></div></div>))}
          </div>
        </div>

        {/* Quality System */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Quality System</h2>
          <div className="grid gap-4"><div><label className="block text-sm font-medium text-gray-700 mb-1">H2 Title</label><input type="text" value={form.qualityH2} onChange={(e) => update("qualityH2", e.target.value)} className={inp} /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label><input type="text" value={form.qualitySub} onChange={(e) => update("qualitySub", e.target.value)} className={inp} /></div>
            <div className="grid gap-2 sm:grid-cols-5">{[1,2,3,4,5].map((n) => (<input key={n} type="text" value={form[`qs${n}`]} onChange={(e) => update(`qs${n}`, e.target.value)} className={inp} placeholder={`Step ${n}`} />))}</div></div>
        </div>

        {/* How We Work */}
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">How We Work (4 Steps)</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[1,2,3,4].map((n) => (<div key={n} className="border border-gray-200 rounded-lg p-4"><p className="text-xs font-medium text-gray-400 mb-2">Step {n}</p>
              <div className="space-y-2"><input type="text" value={form[`step${n}Title`]} onChange={(e) => update(`step${n}Title`, e.target.value)} className={inp} placeholder="Title" />
                <input type="text" value={form[`step${n}Desc`]} onChange={(e) => update(`step${n}Desc`, e.target.value)} className={inp} placeholder="Description" /></div></div>))}
          </div>
        </div>
      </div>
    </div>
  );
}
