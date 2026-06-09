import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export default function FormField({ label, children, className }: FormFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
}
