"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import { FileText, Save } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch {
      showToast("Failed to load blog posts", "error");
    } finally {
      setLoading(false);
    }
  }

  function updateBlog(index: number, field: keyof BlogPost, value: string) {
    setBlogs((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    setDirty(true);
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogs),
      });
      if (res.ok) {
        showToast("Blog posts saved");
        setDirty(false);
      } else {
        showToast("Failed to save blog posts", "error");
      }
    } catch {
      showToast("Failed to save blog posts", "error");
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
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="mt-1 text-sm text-gray-500">Edit blog post details inline</p>
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

      {blogs.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-3 text-sm font-semibold text-gray-900">No blog posts</h3>
          <p className="mt-1 text-sm text-gray-500">No blog posts have been added yet.</p>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {blogs.map((blog, index) => (
            <div key={blog.slug} className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                  <input
                    type="text"
                    value={blog.title}
                    onChange={(e) => updateBlog(index, "title", e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Excerpt</label>
                  <input
                    type="text"
                    value={blog.excerpt}
                    onChange={(e) => updateBlog(index, "excerpt", e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Category</label>
                  <input
                    type="text"
                    value={blog.category}
                    onChange={(e) => updateBlog(index, "category", e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
