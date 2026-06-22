import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, User, ArrowRight } from "lucide-react";
import type { Dependencia } from "@/types";
import HoursDisplay from "@/components/shared/HoursDisplay";

const TYPE_LABELS: Record<string, string> = {
  cementerio: "Cementerio",
  polideportivo: "Polideportivo",
  biblioteca: "Biblioteca",
  teatro: "Teatro Municipal",
  otro: "Dependencia Municipal",
};

interface Props {
  dependencia: Dependencia;
}

export default function DependenciaCard({ dependencia }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Foto */}
      {dependencia.photo && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={dependencia.photo.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${dependencia.photo}` : dependencia.photo}
            alt={`Fachada de ${dependencia.name}`}
            fill
            className="object-cover object-top"
          />
        </div>
      )}

      {/* Header */}
      <div className="bg-teal-700 text-white px-5 py-4">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 bg-white/20 text-white">
          {TYPE_LABELS[dependencia.type] ?? "Dependencia"}
        </span>
        <h3 className="text-lg font-bold leading-tight">{dependencia.name}</h3>
        {dependencia.director && (
          <p className="text-teal-200 text-sm mt-1 flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            Dir. {dependencia.director}
          </p>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-teal-600" />
          <span>
            {dependencia.address} — <span className="text-gray-500">{dependencia.zone}</span>
          </span>
        </div>

        {dependencia.phone && (
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 shrink-0 text-teal-600" />
            <a
              href={`tel:${dependencia.phone.replace(/\D/g, "")}`}
              className="text-teal-700 font-semibold hover:underline"
            >
              {dependencia.phone}
            </a>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 shrink-0 text-teal-600" />
          <HoursDisplay hours={dependencia.hours} compact />
        </div>

        {/* Horario semana resumido */}
        <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-600 space-y-0.5">
          <p><span className="font-medium">Lun–Vie:</span> 08:00–16:30 hs</p>
          <p><span className="font-medium">Sáb–Dom:</span> 08:00–12:00 hs</p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-100">
        <Link
          href={`/dependencias/${dependencia.id}`}
          className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
        >
          Ver información completa
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
