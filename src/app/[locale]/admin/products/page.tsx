"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { Package, Plus, Pencil, Trash2, Star, ChevronUp, ChevronDown } from "lucide-react";
import type { Product } from "@/lib/types";

const catLabel: Record<string, string> = {
  "custom-acrylic": "Custom Acrylic Products",
  "acrylic-displays": "Acrylic Displays",
  "acrylic-boxes": "Boxes",
  "acrylic-signage": "Signs",
  "acrylic-home-office": "Trays & Shelves",
  "acrylic-awards-gifts": "Protective Products",
};

export default function AdminProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch("/api/admin/products");
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch {
      showToast("Failed to load products", "error");
    } finally {
      setLoading(false);
    }
  }

  async function moveUp(slug: string) {
    const sorted = [...products].sort((a, b) => (a.sort || 0) - (b.sort || 0));
    const idx = sorted.findIndex((p) => p.slug === slug);
    if (idx <= 0) return;
    const a = sorted[idx - 1], b = sorted[idx];
    const sa = a.sort || 0, sb = b.sort || 0;
    setProducts((prev) => prev.map((p) => p.slug === a.slug ? { ...p, sort: sb } : p.slug === b.slug ? { ...p, sort: sa } : p));
    await fetch(`/api/admin/products/${a.slug}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...a, sort: sb }) });
    await fetch(`/api/admin/products/${b.slug}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...b, sort: sa }) });
  }

  async function moveDown(slug: string) {
    const sorted = [...products].sort((a, b) => (a.sort || 0) - (b.sort || 0));
    const idx = sorted.findIndex((p) => p.slug === slug);
    if (idx < 0 || idx >= sorted.length - 1) return;
    const a = sorted[idx], b = sorted[idx + 1];
    const sa = a.sort || 0, sb = b.sort || 0;
    setProducts((prev) => prev.map((p) => p.slug === a.slug ? { ...p, sort: sb } : p.slug === b.slug ? { ...p, sort: sa } : p));
    await fetch(`/api/admin/products/${a.slug}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...a, sort: sb }) });
    await fetch(`/api/admin/products/${b.slug}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...b, sort: sa }) });
  }

  async function handleDelete(slug: string) {
    try {
      const res = await fetch(`/api/admin/products/${slug}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Product deleted");
        setProducts((prev) => prev.filter((p) => p.slug !== slug));
      } else {
        showToast("Failed to delete product", "error");
      }
    } catch {
      showToast("Failed to delete product", "error");
    } finally {
      setDeleteTarget(null);
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
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your product catalog</p>
        </div>
        <button
          onClick={() => router.push("/admin/products/new")}
          className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <Package className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-3 text-sm font-semibold text-gray-900">No products</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating your first product.</p>
        </div>
      ) : (
        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {[...products].sort((a, b) => (a.sort || 0) - (b.sort || 0)).map((product, i) => (
                <tr key={product.slug} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-2 py-4 text-center text-sm">
                    <div className="flex flex-col items-center gap-0.5">
                      <button onClick={() => moveUp(product.slug)} className="p-0.5 hover:bg-gray-200 rounded"><ChevronUp className="h-3 w-3 text-gray-400" /></button>
                      <button onClick={() => moveDown(product.slug)} className="p-0.5 hover:bg-gray-200 rounded"><ChevronDown className="h-3 w-3 text-gray-400" /></button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {catLabel[product.category] || product.category}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                    <button
                      onClick={() => router.push(`/admin/products/${product.slug}`)}
                      className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteTarget(product.slug)}
                      className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-red-600 hover:bg-red-50 transition-colors ml-1"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ConfirmDialog
        open={deleteTarget !== null}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
        onConfirm={() => deleteTarget && handleDelete(deleteTarget)}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
