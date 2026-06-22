import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ChevronRight, Building2 } from "lucide-react";
import type { MunicipalOffice } from "@/types";
import HoursDisplay from "@/components/shared/HoursDisplay";

interface OfficeCardProps {
  office: MunicipalOffice;
}

export default function OfficeCard({ office }: OfficeCardProps) {
  return (
    <Link
      href={`/oficinas/${office.id}`}
      className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-primary-300 transition-all"
    >
      {/* Foto */}
      <div className="relative h-44 bg-gray-100 overflow-hidden">
        {office.photo ? (
          <Image
            src={office.photo.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${office.photo}` : office.photo}
            alt={`Fachada de ${office.name}`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-300 flex items-center justify-center">
            <Building2 className="h-16 w-16 text-primary-400 opacity-50" />
          </div>
        )}
        <span className="absolute top-3 left-3 text-xs font-medium text-blue-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
          {office.zone}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-primary-700 transition-colors">
            {office.name}
          </h3>
          <ChevronRight className="h-5 w-5 text-gray-400 shrink-0 mt-0.5 group-hover:text-primary-600 transition-colors" />
        </div>

        <div className="space-y-1.5 text-sm text-gray-600 mb-3">
          <div className="flex items-start gap-1.5">
            <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
            <span>{office.address}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="h-4 w-4 text-gray-400 shrink-0" />
            <span>{office.phone}</span>
          </div>
        </div>

        <HoursDisplay hours={office.hours} compact />

        <div className="mt-3 text-xs text-gray-400">
          {office.tramites.length} trámites disponibles
        </div>
      </div>
    </Link>
  );
}
