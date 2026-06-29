"use client";

import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { useSettings } from "@/components/providers/SettingsProvider";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in your acrylic board customization services. Could you please provide more information?"
);

export default function WhatsAppButton() {
  const t = useTranslations("whatsapp");
  const settings = useSettings();

  return (
    <a
      href={`https://wa.me/${settings.whatsapp}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("message")}
      className="fixed top-1/2 -translate-y-1/2 right-4 lg:bottom-6 lg:top-auto lg:translate-y-0 lg:right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
}
