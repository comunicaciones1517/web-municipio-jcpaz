import { Phone } from "lucide-react";

interface PhoneLinkProps {
  number: string;
  label?: string;
  className?: string;
}

export default function PhoneLink({ number, label, className }: PhoneLinkProps) {
  const clean = number.replace(/\s/g, "").replace(/-/g, "");
  return (
    <a
      href={`tel:${clean}`}
      className={`inline-flex items-center gap-1.5 text-primary-600 hover:text-primary-800 hover:underline ${className ?? ""}`}
    >
      <Phone className="h-4 w-4 shrink-0" />
      <span>{label ?? number}</span>
    </a>
  );
}
