"use client";

import { useState, useEffect } from "react";
import { showToast } from "@/components/admin/Toast";
import SettingsImageField from "@/components/admin/SettingsImageField";
import { Save, Globe, Image, Type } from "lucide-react";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});
  const [tab, setTab] = useState("text");

  useEffect(() => { fetchSettings(); }, []);

  async function fetchSettings() {
    try {
      const res = await fetch("/api/admin/settings");
      const d = await res.json();
      setForm({
        // Hero
        heroHeadline: d.heroHeadline || "", heroSubheadline: d.heroSubheadline || "",
        // Categories
        catTitle: d.catTitle || "", catSub: d.catSub || "",
        // Why Us
        whyTitle: d.whyTitle || "", whySub: d.whySub || "",
        why1Title: d.why1Title || "", why1Desc: d.why1Desc || "",
        why2Title: d.why2Title || "", why2Desc: d.why2Desc || "",
        why3Title: d.why3Title || "", why3Desc: d.why3Desc || "",
        why4Title: d.why4Title || "", why4Desc: d.why4Desc || "",
        // Capabilities
        capTitle: d.capTitle || "", capSub: d.capSub || "",
        // Projects
        projTitle: d.projTitle || "", projSub: d.projSub || "",
        // Process
        procTitle: d.procTitle || "", procSub: d.procSub || "",
        // Insights
        insTitle: d.insTitle || "", insSub: d.insSub || "",
        // FAQ
        faq1Q: d.faq1Q || "", faq1A: d.faq1A || "",
        faq2Q: d.faq2Q || "", faq2A: d.faq2A || "",
        faq3Q: d.faq3Q || "", faq3A: d.faq3A || "",
        faq4Q: d.faq4Q || "", faq4A: d.faq4A || "",
        // CTA
        ctaTitle: d.ctaTitle || "", ctaSub: d.ctaSub || "",
        // Images
        heroImg: d.heroImg || "",
        whyImg1: d.whyImg1 || "", whyImg2: d.whyImg2 || "", whyImg3: d.whyImg3 || "", whyImg4: d.whyImg4 || "",
        capImg1: d.capImg1 || "", capImg2: d.capImg2 || "", capImg3: d.capImg3 || "", capImg4: d.capImg4 || "", capImg5: d.capImg5 || "", capImg6: d.capImg6 || "",
        // Contact
        companyName: d.companyName || "", email: d.email || "", phone: d.phone || "", whatsapp: d.whatsapp || "",
      });
    } catch { showToast("Failed to load", "error"); }
    finally { setLoading(false); }
  }

  function update(f: string, v: string) { setForm((p) => ({ ...p, [f]: v })); }

  async function save() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await res.json().catch(() => ({}));
      if (res.ok) showToast("Saved — refresh homepage to see changes");
      else showToast(d.error || "Save failed", "error");
    } catch (e: any) { showToast(e.message || "Save failed", "error"); }
    finally { setSaving(false); }
  }

  if (loading) return <div className="flex items-center justify-center py-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" /></div>;

  const inp = "block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const sec = "rounded-xl bg-white shadow-sm border border-gray-200 p-6";
  const F = ({ label, field, textarea }: { label: string; field: string; textarea?: boolean }) => (
    <div><label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {textarea ? <textarea value={form[field] || ""} onChange={(e) => update(field, e.target.value)} rows={2} className={inp} /> : <input type="text" value={form[field] || ""} onChange={(e) => update(field, e.target.value)} className={inp} />}</div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-gray-900">Homepage Settings</h1><p className="mt-1 text-sm text-gray-500">Every field below controls text on the homepage</p></div>
        <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"><Save className="h-4 w-4" />{saving ? "Saving..." : "Save All"}</button>
      </div>

      <div className="flex gap-1 mb-8 bg-gray-100 rounded-lg p-1 w-fit">
        {[{ id: "text", label: "Text Content", icon: Type }, { id: "images", label: "Images", icon: Image }, { id: "contact", label: "Contact", icon: Globe }].map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${tab === t.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}><t.icon className="h-4 w-4" />{t.label}</button>
        ))}</div>

      {tab === "text" && (
        <div className="space-y-6">
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Hero</h2><div className="grid gap-4"><F label="Headline" field="heroHeadline" /><F label="Description" field="heroSubheadline" textarea /></div></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Product Categories</h2><div className="grid gap-4 sm:grid-cols-2"><F label="Title" field="catTitle" /><F label="Subtitle" field="catSub" /></div></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us</h2><div className="grid gap-4 sm:grid-cols-2"><F label="Title" field="whyTitle" /><F label="Subtitle" field="whySub" /></div>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">{[1, 2, 3, 4].map((n) => (<div key={n} className="border rounded-lg p-3"><p className="text-xs text-gray-400 mb-2">Card {n}</p><F label="Title" field={`why${n}Title`} /><div className="mt-2"><F label="Description" field={`why${n}Desc`} /></div></div>))}</div></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Capabilities</h2><div className="grid gap-4 sm:grid-cols-2"><F label="Title" field="capTitle" /><F label="Subtitle" field="capSub" /></div></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Featured Projects</h2><div className="grid gap-4 sm:grid-cols-2"><F label="Title" field="projTitle" /><F label="Subtitle" field="projSub" /></div></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">How We Work</h2><div className="grid gap-4 sm:grid-cols-2"><F label="Title" field="procTitle" /><F label="Subtitle" field="procSub" /></div></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Industry Insights</h2><div className="grid gap-4 sm:grid-cols-2"><F label="Title" field="insTitle" /><F label="Subtitle" field="insSub" /></div></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">FAQ</h2><div className="grid gap-4 sm:grid-cols-2">{[1, 2, 3, 4].map((n) => (<div key={n} className="border rounded-lg p-3"><p className="text-xs text-gray-400 mb-2">Question {n}</p><F label="Question" field={`faq${n}Q`} /><div className="mt-2"><F label="Answer" field={`faq${n}A`} textarea /></div></div>))}</div></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Final CTA</h2><div className="grid gap-4 sm:grid-cols-2"><F label="Title" field="ctaTitle" /><F label="Subtitle" field="ctaSub" /></div></div>
        </div>
      )}

      {tab === "images" && (
        <div className="space-y-6">
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Hero Image</h2><SettingsImageField label="Hero" value={form.heroImg || ""} onChange={(v) => update("heroImg", v)} /></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us (4)</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">{["Fully Customized", "Premium Materials", "OEM & ODM", "Worldwide Delivery"].map((l, i) => (<SettingsImageField key={i} label={l} value={form[`whyImg${i + 1}`] || ""} onChange={(v) => update(`whyImg${i + 1}`, v)} />))}</div></div>
          <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Capabilities (6)</h2><div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{["Laser Cutting", "CNC Machining", "Diamond Polishing", "UV Printing", "Thermoforming", "Assembly"].map((l, i) => (<SettingsImageField key={i} label={l} value={form[`capImg${i + 1}`] || ""} onChange={(v) => update(`capImg${i + 1}`, v)} />))}</div></div>
        </div>
      )}

      {tab === "contact" && (
        <div className={sec}><h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h2><div className="grid gap-4 sm:grid-cols-2"><F label="Company" field="companyName" /><F label="Email" field="email" /><F label="Phone" field="phone" /><F label="WhatsApp" field="whatsapp" /></div></div>
      )}
    </div>
  );
}
