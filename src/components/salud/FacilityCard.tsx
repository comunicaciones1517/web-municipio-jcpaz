import Link from "next/link";
import { MapPin, Clock, ChevronRight, ShieldAlert, Phone } from "lucide-react";
import type { HealthFacility } from "@/types";
import { FACILITY_TYPE_LABELS, getTodaySchedule } from "@/lib/utils";

const TYPE_COLORS: Record<string, string> = {
  hospital_publico: "bg-blue-600",
  hospital_privado: "bg-purple-600",
  centro_de_salud: "bg-green-600",
  clinica: "bg-orange-600",
};

interface FacilityCardProps {
  facility: HealthFacility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  const todaySchedule = getTodaySchedule(facility.hours);
  const isOpenAllDay =
    todaySchedule?.open === "00:00" && todaySchedule?.close === "23:59";
  const isClosed = !todaySchedule || todaySchedule.open === "cerrado";

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">

      {/* ── Foto ── */}
      <div className="relative h-56 bg-gray-200 overflow-hidden shrink-0">
        {facility.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={facility.photo}
            alt={`Foto de ${facility.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
            <span className="text-6xl opacity-30">🏥</span>
          </div>
        )}

        {/* Badges sobre la foto */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span
            className={`${TYPE_COLORS[facility.type]} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow`}
          >
            {FACILITY_TYPE_LABELS[facility.type]}
          </span>
          {facility.hasEmergencyRoom && (
            <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
              <ShieldAlert className="h-3 w-3" />
              Guardia 24h
            </span>
          )}
        </div>
      </div>

      {/* ── Contenido ── */}
      <div className="p-5 flex flex-col flex-1">

        {/* Nombre */}
        <h3 className="font-black text-gray-900 text-xl leading-tight mb-1 uppercase tracking-tight">
          {facility.name}
        </h3>

        {/* Dirección */}
        <div className="flex items-start gap-1.5 text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-gray-400" />
          <span>{facility.address}</span>
        </div>

        {/* Teléfono principal — grande */}
        <a
          href={`tel:${facility.phones[0].replace(/[\s\-()]/g, "")}`}
          className="flex items-center gap-2 mb-2 group/phone"
        >
          <div className="bg-primary-50 rounded-lg p-2">
            <Phone className="h-5 w-5 text-primary-600" />
          </div>
          <span className="text-2xl font-bold text-primary-700 group-hover/phone:text-primary-900 tracking-tight">
            {facility.phones[0]}
          </span>
        </a>

        {/* Teléfono secundario */}
        {facility.phones[1] && (
          <a
            href={`tel:${facility.phones[1].replace(/[\s\-()]/g, "")}`}
            className="flex items-center gap-2 mb-4 group/phone2"
          >
            <div className="bg-gray-50 rounded-lg p-2">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <span className="text-base font-semibold text-gray-500 group-hover/phone2:text-gray-700">
              {facility.phones[1]}
            </span>
          </a>
        )}

        {/* Horario hoy */}
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold mb-4 ${
            isClosed
              ? "bg-red-50 text-red-700"
              : isOpenAllDay
              ? "bg-green-50 text-green-700"
              : "bg-yellow-50 text-yellow-700"
          }`}
        >
          <Clock className="h-4 w-4 shrink-0" />
          <span>
            {isClosed
              ? "Cerrado hoy"
              : isOpenAllDay
              ? "Abierto las 24 horas"
              : `Hoy: ${todaySchedule?.open} – ${todaySchedule?.close}`}
          </span>
        </div>

        {/* Especialidades */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {facility.specialties.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
          {facility.specialties.length > 3 && (
            <span className="text-xs text-gray-400 px-1 py-1">
              +{facility.specialties.length - 3} más
            </span>
          )}
        </div>

        {/* CTA — push to bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/salud/${facility.id}`}
            className="flex items-center justify-between w-full group/link"
          >
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Ver información completa
            </span>
            <span className="flex items-center gap-1 text-primary-600 font-bold text-sm group-hover/link:gap-2 transition-all">
              VER MÁS <ChevronRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
