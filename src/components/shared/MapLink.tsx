import { MapPin } from "lucide-react";

interface MapLinkProps {
  href: string;
  address?: string;
}

export default function MapLink({ href, address }: MapLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 hover:underline"
    >
      <MapPin className="h-4 w-4 shrink-0" />
      <span>{address ?? "Ver en Google Maps"}</span>
    </a>
  );
}
