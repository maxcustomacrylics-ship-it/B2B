"use client";

import { useState, useEffect } from "react";
import { showToast } from "@/components/admin/Toast";
import { Save, Menu } from "lucide-react";

export default function AdminNavigationPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [items, setItems] = useState<{label:string;href:string;children?:{label:string;href:string}[]}[]>([]);

  useEffect(() => { fetchItems(); }, []);

  async function fetchItems() {
    try {
      const res = await fetch("/api/admin/settings");
      const d = await res.json();
      const nav = d.navItems;
      if (nav && Array.isArray(nav)) setItems(nav);
      else setItems([
        {label:"home",href:"/"},
        {label:"capabilities",href:"",children:[{label:"Laser Cutting",href:"/services/laser-cutting"},{label:"CNC Machining",href:"/services/cnc-machining"},{label:"Diamond Polishing",href:"/services/diamond-polishing"},{label:"UV Printing",href:"/services/uv-printing"},{label:"Assembly & Packaging",href:"/services/bonding-assembly"},{label:"Quality Control",href:"/services/oem-project-support"}]},
        {label:"products",href:"/products"},
        {label:"projects",href:"/projects"},
        {label:"resources",href:"/blog"},
        {label:"about",href:"/about"},
        {label:"contact",href:"/contact"},
      ]);
    } catch { showToast("Failed to load", "error"); }
    finally { setLoading(false); }
  }

  function updateItem(i: number, field: string, value: string) {
    setItems((prev) => { const n = [...prev]; (n[i] as any)[field] = value; return n; });
  }
  function updateChild(pi: number, ci: number, field: string, value: string) {
    setItems((prev) => { const n = [...prev]; if (n[pi].children) (n[pi].children![ci] as any)[field] = value; return n; });
  }
  function addChild(pi: number) {
    setItems((prev) => { const n = [...prev]; if (!n[pi].children) n[pi].children = []; n[pi].children!.push({label:"New Item", href:"/"}); return n; });
  }
  function removeChild(pi: number, ci: number) {
    setItems((prev) => { const n = [...prev]; if (n[pi].children) n[pi].children = n[pi].children!.filter((_,i) => i !== ci); return n; });
  }

  async function save() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ navItems: items }) });
      if (res.ok) showToast("Navigation saved");
      else showToast("Save failed", "error");
    } catch { showToast("Save failed", "error"); }
    finally { setSaving(false); }
  }

  if (loading) return <div className="flex items-center justify-center py-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" /></div>;

  const inp = "block w-full rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><Menu className="h-6 w-6 text-blue-600" /> Navigation</h1><p className="mt-1 text-sm text-gray-500">Manage header navigation menu items</p></div>
        <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"><Save className="h-4 w-4" />{saving ? "Saving..." : "Save All"}</button>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl bg-white shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-gray-400 w-6">{i+1}</span>
              <input type="text" value={item.label} onChange={(e) => updateItem(i, "label", e.target.value)} className={`${inp} w-32`} placeholder="Label" />
              <input type="text" value={item.href} onChange={(e) => updateItem(i, "href", e.target.value)} className={`${inp} w-56`} placeholder="href (leave blank for dropdown)" />
              {!item.href && <span className="text-xs text-blue-500 font-medium">Dropdown Menu</span>}
              {!item.href && <button onClick={() => addChild(i)} className="text-xs text-blue-600 hover:underline ml-auto">+ Add Child</button>}
            </div>
            {item.children && item.children.length > 0 && (
              <div className="ml-9 space-y-2 border-l-2 border-blue-100 pl-4">
                {item.children.map((child, ci) => (
                  <div key={ci} className="flex items-center gap-2">
                    <span className="text-xs text-gray-300">↳</span>
                    <input type="text" value={child.label} onChange={(e) => updateChild(i, ci, "label", e.target.value)} className={`${inp} w-40`} />
                    <input type="text" value={child.href} onChange={(e) => updateChild(i, ci, "href", e.target.value)} className={`${inp} w-56`} />
                    <button onClick={() => removeChild(i, ci)} className="text-xs text-red-500 hover:underline">Remove</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
