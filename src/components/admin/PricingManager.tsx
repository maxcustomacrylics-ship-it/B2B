"use client";

import { useState, useEffect } from "react";
import { showToast } from "@/components/admin/Toast";
import FormField from "@/components/admin/FormField";
import { DollarSign, Save } from "lucide-react";
import type { PricingConfig } from "@/lib/types";

export default function PricingManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<PricingConfig>({
    materialRates: {},
    complexityRates: {},
    edgeTreatmentRates: {},
    surfaceFinishRates: {},
    leadTimeMultipliers: {},
    quantityDiscounts: [],
  });

  useEffect(() => {
    fetchPricing();
  }, []);

  async function fetchPricing() {
    try {
      const res = await fetch("/api/admin/pricing");
      const data = await res.json();
      setForm(data);
    } catch {
      showToast("Failed to load pricing", "error");
    } finally {
      setLoading(false);
    }
  }

  function updateMaterialRate(material: string, value: number) {
    setForm((prev) => ({
      ...prev,
      materialRates: { ...prev.materialRates, [material]: value },
    }));
  }

  function updateComplexityRate(type: string, value: number) {
    setForm((prev) => ({
      ...prev,
      complexityRates: { ...prev.complexityRates, [type]: value },
    }));
  }

  function updateEdgeRate(type: string, value: number) {
    setForm((prev) => ({
      ...prev,
      edgeTreatmentRates: { ...prev.edgeTreatmentRates, [type]: value },
    }));
  }

  function updateSurfaceRate(type: string, value: number) {
    setForm((prev) => ({
      ...prev,
      surfaceFinishRates: { ...prev.surfaceFinishRates, [type]: value },
    }));
  }

  function updateLeadTimeMultiplier(type: string, value: number) {
    setForm((prev) => ({
      ...prev,
      leadTimeMultipliers: { ...prev.leadTimeMultipliers, [type]: value },
    }));
  }

  function updateQuantityDiscount(index: number, field: "min" | "rate", value: number) {
    setForm((prev) => {
      const discounts = [...prev.quantityDiscounts];
      if (field === "min") {
        discounts[index].min = value;
      } else {
        discounts[index].rate = value;
      }
      return { ...prev, quantityDiscounts: discounts };
    });
  }

  function addQuantityDiscount() {
    setForm((prev) => ({
      ...prev,
      quantityDiscounts: [...prev.quantityDiscounts, { min: 1000, rate: 0.1 }],
    }));
  }

  function removeQuantityDiscount(index: number) {
    setForm((prev) => ({
      ...prev,
      quantityDiscounts: prev.quantityDiscounts.filter((_, i) => i !== index),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/admin/pricing", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        showToast("Pricing updated successfully");
      } else {
        showToast("Failed to update pricing", "error");
      }
    } catch {
      showToast("Failed to update pricing", "error");
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Material Rates */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Material Unit Prices
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(form.materialRates).map(([material, rate]) => (
            <FormField key={material} label={`${material.charAt(0).toUpperCase() + material.slice(1)} (USD/m²)`}>
              <input
                type="number"
                value={rate}
                onChange={(e) => updateMaterialRate(material, Number(e.target.value))}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </FormField>
          ))}
        </div>
      </div>

      {/* Complexity Rates */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Cutting Complexity Multipliers</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(form.complexityRates).map(([type, rate]) => (
            <FormField key={type} label={`${type.charAt(0).toUpperCase() + type.slice(1)}`}>
              <input
                type="number"
                step="0.01"
                value={rate}
                onChange={(e) => updateComplexityRate(type, Number(e.target.value))}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </FormField>
          ))}
        </div>
      </div>

      {/* Edge Treatment */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Edge Treatment Rates (USD/m)</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(form.edgeTreatmentRates).map(([type, rate]) => (
            <FormField key={type} label={`${type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, " $1")}`}>
              <input
                type="number"
                value={rate}
                onChange={(e) => updateEdgeRate(type, Number(e.target.value))}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </FormField>
          ))}
        </div>
      </div>

      {/* Surface Finish */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Surface Finish Rates (USD/m²)</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(form.surfaceFinishRates).map(([type, rate]) => (
            <FormField key={type} label={`${type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, " $1")}`}>
              <input
                type="number"
                value={rate}
                onChange={(e) => updateSurfaceRate(type, Number(e.target.value))}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </FormField>
          ))}
        </div>
      </div>

      {/* Lead Time */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Lead Time Multipliers</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(form.leadTimeMultipliers).map(([type, rate]) => (
            <FormField key={type} label={`${type.charAt(0).toUpperCase() + type.slice(1)}`}>
              <input
                type="number"
                step="0.01"
                value={rate}
                onChange={(e) => updateLeadTimeMultiplier(type, Number(e.target.value))}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </FormField>
          ))}
        </div>
      </div>

      {/* Quantity Discounts */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Quantity Discounts</h2>
          <button
            type="button"
            onClick={addQuantityDiscount}
            className="text-sm px-3 py-1 rounded bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            + Add Tier
          </button>
        </div>
        <div className="space-y-3">
          {form.quantityDiscounts.map((discount, index) => (
            <div key={index} className="flex gap-4 items-end">
              <FormField label="Min Quantity" className="flex-1">
                <input
                  type="number"
                  value={discount.min}
                  onChange={(e) => updateQuantityDiscount(index, "min", Number(e.target.value))}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </FormField>
              <FormField label="Discount Rate" className="flex-1">
                <input
                  type="number"
                  step="0.01"
                  value={discount.rate}
                  onChange={(e) => updateQuantityDiscount(index, "rate", Number(e.target.value))}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </FormField>
              <button
                type="button"
                onClick={() => removeQuantityDiscount(index)}
                className="text-sm px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Save className="h-4 w-4" />
        {saving ? "Saving..." : "Save Pricing"}
      </button>
    </form>
  );
}
