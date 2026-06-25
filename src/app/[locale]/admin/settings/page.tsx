"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import FormField from "@/components/admin/FormField";
import SettingsImageField from "@/components/admin/SettingsImageField";
import { Settings as SettingsIcon, Save } from "lucide-react";

type SiteSettings = {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  businessHours: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  heroImg1: string; heroImg2: string; heroImg3: string; heroImg4: string;
  factoryImg1: string; factoryImg2: string; factoryImg3: string; factoryImg4: string; factoryImg5: string;
  statYears: string; statArea: string; statCountries: string; statProducts: string;
  heroBtnPrimaryUrl: string; heroBtnSecondaryUrl: string;
  factoryTitle: string; factoryDesc: string;
  blogTitle: string; blogDesc: string;
  rfqTitle: string; rfqDesc: string; rfqSuccess: string;
  catImg1: string; catImg2: string; catImg3: string; catImg4: string;
  capImg1: string; capImg2: string; capImg3: string; capImg4: string; capImg5: string;
};

export default function AdminSettingsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<SiteSettings>({
    companyName: "",
    phone: "",
    email: "",
    address: "",
    whatsapp: "",
    businessHours: "",
    heroHeadline: "",
    heroSubheadline: "",
    heroBadge: "",
    ctaTitle: "",
    ctaSubtitle: "",
    ctaButton: "",
    heroImg1: "", heroImg2: "", heroImg3: "", heroImg4: "",
    factoryImg1: "", factoryImg2: "", factoryImg3: "", factoryImg4: "", factoryImg5: "",
    statYears: "", statArea: "", statCountries: "", statProducts: "",
    heroBtnPrimaryUrl: "", heroBtnSecondaryUrl: "",
    factoryTitle: "", factoryDesc: "",
    blogTitle: "", blogDesc: "",
    rfqTitle: "", rfqDesc: "", rfqSuccess: "",
    catImg1: "", catImg2: "", catImg3: "", catImg4: "",
    capImg1: "", capImg2: "", capImg3: "", capImg4: "", capImg5: "",
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      setForm({
        companyName: data.companyName || "",
        phone: data.phone || "",
        email: data.email || "",
        address: data.address || "",
        whatsapp: data.whatsapp || "",
        businessHours: data.businessHours || "",
        heroHeadline: data.heroHeadline || "",
        heroSubheadline: data.heroSubheadline || "",
        heroBadge: data.heroBadge || "",
        ctaTitle: data.ctaTitle || "",
        ctaSubtitle: data.ctaSubtitle || "",
        ctaButton: data.ctaButton || "",
        heroImg1: data.heroImg1 || "", heroImg2: data.heroImg2 || "", heroImg3: data.heroImg3 || "", heroImg4: data.heroImg4 || "",
        factoryImg1: data.factoryImg1 || "", factoryImg2: data.factoryImg2 || "", factoryImg3: data.factoryImg3 || "", factoryImg4: data.factoryImg4 || "", factoryImg5: data.factoryImg5 || "",
        statYears: data.statYears || "", statArea: data.statArea || "", statCountries: data.statCountries || "", statProducts: data.statProducts || "",
        heroBtnPrimaryUrl: data.heroBtnPrimaryUrl || "", heroBtnSecondaryUrl: data.heroBtnSecondaryUrl || "",
        factoryTitle: data.factoryTitle || "", factoryDesc: data.factoryDesc || "",
        blogTitle: data.blogTitle || "", blogDesc: data.blogDesc || "",
        rfqTitle: data.rfqTitle || "", rfqDesc: data.rfqDesc || "", rfqSuccess: data.rfqSuccess || "",
        catImg1: data.catImg1 || "", catImg2: data.catImg2 || "", catImg3: data.catImg3 || "", catImg4: data.catImg4 || "",
        capImg1: data.capImg1 || "", capImg2: data.capImg2 || "", capImg3: data.capImg3 || "", capImg4: data.capImg4 || "", capImg5: data.capImg5 || "",
      });
    } catch {
      showToast("Failed to load settings", "error");
    } finally {
      setLoading(false);
    }
  }

  function updateField(field: keyof SiteSettings, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        showToast("Settings saved");
      } else {
        showToast("Failed to save settings", "error");
      }
    } catch {
      showToast("Failed to save settings", "error");
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
          <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your company and contact information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Company Name">
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Your company name"
              />
            </FormField>

            <FormField label="Phone">
              <input
                type="text"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="+86 138-0000-0000"
              />
            </FormField>

            <FormField label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="info@company.com"
              />
            </FormField>

            <FormField label="WhatsApp">
              <input
                type="text"
                value={form.whatsapp}
                onChange={(e) => updateField("whatsapp", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Country code + number"
              />
            </FormField>

            <FormField label="Address" className="sm:col-span-2">
              <input
                type="text"
                value={form.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Full business address"
              />
            </FormField>

            <FormField label="Business Hours" className="sm:col-span-2">
              <input
                type="text"
                value={form.businessHours}
                onChange={(e) => updateField("businessHours", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Mon-Fri: 8:00 AM - 6:00 PM (CST)"
              />
            </FormField>
          </div>

          {/* Homepage Hero */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Homepage Hero</h2>
            <div className="grid grid-cols-1 gap-4">
              <FormField label="Hero Badge">
                <input type="text" value={form.heroBadge} onChange={(e) => updateField("heroBadge", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="OEM & ODM Acrylic Manufacturer" />
              </FormField>
              <FormField label="Hero Headline">
                <input type="text" value={form.heroHeadline} onChange={(e) => updateField("heroHeadline", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="Custom Acrylic Products Manufacturer in China" />
              </FormField>
              <FormField label="Hero Subheadline">
                <textarea value={form.heroSubheadline} onChange={(e) => updateField("heroSubheadline", e.target.value)} rows={3} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="OEM & ODM acrylic fabrication services..." />
              </FormField>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Bottom CTA Section</h2>
            <div className="grid grid-cols-1 gap-4">
              <FormField label="CTA Title">
                <input type="text" value={form.ctaTitle} onChange={(e) => updateField("ctaTitle", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="Ready to Start Your Custom Acrylic Project?" />
              </FormField>
              <FormField label="CTA Subtitle">
                <input type="text" value={form.ctaSubtitle} onChange={(e) => updateField("ctaSubtitle", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="Get a free quote within 24 hours." />
              </FormField>
              <FormField label="CTA Button Text">
                <input type="text" value={form.ctaButton} onChange={(e) => updateField("ctaButton", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="Get Free Quote" />
              </FormField>
            </div>
          </div>

          {/* Stats Section */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Stats (Homepage)</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField label="Years Experience"><input type="text" value={form.statYears} onChange={(e) => updateField("statYears", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField>
              <FormField label="Factory Area"><input type="text" value={form.statArea} onChange={(e) => updateField("statArea", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField>
              <FormField label="Countries Served"><input type="text" value={form.statCountries} onChange={(e) => updateField("statCountries", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField>
              <FormField label="Custom Product Types"><input type="text" value={form.statProducts} onChange={(e) => updateField("statProducts", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField>
            </div>
          </div>

          {/* Hero Button URLs */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Hero Buttons</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField label="Primary Button URL"><input type="text" value={form.heroBtnPrimaryUrl} onChange={(e) => updateField("heroBtnPrimaryUrl", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="/contact" /></FormField>
              <FormField label="Secondary Button URL"><input type="text" value={form.heroBtnSecondaryUrl} onChange={(e) => updateField("heroBtnSecondaryUrl", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="/products" /></FormField>
            </div>
          </div>

          {/* Factory Section */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Factory Section</h2>
            <FormField label="Title"><input type="text" value={form.factoryTitle} onChange={(e) => updateField("factoryTitle", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField>
            <div className="mt-4"><FormField label="Description"><textarea value={form.factoryDesc} onChange={(e) => updateField("factoryDesc", e.target.value)} rows={2} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField></div>
          </div>

          {/* Blog Section */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Industry Insights Section</h2>
            <FormField label="Title"><input type="text" value={form.blogTitle} onChange={(e) => updateField("blogTitle", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField>
            <div className="mt-4"><FormField label="Description"><input type="text" value={form.blogDesc} onChange={(e) => updateField("blogDesc", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField></div>
          </div>

          {/* RFQ Section */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">RFQ / Contact Section</h2>
            <FormField label="Title"><input type="text" value={form.rfqTitle} onChange={(e) => updateField("rfqTitle", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField>
            <div className="mt-4"><FormField label="Description"><textarea value={form.rfqDesc} onChange={(e) => updateField("rfqDesc", e.target.value)} rows={2} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField></div>
            <div className="mt-4"><FormField label="Success Message"><input type="text" value={form.rfqSuccess} onChange={(e) => updateField("rfqSuccess", e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" /></FormField></div>
          </div>

          {/* Category Images */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Category Images (Popular Products)</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <SettingsImageField label="Acrylic Displays" value={form.catImg1} onChange={(v) => updateField("catImg1", v)} />
              <SettingsImageField label="Acrylic Boxes" value={form.catImg2} onChange={(v) => updateField("catImg2", v)} />
              <SettingsImageField label="Acrylic Signage" value={form.catImg3} onChange={(v) => updateField("catImg3", v)} />
              <SettingsImageField label="Acrylic Home & Office" value={form.catImg4} onChange={(v) => updateField("catImg4", v)} />
            </div>
          </div>

          {/* Capability Images */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Capability Images (Manufacturing)</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <SettingsImageField label="Laser Cutting" value={form.capImg1} onChange={(v) => updateField("capImg1", v)} />
              <SettingsImageField label="CNC Machining" value={form.capImg2} onChange={(v) => updateField("capImg2", v)} />
              <SettingsImageField label="Diamond Polishing" value={form.capImg3} onChange={(v) => updateField("capImg3", v)} />
              <SettingsImageField label="UV Printing" value={form.capImg4} onChange={(v) => updateField("capImg4", v)} />
              <SettingsImageField label="Assembly" value={form.capImg5} onChange={(v) => updateField("capImg5", v)} />
            </div>
          </div>

          {/* Homepage Images */}
          <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Hero & Factory Images</h2>
            <p className="text-xs text-gray-500 mb-4">Upload product images via Products admin, then paste the Supabase URL here.</p>

            <h3 className="text-sm font-medium text-gray-700 mb-2">Hero Section Images (4)</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <SettingsImageField label="Hero Image 1" value={form.heroImg1} onChange={(v) => updateField("heroImg1", v)} />
              <SettingsImageField label="Hero Image 2" value={form.heroImg2} onChange={(v) => updateField("heroImg2", v)} />
              <SettingsImageField label="Hero Image 3" value={form.heroImg3} onChange={(v) => updateField("heroImg3", v)} />
              <SettingsImageField label="Hero Image 4" value={form.heroImg4} onChange={(v) => updateField("heroImg4", v)} />
            </div>

            <h3 className="text-sm font-medium text-gray-700 mb-2 mt-6">Factory Section Images (4)</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <SettingsImageField label="Factory Image 1" value={form.factoryImg1} onChange={(v) => updateField("factoryImg1", v)} />
              <SettingsImageField label="Factory Image 2" value={form.factoryImg2} onChange={(v) => updateField("factoryImg2", v)} />
              <SettingsImageField label="Factory Image 3" value={form.factoryImg3} onChange={(v) => updateField("factoryImg3", v)} />
              <SettingsImageField label="Factory Image 4" value={form.factoryImg4} onChange={(v) => updateField("factoryImg4", v)} />
              <SettingsImageField label="Factory Image 5" value={form.factoryImg5} onChange={(v) => updateField("factoryImg5", v)} />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
