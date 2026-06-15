"use client";

import { useMemo, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { calculateAcrylicQuote, formatCurrency } from "@/lib/quote";
import type { QuoteInput, PricingConfig } from "@/lib/types";
import { quoteDefaults } from "@/data/pricing";

const materialOptions = [
  { value: "clear", label: "Clear Acrylic" },
  { value: "colored", label: "Colored Acrylic" },
  { value: "frosted", label: "Frosted Acrylic" },
  { value: "mirror", label: "Mirror Acrylic" },
  { value: "specialty", label: "Specialty / Custom" },
];

const complexityOptions = [
  { value: "simple", label: "Simple straight cuts" },
  { value: "moderate", label: "Moderate shapes" },
  { value: "complex", label: "Complex contours" },
];

const edgeOptions = [
  { value: "none", label: "No special finish" },
  { value: "polished", label: "Polished edge" },
  { value: "beveled", label: "Beveled edge" },
  { value: "flamePolished", label: "Flame polished" },
];

const surfaceOptions = [
  { value: "none", label: "No surface treatment" },
  { value: "uvPrint", label: "UV printing" },
  { value: "engraving", label: "Laser engraving" },
  { value: "bending", label: "Heat bending" },
];

const leadTimeOptions = [
  { value: "standard", label: "Standard 10-15 days" },
  { value: "express", label: "Express 7-10 days" },
  { value: "rush", label: "Rush 4-6 days" },
];

export default function QuoteCalculator() {
  const t = useTranslations("quote");
  const [pricingConfig, setPricingConfig] = useState<PricingConfig | null>(null);
  const [form, setForm] = useState<QuoteInput>({
    name: "",
    email: "",
    company: "",
    phone: "",
    materialType: quoteDefaults.materialType,
    width: quoteDefaults.width,
    height: quoteDefaults.height,
    thickness: quoteDefaults.thickness,
    quantity: quoteDefaults.quantity,
    complexity: quoteDefaults.complexity,
    edgeFinish: quoteDefaults.edgeFinish,
    surfaceFinish: quoteDefaults.surfaceFinish,
    leadTime: quoteDefaults.leadTime,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch pricing configuration on mount
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await fetch("/api/admin/pricing");
        if (res.ok) {
          const config = await res.json();
          setPricingConfig(config);
        }
      } catch (error) {
        console.error("Failed to fetch pricing config:", error);
      }
    };
    fetchPricing();
  }, []);

  const estimate = useMemo(
    () => calculateAcrylicQuote(form, pricingConfig || undefined),
    [form, pricingConfig]
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: ["width", "height", "thickness", "quantity"].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          estimate: {
            area: estimate.area,
            total: estimate.total,
            pricePerUnit: estimate.pricePerUnit,
            materialCost: estimate.materialCost,
            cuttingCost: estimate.cuttingCost,
            edgeCost: estimate.edgeCost,
            surfaceCost: estimate.surfaceCost,
            leadTime: form.leadTime,
          },
        }),
      });

      if (!response.ok) {
        const body = await response.json();
        setErrorMessage(body?.error || t("error"));
        setStatus("error");
      } else {
        setStatus("success");
        setForm((current) => ({
          ...current,
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        }));
      }
    } catch (error) {
      setErrorMessage(t("error"));
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t("title")}</h2>
            <p className="mt-2 text-sm text-muted">{t("description")}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("materialType")}
              </label>
              <select
                name="materialType"
                value={form.materialType}
                onChange={handleChange}
                className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                {materialOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Input
                label={t("thickness")}
                name="thickness"
                type="number"
                min={1}
                max={50}
                value={form.thickness}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Input
                label={t("width")}
                name="width"
                type="number"
                min={100}
                max={3000}
                value={form.width}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Input
                label={t("height")}
                name="height"
                type="number"
                min={100}
                max={3000}
                value={form.height}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Input
                label={t("quantity")}
                name="quantity"
                type="number"
                min={1}
                max={10000}
                value={form.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("complexity")}
              </label>
              <select
                name="complexity"
                value={form.complexity}
                onChange={handleChange}
                className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                {complexityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("edgeFinish")}
              </label>
              <select
                name="edgeFinish"
                value={form.edgeFinish}
                onChange={handleChange}
                className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                {edgeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("surfaceFinish")}
              </label>
              <select
                name="surfaceFinish"
                value={form.surfaceFinish}
                onChange={handleChange}
                className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                {surfaceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("leadTime")}
              </label>
              <select
                name="leadTime"
                value={form.leadTime}
                onChange={handleChange}
                className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                {leadTimeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4">
            <Input
              label={t("name")}
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              label={t("email")}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              label={t("company")}
              name="company"
              value={form.company}
              onChange={handleChange}
              required
            />
            <Input
              label={t("phone")}
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
            <Textarea
              label={t("message")}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("message")}
              rows={4}
            />
            {status === "error" && (
              <p className="text-sm text-red-500">{errorMessage || t("error")}</p>
            )}
            {status === "success" && (
              <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-green-800">
                {t("success")}
              </div>
            )}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? t("estimating") : t("submit")}
            </Button>
          </div>
        </div>

        <aside className="rounded-3xl bg-primary-50 p-6 text-sm text-foreground">
          <h3 className="text-lg font-semibold text-foreground">{t("estimateTitle")}</h3>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <span>{t("materialCost")}</span>
              <strong>{formatCurrency(estimate.materialCost)}</strong>
            </div>
            <div className="flex justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <span>{t("cuttingCost")}</span>
              <strong>{formatCurrency(estimate.cuttingCost)}</strong>
            </div>
            <div className="flex justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <span>{t("edgeCost")}</span>
              <strong>{formatCurrency(estimate.edgeCost)}</strong>
            </div>
            <div className="flex justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <span>{t("surfaceCost")}</span>
              <strong>{formatCurrency(estimate.surfaceCost)}</strong>
            </div>
            <div className="flex justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <span>{t("discount")}</span>
              <strong>-{formatCurrency(estimate.discountValue)}</strong>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-white p-4 text-sm">
            <div className="flex justify-between text-muted">
              <span>{t("total")}</span>
              <strong>{formatCurrency(estimate.total)}</strong>
            </div>
            <p className="mt-2 text-xs text-muted">
              {t("disclaimer")}
            </p>
          </div>

          <div className="mt-6 rounded-3xl bg-white p-4 text-xs text-muted">
            <div className="flex justify-between py-1">
              <span>{t("width")}</span>
              <span>{form.width} mm</span>
            </div>
            <div className="flex justify-between py-1">
              <span>{t("height")}</span>
              <span>{form.height} mm</span>
            </div>
            <div className="flex justify-between py-1">
              <span>{t("quantity")}</span>
              <span>{form.quantity}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>{t("leadTime")}</span>
              <span>{leadTimeOptions.find((item) => item.value === form.leadTime)?.label}</span>
            </div>
          </div>
        </aside>
      </div>
    </form>
  );
}
