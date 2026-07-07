"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import FormField from "@/components/admin/FormField";
import SettingsImageField from "@/components/admin/SettingsImageField";
import { Save, X } from "lucide-react";
import type { ProductCategory } from "@/lib/types";

const CATEGORIES = [
  { value: "acrylic-displays", label: "Custom Acrylic Products / Displays" },
  { value: "acrylic-boxes", label: "Acrylic Boxes" },
  { value: "acrylic-signage", label: "Acrylic Signs" },
  { value: "acrylic-home-office", label: "Acrylic Trays & Shelves" },
  { value: "acrylic-awards-gifts", label: "Protective Products" },
];

export default function AdminNewProductPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "acrylic-displays",
    description: "",
    longDescription: "",
    images: [""] as string[],
    featured: false,
  });

  function updateField(field: string, value: string | boolean | string[]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      showToast("Product name is required", "error");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        showToast("Product created");
        router.push("/admin/products");
      } else {
        showToast("Failed to create product", "error");
      }
    } catch {
      showToast("Failed to create product", "error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">New Product</h1>
          <p className="mt-1 text-sm text-gray-500">Add a new product to your catalog</p>
        </div>
        <button
          onClick={() => router.push("/admin/products")}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <X className="h-4 w-4" />
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">Product Images (1–4)</label>
              <div className="flex gap-2">
                {form.images.length < 4 && (
                  <button type="button" onClick={() => updateField("images", [...form.images, ""])} className="text-xs text-blue-600 hover:underline">+ Add Image</button>
                )}
                {form.images.length > 1 && (
                  <button type="button" onClick={() => updateField("images", form.images.slice(0, -1))} className="text-xs text-red-500 hover:underline">− Remove Last</button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {form.images.map((_, i) => (
                <SettingsImageField
                  key={i}
                  label={`Image ${i + 1}`}
                  value={form.images[i] || ""}
                  onChange={(url) => {
                    const imgs = [...form.images];
                    imgs[i] = url;
                    updateField("images", imgs.filter(Boolean) as any);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Product Name">
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="e.g. Clear Acrylic Sheet 5mm"
                required
              />
            </FormField>

            <FormField label="Category">
              <select
                value={form.category}
                onChange={(e) => updateField("category", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </FormField>
          </div>

          <FormField label="Description">
            <textarea
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              rows={3}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Short product description"
            />
          </FormField>

          <FormField label="Long Description">
            <textarea
              value={form.longDescription}
              onChange={(e) => updateField("longDescription", e.target.value)}
              rows={5}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Detailed product description"
            />
          </FormField>

          <FormField label="Specifications">
            <input
              type="text"
              disabled
              className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400 cursor-not-allowed"
              placeholder="Edit specs in JSON after creation"
            />
            <p className="mt-1 text-xs text-gray-400">Edit specs in JSON after creation</p>
          </FormField>

          <FormField label="Applications">
            <input
              type="text"
              disabled
              className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400 cursor-not-allowed"
              placeholder="Edit applications in JSON after creation"
            />
            <p className="mt-1 text-xs text-gray-400">Edit applications in JSON after creation</p>
          </FormField>

          <FormField label="Featured">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => updateField("featured", e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">Mark this product as featured</span>
            </label>
          </FormField>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Create Product"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/products")}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
