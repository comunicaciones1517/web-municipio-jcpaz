import { ShieldAlert } from "lucide-react";

export default function EmergencyBadge() {
  return (
    <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full">
      <ShieldAlert className="h-3.5 w-3.5" />
      Guardia 24h
    </span>
  );
}
