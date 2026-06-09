"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import { Wrench, Save } from "lucide-react";
import type { Service } from "@/lib/types";

export default function AdminServicesPage() {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const res = await fetch("/api/admin/services");
      const data = await res.json();
      setServices(Array.isArray(data) ? data : []);
    } catch {
      showToast("Failed to load services", "error");
    } finally {
      setLoading(false);
    }
  }

  function updateService(index: number, field: keyof Service, value: string) {
    setServices((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    setDirty(true);
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/services", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(services),
      });
      if (res.ok) {
        showToast("Services saved");
        setDirty(false);
      } else {
        showToast("Failed to save services", "error");
      }
    } catch {
      showToast("Failed to save services", "error");
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
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="mt-1 text-sm text-gray-500">Edit service details inline</p>
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

      {services.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <Wrench className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-3 text-sm font-semibold text-gray-900">No services</h3>
          <p className="mt-1 text-sm text-gray-500">No services have been added yet.</p>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {services.map((service, index) => (
            <div key={service.slug} className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => updateService(index, "title", e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Icon</label>
                  <input
                    type="text"
                    value={service.icon}
                    disabled
                    className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400 cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                <textarea
                  value={service.description}
                  onChange={(e) => updateService(index, "description", e.target.value)}
                  rows={2}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
