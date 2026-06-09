"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import FormField from "@/components/admin/FormField";
import { Settings as SettingsIcon, Save } from "lucide-react";

type SiteSettings = {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  businessHours: string;
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
