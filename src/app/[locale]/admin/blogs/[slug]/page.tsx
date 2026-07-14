"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import FormField from "@/components/admin/FormField";
import ImageUploader from "@/components/admin/ImageUploader";
import { Save, X, Trash2, ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export default function AdminEditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "",
    author: "",
    excerpt: "",
    content: "",
    images: [] as string[],
  });

  useEffect(() => {
    fetchPost();
  }, [slug]);

  async function fetchPost() {
    try {
      const res = await fetch(`/api/admin/blogs/${slug}`);
      if (!res.ok) {
        showToast("Blog post not found", "error");
        router.push("/en/admin/blogs");
        return;
      }
      const data: BlogPost = await res.json();
      setForm({
        title: data.title || "",
        category: data.category || "",
        author: data.author || "",
        excerpt: data.excerpt || "",
        content: data.content || "",
        images: data.images || [],
      });
    } catch {
      showToast("Failed to load blog post", "error");
      router.push("/en/admin/blogs");
    } finally {
      setLoading(false);
    }
  }

  function updateField(field: string, value: string | string[]) {
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
      const res = await fetch(`/api/admin/blogs/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        showToast("Blog post updated");
      } else {
        const data = await res.json();
        showToast(data.error || "Failed to update blog post", "error");
      }
    } catch {
      showToast("Failed to update blog post", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    try {
      const res = await fetch(`/api/admin/blogs/${slug}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Blog post deleted");
        router.push("/en/admin/blogs");
      } else {
        showToast("Failed to delete blog post", "error");
      }
    } catch {
      showToast("Failed to delete blog post", "error");
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
          <h1 className="text-2xl font-bold text-gray-900">Edit Blog Post</h1>
          <p className="mt-1 text-sm text-gray-500">Update blog post details</p>
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
            onClick={() => router.push("/en/admin/blogs")}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <X className="h-4 w-4" />
            Cancel
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 space-y-6">
          <ImageUploader
            images={form.images}
            onChange={(imgs) => updateField("images", imgs)}
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
            {form.images.length > 0 && (
              <div className="mt-3 rounded-lg bg-blue-50 border border-blue-200 p-3 text-xs text-blue-800 space-y-1">
                <p className="font-semibold">📷 Image placement — paste these markers in your content:</p>
                <ul className="list-disc pl-4 space-y-0.5">
                  <li><code className="bg-blue-100 px-1 rounded">{"{{image:0}}"}</code> = cover image (shown on blog cards)</li>
                  {form.images.slice(1).map((_, i) => (
                    <li key={i}><code className="bg-blue-100 px-1 rounded">{"{{image:" + (i + 1) + "}}"}</code> = Image {i + 2}</li>
                  ))}
                </ul>
              </div>
            )}
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
            onClick={() => router.push("/en/admin/blogs")}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>

      <ConfirmDialog
        open={showDelete}
        title="Delete Blog Post"
        message="Are you sure you want to delete this blog post? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setShowDelete(false)}
      />
    </div>
  );
}
