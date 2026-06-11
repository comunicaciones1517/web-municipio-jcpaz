import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  ShieldAlert,
  MapPin,
  Stethoscope,
  ClipboardList,
  Info,
  Bus,
  Globe,
  ExternalLink,
} from "lucide-react";
import { getAllFacilities, getFacilityById } from "@/lib/data/salud";
import { FACILITY_TYPE_LABELS } from "@/lib/utils";
import HoursDisplay from "@/components/shared/HoursDisplay";
import PhoneLink from "@/components/shared/PhoneLink";
import EmergencyBadge from "@/components/salud/EmergencyBadge";

export async function generateStaticParams() {
  return getAllFacilities().map((f) => ({ id: f.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const facility = getFacilityById(id);
  if (!facility) return {};
  return {
    title: facility.name,
    description: `${FACILITY_TYPE_LABELS[facility.type]} — ${facility.address}. Horarios, especialidades y contacto.`,
  };
}

const TYPE_COLORS: Record<string, string> = {
  hospital_publico: "bg-blue-100 text-blue-700",
  hospital_privado: "bg-purple-100 text-purple-700",
  centro_de_salud: "bg-green-100 text-green-700",
  clinica: "bg-orange-100 text-orange-700",
};

export default async function FacilityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const facility = getFacilityById(id);
  if (!facility) notFound();

  // URL embed — usa mapLink del JSON; si no tiene output=embed lo añade
  const mapEmbedUrl = facility.mapLink.includes("output=embed")
    ? facility.mapLink
    : facility.mapLink
        .replace("maps.google.com/?q=", "maps.google.com/maps?q=")
        .replace("maps.google.com/maps?q=", "maps.google.com/maps?q=")
        + "&hl=es&z=16&output=embed";

  // URL para el botón "Abrir en Google Maps" (link normal, sin output=embed)
  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${facility.address}, José C. Paz, Buenos Aires, Argentina`
  )}`;

  return (
    <div>
      {/* ── Hero / Header ── */}
      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white py-8 px-4">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/salud"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Salud
          </Link>

          {/* Foto de portada (si hay) */}
          {facility.photo && (
            <div className="mb-5 rounded-xl overflow-hidden h-52 sm:h-64 w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={facility.photo}
                alt={`Foto de ${facility.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TYPE_COLORS[facility.type]}`}
            >
              {FACILITY_TYPE_LABELS[facility.type]}
            </span>
            {facility.hasEmergencyRoom && <EmergencyBadge />}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">{facility.name}</h1>
          <div className="flex items-center gap-1.5 mt-2 text-white/80 text-sm">
            <MapPin className="h-4 w-4 shrink-0" />
            {facility.address} — {facility.zone}
          </div>
        </div>
      </div>

      {/* ── Cuerpo ── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 space-y-8">

        {/* ── Fila 1: Contacto + Especialidades ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Contacto */}
          <section className="flex flex-col">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary-600" />
              Contacto
            </h2>
            <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 space-y-3">
              <div className="space-y-2">
                {facility.phones.map((p) => (
                  <PhoneLink key={p} number={p} />
                ))}
              </div>
              {facility.emergencyPhone && (
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <ShieldAlert className="h-4 w-4 text-red-600 shrink-0" />
                  <span className="text-sm font-semibold text-red-700 mr-1">
                    Guardia:
                  </span>
                  <PhoneLink number={facility.emergencyPhone} />
                </div>
              )}
              <div className="flex items-start gap-2 pt-2 border-t border-gray-100">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                <a
                  href={mapExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:underline"
                >
                  {facility.address}
                </a>
              </div>
            </div>
          </section>

          {/* Especialidades */}
          {facility.specialties.length > 0 && (
            <section className="flex flex-col">
              <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-primary-600" />
                Especialidades
              </h2>
              <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex flex-wrap gap-2">
                  {facility.specialties.map((s) => (
                    <span
                      key={s}
                      className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* ── Fila 2: Horarios + Servicios ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Horarios */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-primary-600" />
              Horario de atención
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <HoursDisplay hours={facility.hours} />
            </div>
          </section>

          {/* Servicios */}
          {facility.services.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary-600" />
                Servicios disponibles
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <ul className="grid grid-cols-1 gap-1.5">
                  {facility.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>

        {/* ── Google Maps — ancho completo ── */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary-600" />
            Ubicación
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${facility.name}`}
              className="w-full"
            />
            <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm text-gray-500">{facility.address}</span>
              <a
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 hover:text-primary-800 font-semibold flex items-center gap-1"
              >
                Abrir en Google Maps
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Cómo llegar — ancho completo ── */}
        {facility.comoLlegar && facility.comoLlegar.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Bus className="h-5 w-5 text-primary-600" />
              Cómo llegar en transporte público
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
              {facility.comoLlegar.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <span className="shrink-0 bg-yellow-400 text-gray-900 text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Notas ── */}
        {facility.notes && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
            <Info className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800 leading-relaxed">{facility.notes}</p>
          </div>
        )}

        {/* ── Sitio web oficial ── */}
        {facility.website && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary-600" />
              Sitio web oficial
            </h2>
            <a
              href={facility.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              <Globe className="h-5 w-5" />
              {facility.website.replace(/^https?:\/\//, "")}
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          </section>
        )}

      </div>
    </div>
  );
}
