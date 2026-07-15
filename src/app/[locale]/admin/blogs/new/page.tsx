"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import FormField from "@/components/admin/FormField";
import ImageUploader from "@/components/admin/ImageUploader";
import { Save, X } from "lucide-react";

export default function AdminNewBlogPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "",
    author: "",
    excerpt: "",
    content: "",
    images: [] as string[],
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim()) {
      showToast("Title is required", "error");
      return;
    }
    if (!form.content.trim()) {
      showToast("Content is required", "error");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        showToast("Blog post created");
        router.push("/en/admin/blogs");
      } else {
        const data = await res.json();
        showToast(data.error || "Failed to create blog post", "error");
      }
    } catch {
      showToast("Failed to create blog post", "error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">New Blog Post</h1>
          <p className="mt-1 text-sm text-gray-500">Create a new blog post</p>
        </div>
        <button
          onClick={() => router.push("/en/admin/blogs")}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <X className="h-4 w-4" />
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 space-y-6">
          <ImageUploader
            images={form.images}
            onChange={(imgs) => updateField("images", imgs as any)}
            label="Article Images"
            multiple={true}
          />

          <FormField label="Title *">
            <input
              type="text"
              value={form.title}
              onChange={(e) => updateField("title", e.target.value)}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="e.g. Why Acrylic Is the Future of Retail Displays"
              required
            />
          </FormField>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField label="Category">
              <select
                value={form.category}
                onChange={(e) => updateField("category", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                <option value="">Select a category</option>
                {["Material Hub","Manufacturing Hub","Application Hub","Buying Guide","Design Hub","Case Studies","FAQs"].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </FormField>

            <FormField label="Author">
              <input
                type="text"
                value={form.author}
                onChange={(e) => updateField("author", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Author name (defaults to Admin)"
              />
            </FormField>
          </div>

          <FormField label="Meta Description">
            <textarea
              value={form.excerpt}
              onChange={(e) => updateField("excerpt", e.target.value)}
              rows={2}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Brief page description for search engines (120–160 characters recommended)"
            />
          </FormField>

          <FormField label="Content *">
            <textarea
              value={form.content}
              onChange={(e) => updateField("content", e.target.value)}
              rows={15}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 font-mono"
              placeholder="Write your blog post content here. Supports Markdown formatting."
              required
            />
            <p className="mt-1 text-xs text-gray-400">Markdown: # / ## / ### for headings, **bold**, [text](url) for links</p>
            <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm space-y-3">
              {/* Images */}
              <div>
                <p className="font-semibold text-amber-900">📷 How to insert images:</p>
                <ol className="list-decimal pl-5 space-y-1 text-amber-800 mt-1">
                  <li>Upload images using the <strong>Article Images</strong> uploader at the top of this form</li>
                  <li>Type <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">{"{{image:0}}"}</code> where you want the <strong>cover image</strong> (shown on blog cards)</li>
                  <li>Type <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">{"{{image:1}}"}</code>, <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">{"{{image:2}}"}</code> etc. for additional images — markers work <strong>inline</strong></li>
                  <li>Markers are automatically <strong>hidden</strong> on the published page</li>
                </ol>
                {form.images.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-amber-200">
                    <p className="text-xs font-medium text-amber-700 mb-1">Your uploaded images — copy these markers:</p>
                    <div className="flex flex-wrap gap-2">
                      {form.images.map((url, i) => (
                        <span key={i} className="inline-flex items-center gap-1 bg-white border border-amber-300 rounded px-2 py-1 text-xs">
                          <span className="font-mono font-semibold text-amber-900">{"{{image:" + i + "}}"}</span>
                          <span className="text-amber-500">→</span>
                          <span className="text-gray-500 truncate max-w-[120px]" title={url}>{url.split("/").pop() || `Image ${i + 1}`}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="pt-2 border-t border-amber-200">
                <p className="font-semibold text-amber-900">🔗 How to add links:</p>
                <ul className="list-disc pl-5 space-y-1 text-amber-800 mt-1">
                  <li><strong>Internal link:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded text-xs font-mono">[Product Catalog](/products/custom-acrylic-products)</code> → links to a page on your site</li>
                  <li><strong>External link:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded text-xs font-mono">[Learn more](https://example.com)</code> → links to another website (opens in new tab)</li>
                  <li>Links work <strong>anywhere</strong> — in headings, paragraphs, list items, tables</li>
                  <li>Example paragraph: <code className="bg-amber-100 px-1 py-0.5 rounded text-xs font-mono">Check our [acrylic displays](/products/acrylic-displays-2) and [contact us](/contact) for a quote.</code></li>
                </ul>
              </div>
            </div>
          </FormField>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Create Blog Post"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/en/admin/blogs")}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
