"use client";

import { useState, useEffect } from "react";
import { showToast } from "@/components/admin/Toast";
import SettingsImageField from "@/components/admin/SettingsImageField";
import { Save, Globe, Image, Type, Layout } from "lucide-react";

type Settings = Record<string, string>;

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<Settings>({});
  const [activeTab, setActiveTab] = useState("homepage");

  useEffect(() => { fetchSettings(); }, []);

  async function fetchSettings() {
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      setForm({
        companyName: data.companyName || "",
        email: data.email || "",
        phone: data.phone || "",
        whatsapp: data.whatsapp || "",
        // Hero
        heroHeadline: data.heroHeadline || "Custom Acrylic Products Designed Around Your Business",
        heroSubheadline: data.heroSubheadline || "From concept to delivery, we manufacture premium custom acrylic products for retail, commercial and industrial applications.",
        heroBadge: data.heroBadge || "Engineering & Project Partner",
        heroImg: data.heroImg || "",
        // Why Choose Us
        whyTitle: data.whyTitle || "Why Choose Max Custom Acrylic",
        whySub: data.whySub || "Engineering-driven approach with quality management throughout your project.",
        why1Title: data.why1Title || "Fully Customized",
        why1Desc: data.why1Desc || "Every product manufactured to your exact specifications.",
        why2Title: data.why2Title || "Premium Materials",
        why2Desc: data.why2Desc || "High-clarity cast and extruded acrylic options.",
        why3Title: data.why3Title || "OEM & ODM Support",
        why3Desc: data.why3Desc || "Custom manufacturing for your brand requirements.",
        why4Title: data.why4Title || "Worldwide Delivery",
        why4Desc: data.why4Desc || "Export-ready packaging to over 30 countries.",
        // Capabilities
        capTitle: data.capTitle || "Manufacturing Capabilities",
        capSub: data.capSub || "Comprehensive acrylic fabrication coordinated through engineering and quality management.",
        // Product Categories
        catTitle: data.catTitle || "What We Make",
        catSub: data.catSub || "Browse our range of custom acrylic products designed for commercial and industrial applications.",
        // Featured Projects
        projTitle: data.projTitle || "Featured Projects",
        projSub: data.projSub || "Custom acrylic solutions delivered for clients worldwide.",
        // Process
        procTitle: data.procTitle || "How We Work",
        procSub: data.procSub || "A proven process from your initial inquiry to final delivery.",
        // Insights
        insTitle: data.insTitle || "Industry Insights",
        insSub: data.insSub || "Practical guides and design ideas for custom acrylic projects.",
        // FAQ
        faq1Q: data.faq1Q || "Can all products be customized?",
        faq1A: data.faq1A || "Yes. Every product can be customized in dimensions, material, color, finish, and branding to match your exact requirements.",
        faq2Q: data.faq2Q || "What is your MOQ?",
        faq2A: data.faq2A || "MOQ is flexible. We handle single prototypes to full production runs.",
        faq3Q: data.faq3Q || "Can you manufacture from drawings?",
        faq3A: data.faq3A || "Absolutely. Send us your CAD files, sketches, or reference samples. Our engineering team will review and provide a quotation within 24 hours.",
        faq4Q: data.faq4Q || "What is your lead time?",
        faq4A: data.faq4A || "Standard lead time is 10–18 business days depending on complexity and quantity.",
        // Final CTA
        ctaTitle: data.ctaTitle || "Let's Build Your Next Acrylic Project",
        ctaSub: data.ctaSub || "Tell us your ideas and we'll provide the right acrylic solution.",
      });
    } catch { showToast("Failed to load settings", "error"); }
    finally { setLoading(false); }
  }

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) showToast("Settings saved successfully");
      else showToast("Failed to save", "error");
    } catch { showToast("Failed to save", "error"); }
    finally { setSaving(false); }
  }

  if (loading) return <div className="flex items-center justify-center py-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" /></div>;

  const tabs = [
    { id: "homepage", label: "Homepage", icon: Layout },
    { id: "images", label: "Images", icon: Image },
    { id: "contact", label: "Contact Info", icon: Globe },
  ];

  const inputClass = "block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const sectionClass = "rounded-xl bg-white shadow-sm border border-gray-200 p-6";

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-gray-900">Site Settings</h1><p className="mt-1 text-sm text-gray-500">Manage content, images and contact information</p></div>
        <button onClick={handleSave} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
          <Save className="h-4 w-4" />{saving ? "Saving..." : "Save All"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 bg-gray-100 rounded-lg p-1 w-fit">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
            <tab.icon className="h-4 w-4" />{tab.label}
          </button>
        ))}
      </div>

      {/* ===== HOMEPAGE TAB ===== */}
      {activeTab === "homepage" && (
        <div className="space-y-6">
          {/* Hero */}
          <div className={sectionClass}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><Type className="h-5 w-5 text-blue-600" /> Hero Section</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Badge</label><input type="text" value={form.heroBadge} onChange={(e) => update("heroBadge", e.target.value)} className={inputClass} placeholder="Engineering & Project Partner" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Headline</label><input type="text" value={form.heroHeadline} onChange={(e) => update("heroHeadline", e.target.value)} className={inputClass} /></div>
              <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">Description</label><textarea value={form.heroSubheadline} onChange={(e) => update("heroSubheadline", e.target.value)} rows={2} className={inputClass} /></div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className={sectionClass}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label><input type="text" value={form.whyTitle} onChange={(e) => update("whyTitle", e.target.value)} className={inputClass} /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label><input type="text" value={form.whySub} onChange={(e) => update("whySub", e.target.value)} className={inputClass} /></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[1,2,3,4].map((n) => (
                <div key={n} className="border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-400 mb-2">Card {n}</p>
                  <div className="space-y-2">
                    <input type="text" value={form[`why${n}Title`] || ""} onChange={(e) => update(`why${n}Title`, e.target.value)} className={inputClass} placeholder="Title" />
                    <input type="text" value={form[`why${n}Desc`] || ""} onChange={(e) => update(`why${n}Desc`, e.target.value)} className={inputClass} placeholder="Description" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className={sectionClass}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Capabilities Section</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label><input type="text" value={form.capTitle} onChange={(e) => update("capTitle", e.target.value)} className={inputClass} /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label><input type="text" value={form.capSub} onChange={(e) => update("capSub", e.target.value)} className={inputClass} /></div>
            </div>
          </div>

          {/* Product Categories */}
          <div className={sectionClass}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Categories Section</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label><input type="text" value={form.catTitle} onChange={(e) => update("catTitle", e.target.value)} className={inputClass} /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label><input type="text" value={form.catSub} onChange={(e) => update("catSub", e.target.value)} className={inputClass} /></div>
            </div>
          </div>

          {/* Projects / Process / Insights */}
          {[ ["proj","Featured Projects"], ["proc","How We Work"], ["ins","Industry Insights"] ].map(([key,label]) => (
            <div key={key} className={sectionClass}>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{label} Section</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label><input type="text" value={form[`${key}Title`] || ""} onChange={(e) => update(`${key}Title`, e.target.value)} className={inputClass} /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label><input type="text" value={form[`${key}Sub`] || ""} onChange={(e) => update(`${key}Sub`, e.target.value)} className={inputClass} /></div>
              </div>
            </div>
          ))}

          {/* FAQ */}
          <div className={sectionClass}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">FAQ Section (4 Questions)</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[1,2,3,4].map((n) => (
                <div key={n} className="border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-400 mb-2">Question {n}</p>
                  <div className="space-y-2">
                    <input type="text" value={form[`faq${n}Q`] || ""} onChange={(e) => update(`faq${n}Q`, e.target.value)} className={inputClass} placeholder="Question" />
                    <textarea value={form[`faq${n}A`] || ""} onChange={(e) => update(`faq${n}A`, e.target.value)} rows={2} className={inputClass} placeholder="Answer" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={sectionClass}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Final CTA Section</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label><input type="text" value={form.ctaTitle} onChange={(e) => update("ctaTitle", e.target.value)} className={inputClass} /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label><input type="text" value={form.ctaSub} onChange={(e) => update("ctaSub", e.target.value)} className={inputClass} /></div>
            </div>
          </div>
        </div>
      )}

      {/* ===== IMAGES TAB ===== */}
      {activeTab === "images" && (
        <div className="space-y-6">
          <div className={sectionClass}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Hero Image</h2>
            <SettingsImageField label="Main Hero Image" value={form.heroImg || ""} onChange={(v) => update("heroImg", v)} />
          </div>
          <div className={sectionClass}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us (4 Images)</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{n:1,l:"Fully Customized"},{n:2,l:"Premium Materials"},{n:3,l:"OEM & ODM"},{n:4,l:"Worldwide Delivery"}].map((x) => (
                <SettingsImageField key={x.n} label={x.l} value={form[`whyImg${x.n}`] || ""} onChange={(v) => update(`whyImg${x.n}`, v)} />
              ))}
            </div>
          </div>
          <div className={sectionClass}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Capabilities (6 Images)</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[{n:1,l:"Laser Cutting"},{n:2,l:"CNC Machining"},{n:3,l:"Diamond Polishing"},{n:4,l:"UV Printing"},{n:5,l:"Thermoforming"},{n:6,l:"Assembly"}].map((x) => (
                <SettingsImageField key={x.n} label={x.l} value={form[`capImg${x.n}`] || ""} onChange={(v) => update(`capImg${x.n}`, v)} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== CONTACT TAB ===== */}
      {activeTab === "contact" && (
        <div className={sectionClass}>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label><input type="text" value={form.companyName} onChange={(e) => update("companyName", e.target.value)} className={inputClass} /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="text" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label><input type="text" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputClass} placeholder="Country code + number" /></div>
          </div>
        </div>
      )}
    </div>
  );
}
