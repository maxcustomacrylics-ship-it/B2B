"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import FormField from "@/components/admin/FormField";
import SettingsImageField from "@/components/admin/SettingsImageField";
import { Save, X, Trash2 } from "lucide-react";
import type { Product, ProductCategory } from "@/lib/types";

const CATEGORIES = [
  { value: "acrylic-precision-instruments", label: "Precision Instruments" },
  { value: "acrylic-displays", label: "Acrylic Displays" },
  { value: "acrylic-boxes", label: "Boxes" },
  { value: "acrylic-signage", label: "Signs" },
  { value: "acrylic-home-office", label: "Trays & Shelves" },
  { value: "acrylic-awards-gifts", label: "Protective Products" },
  { value: "acrylic-furniture", label: "Acrylic Furniture" },
  { value: "acrylic-trophies", label: "Acrylic Trophies" },
  { value: "custom-acrylic", label: "Custom Acrylic Products" },
];

export default function AdminEditProductPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "acrylic-displays",
    description: "",
    longDescription: "",
    images: [] as (string | { src: string; alt: string; title?: string; type: string })[],
    specs: [] as { label: string; value: string }[],
    featured: false,
  });

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  async function fetchProduct() {
    try {
      const res = await fetch(`/api/admin/products/${slug}`);
      if (!res.ok) {
        showToast("Product not found", "error");
        router.push("/admin/products");
        return;
      }
      const data: Product = await res.json();
      setForm({
        name: data.name || "",
        category: data.category || "acrylic-displays",
        description: data.description || "",
        longDescription: data.longDescription || "",
        images: data.images || [],
        specs: data.specs || [{ label: "Material", value: "" }, { label: "Thickness", value: "" }, { label: "Finish", value: "" }, { label: "MOQ", value: "" }, { label: "Lead Time", value: "" }],
        featured: data.featured || false,
      });
    } catch {
      showToast("Failed to load product", "error");
      router.push("/admin/products");
    } finally {
      setLoading(false);
    }
  }

  function updateField(field: string, value: string | boolean | any[]) {
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
      const res = await fetch(`/api/admin/products/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        showToast("Product updated");
      } else {
        showToast("Failed to update product", "error");
      }
    } catch {
      showToast("Failed to update product", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    try {
      const res = await fetch(`/api/admin/products/${slug}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Product deleted");
        router.push("/admin/products");
      } else {
        showToast("Failed to delete product", "error");
      }
    } catch {
      showToast("Failed to delete product", "error");
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
          <h1 className="text-2xl font-bold text-gray-900">Edit Product</h1>
          <p className="mt-1 text-sm text-gray-500">Update product details</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDelete(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </button>
          <button
            onClick={() => router.push("/admin/products")}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <X className="h-4 w-4" />
            Cancel
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 space-y-6">
          {/* Product Images */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">Product Images (1–4)</label>
              <div className="flex gap-2">
                {form.images.length < 4 && (
                  <button type="button" onClick={() => updateField("images", [...form.images, ""] as any)} className="text-xs text-blue-600 hover:underline">+ Add Image</button>
                )}
                {form.images.length > 1 && (
                  <button type="button" onClick={() => updateField("images", form.images.slice(0, -1))} className="text-xs text-red-500 hover:underline">− Remove Last</button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {form.images.map((img, i) => {
                const src = typeof img === "string" ? img : (img as any).src || "";
                return (
                  <SettingsImageField
                    key={i}
                    label={`Image ${i + 1}`}
                    value={src}
                    onChange={(url) => {
                      const imgs = [...form.images] as any[];
                      if (typeof imgs[i] === "string") {
                        imgs[i] = url;
                      } else {
                        imgs[i] = { ...imgs[i], src: url };
                      }
                      updateField("images", imgs.filter((x: any) => typeof x === "string" ? x : x?.src));
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Quick Specifications */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">Quick Specifications</label>
              <button type="button" onClick={() => updateField("specs", [...(form.specs as any[]), { label: "", value: "" }])} className="text-xs text-blue-600 hover:underline">+ Add</button>
            </div>
            <div className="space-y-2">
              {(form.specs as any[] || []).map((spec: any, i: number) => (
                <div key={i} className="flex gap-2 items-center">
                  <input type="text" value={spec.label} onChange={(e) => { const s = [...(form.specs as any[])]; s[i].label = e.target.value; updateField("specs", s); }} className="block w-1/3 rounded-lg border border-gray-300 px-3 py-2 text-sm" placeholder="Label" />
                  <input type="text" value={spec.value} onChange={(e) => { const s = [...(form.specs as any[])]; s[i].value = e.target.value; updateField("specs", s); }} className="block w-2/3 rounded-lg border border-gray-300 px-3 py-2 text-sm" placeholder="Value" />
                  <button type="button" onClick={() => updateField("specs", (form.specs as any[]).filter((_: any, j: number) => j !== i))} className="text-xs text-red-500 hover:underline shrink-0">×</button>
                </div>
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
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
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
            {saving ? "Saving..." : "Save Changes"}
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

      <ConfirmDialog
        open={showDelete}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setShowDelete(false)}
      />
    </div>
  );
}
