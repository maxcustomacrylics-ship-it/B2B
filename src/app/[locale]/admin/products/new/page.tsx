"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import FormField from "@/components/admin/FormField";
import SettingsImageField from "@/components/admin/SettingsImageField";
import { Save, X, ImagePlus, ChevronDown, ChevronUp } from "lucide-react";
import type { ProductImageType } from "@/lib/types";

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

const IMAGE_SECTIONS: { type: ProductImageType; label: string; desc: string }[] = [
  { type: "gallery", label: "Product Gallery", desc: "Main product images — front, side, angle views" },
  { type: "detail", label: "Product Details", desc: "Close-ups: edge polishing, thickness, logo, surface finish" },
  { type: "manufacturing", label: "Manufacturing Process", desc: "Cutting, engraving, CNC, polishing, assembly, QC" },
  { type: "application", label: "Applications", desc: "Real usage: retail counters, exhibitions, brand promotions" },
  { type: "packaging", label: "Packaging & Shipping", desc: "Protective packaging, cartons, pallets, shipping prep" },
];

function newImage(type: ProductImageType): { src: string; alt: string; title: string; type: ProductImageType } {
  return { src: "", alt: "", title: "", type };
}

export default function AdminNewProductPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const [form, setForm] = useState({
    name: "",
    category: "acrylic-displays",
    description: "",
    longDescription: "",
    images: [
      newImage("gallery"),
    ] as { src: string; alt: string; title: string; type: ProductImageType }[],
    specs: [{ label: "Material", value: "" }, { label: "Thickness", value: "" }, { label: "Finish", value: "" }, { label: "MOQ", value: "" }, { label: "Lead Time", value: "" }] as { label: string; value: string }[],
    featured: false,
  });

  function updateField(field: string, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function updateImage(index: number, field: string, value: string) {
    setForm((prev) => {
      const imgs = [...prev.images];
      imgs[index] = { ...imgs[index], [field]: value };
      return { ...prev, images: imgs };
    });
  }

  function addImage(type: ProductImageType) {
    setForm((prev) => ({ ...prev, images: [...prev.images, newImage(type)] }));
  }

  function removeImage(index: number) {
    setForm((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
  }

  function toggleCollapse(key: string) {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      showToast("Product name is required", "error");
      return;
    }
    // Clean empty images
    const cleanImages = form.images.filter((img) => img.src.trim());
    setSaving(true);
    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, images: cleanImages }),
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
          <p className="mt-1 text-sm text-gray-500">Add a new product with structured image galleries</p>
        </div>
        <button
          onClick={() => router.push("/admin/products")}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <X className="h-4 w-4" /> Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* ── Product Info ── */}
        <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Product Information</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Product Name *">
              <input type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="e.g. Clear Acrylic Sheet 5mm" required />
            </FormField>
            <FormField label="Category">
              <select value={form.category} onChange={(e) => updateField("category", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                {CATEGORIES.map((cat) => (<option key={cat.value} value={cat.value}>{cat.label}</option>))}
              </select>
            </FormField>
          </div>

          <FormField label="Short Description">
            <textarea value={form.description} onChange={(e) => updateField("description", e.target.value)} rows={2}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Brief product summary shown on listing cards" />
          </FormField>

          <FormField label="Long Description">
            <textarea value={form.longDescription} onChange={(e) => updateField("longDescription", e.target.value)} rows={4}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Detailed product description for the product page" />
          </FormField>

          {/* Quick Specifications */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">Quick Specifications</label>
              <button type="button" onClick={() => updateField("specs", [...form.specs, { label: "", value: "" }])} className="text-xs text-blue-600 hover:underline">+ Add</button>
            </div>
            <div className="space-y-2">
              {form.specs.map((spec: any, i: number) => (
                <div key={i} className="flex gap-2 items-center">
                  <input type="text" value={spec.label} onChange={(e) => { const s = [...form.specs]; s[i].label = e.target.value; updateField("specs", s); }} className="block w-1/3 rounded-lg border border-gray-300 px-3 py-2 text-sm" placeholder="Label" />
                  <input type="text" value={spec.value} onChange={(e) => { const s = [...form.specs]; s[i].value = e.target.value; updateField("specs", s); }} className="block w-2/3 rounded-lg border border-gray-300 px-3 py-2 text-sm" placeholder="Value" />
                  <button type="button" onClick={() => updateField("specs", form.specs.filter((_: any, j: number) => j !== i))} className="text-xs text-red-500 hover:underline shrink-0">×</button>
                </div>
              ))}
            </div>
          </div>

          <FormField label="Featured">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={(e) => updateField("featured", e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
              <span className="text-sm text-gray-700">Mark this product as featured</span>
            </label>
          </FormField>
        </div>

        {/* ── Image Sections ── */}
        {IMAGE_SECTIONS.map((section) => {
          const sectionImages = form.images.filter((img) => img.type === section.type);
          const isCollapsed = collapsed[section.type];
          return (
            <div key={section.type} className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
              <button type="button" onClick={() => toggleCollapse(section.type)}
                className="flex items-center justify-between w-full text-left">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{section.label}</h2>
                  <p className="text-xs text-gray-500 mt-0.5">{section.desc} — {sectionImages.filter((i) => i.src).length} image(s)</p>
                </div>
                {isCollapsed ? <ChevronDown className="h-5 w-5 text-gray-400" /> : <ChevronUp className="h-5 w-5 text-gray-400" />}
              </button>

              {!isCollapsed && (
                <div className="mt-4 space-y-4">
                  {sectionImages.map((img, sectionIdx) => {
                    const globalIdx = form.images.indexOf(img);
                    return (
                      <div key={globalIdx} className="flex gap-4 items-start p-4 rounded-lg border border-gray-100 bg-gray-50/50">
                        <div className="w-24 h-24 shrink-0 rounded-lg border border-gray-200 overflow-hidden bg-white">
                          {img.src ? (
                            <img src={img.src} alt={img.alt || ""} className="w-full h-full object-cover" />
                          ) : (
                            <div className="flex h-full items-center justify-center text-gray-300"><ImagePlus className="h-6 w-6" /></div>
                          )}
                        </div>
                        <div className="flex-1 space-y-2">
                          <SettingsImageField
                            label="Image URL"
                            value={img.src}
                            onChange={(url) => updateImage(globalIdx, "src", url)}
                          />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <input type="text" value={img.alt} onChange={(e) => updateImage(globalIdx, "alt", e.target.value)}
                              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                              placeholder="Alt text (SEO) — e.g. Clear acrylic display stand with polished edges" />
                            <input type="text" value={img.title || ""} onChange={(e) => updateImage(globalIdx, "title", e.target.value)}
                              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                              placeholder="Image title (optional)" />
                          </div>
                        </div>
                        <button type="button" onClick={() => removeImage(globalIdx)}
                          className="text-xs text-red-500 hover:underline shrink-0 mt-2">× Remove</button>
                      </div>
                    );
                  })}
                  <button type="button" onClick={() => addImage(section.type)}
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline">
                    <ImagePlus className="h-3 w-3" /> Add {section.label} image
                  </button>
                </div>
              )}
            </div>
          );
        })}

        <div className="flex items-center gap-3">
          <button type="submit" disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <Save className="h-4 w-4" /> {saving ? "Saving..." : "Create Product"}
          </button>
          <button type="button" onClick={() => router.push("/admin/products")}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button>
        </div>
      </form>
    </div>
  );
}
