"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import { FileText, Plus, Save, Upload } from "lucide-react";
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

  async function uploadBlogImage(index: number, file: File) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        const current = blogs[index].images || [];
        updateBlog(index, "images" as any, JSON.stringify([...current, data.url]));
      } else {
        showToast("Image upload failed", "error");
      }
    } catch {
      showToast("Image upload failed", "error");
    }
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
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/en/admin/blogs/new")}
            className="inline-flex items-center gap-2 rounded-lg border border-primary-600 bg-white px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Blog Post
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !dirty}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Save All"}
          </button>
        </div>
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
            <BlogEntry key={blog.slug} blog={blog} index={index} updateBlog={updateBlog} uploadImage={uploadBlogImage} />
          ))}
        </div>
      )}
    </div>
  );
}

function BlogEntry({
  blog,
  index,
  updateBlog,
  uploadImage,
}: {
  blog: BlogPost;
  index: number;
  updateBlog: (i: number, f: keyof BlogPost, v: string) => void;
  uploadImage: (i: number, file: File) => Promise<void>;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    await uploadImage(index, file);
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
      {/* Images preview */}
      <div className="flex items-start gap-4 mb-4">
        <div className="h-20 w-20 shrink-0 rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
          {blog.images?.[0] ? (
            <img src={blog.images[0]} alt={blog.title || "Blog post image"} className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-300">
              <FileText className="h-8 w-8" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <label className="block text-xs font-medium text-gray-500 mb-1">Images (JSON array)</label>
          <input
            type="text"
            value={JSON.stringify(blog.images || [])}
            onChange={(e) => {
              try { updateBlog(index, "images" as any, JSON.stringify(JSON.parse(e.target.value))); } catch {}
            }}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 font-mono"
            placeholder='["/images/cover.jpg","/images/body1.jpg"]'
          />
        </div>
        <div className="pt-5">
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFilePick} className="hidden" />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            <Upload className="h-3 w-3" />
            {uploading ? "..." : "Upload"}
          </button>
        </div>
      </div>

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
  );
}
