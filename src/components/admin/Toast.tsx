"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "error";

type ToastData = {
  message: string;
  type: ToastType;
};

let showToastFn: ((data: ToastData) => void) | null = null;

export function showToast(message: string, type: ToastType = "success") {
  showToastFn?.({ message, type });
}

export default function Toast() {
  const [toast, setToast] = useState<ToastData | null>(null);

  useEffect(() => {
    showToastFn = setToast;
    return () => { showToastFn = null; };
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!toast) return null;

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 rounded-lg px-4 py-3 text-sm font-medium shadow-lg animate-in fade-in slide-in-from-top-2",
        toast.type === "success"
          ? "bg-green-600 text-white"
          : "bg-red-600 text-white"
      )}
    >
      {toast.message}
    </div>
  );
}
