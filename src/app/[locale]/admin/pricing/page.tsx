import PricingManager from "@/components/admin/PricingManager";
import { DollarSign } from "lucide-react";

export default function PricingPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <DollarSign className="h-8 w-8" />
            Pricing Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage acrylic material rates, manufacturing costs, and discounts
          </p>
        </div>
      </div>

      <div className="mt-8">
        <PricingManager />
      </div>
    </div>
  );
}
