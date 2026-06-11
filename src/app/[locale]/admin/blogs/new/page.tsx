"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import FormField from "@/components/admin/FormField";
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
              <input
                type="text"
                value={form.category}
                onChange={(e) => updateField("category", e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="e.g. Industry Trends"
              />
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

          <FormField label="Excerpt">
            <textarea
              value={form.excerpt}
              onChange={(e) => updateField("excerpt", e.target.value)}
              rows={2}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Short summary shown on blog list page"
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
            <p className="mt-1 text-xs text-gray-400">Supports Markdown formatting (## for headings, ** for bold, etc.)</p>
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
