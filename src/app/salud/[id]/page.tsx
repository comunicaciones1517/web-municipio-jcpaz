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
  MessageCircle,
} from "lucide-react";
import { Suspense } from "react";
import { getAllFacilities, getFacilityById } from "@/lib/data/salud";
import { FACILITY_TYPE_LABELS } from "@/lib/utils";
import HoursDisplay from "@/components/shared/HoursDisplay";
import PhoneLink from "@/components/shared/PhoneLink";
import EmergencyBadge from "@/components/salud/EmergencyBadge";
import PreviewGate from "@/components/salud/PreviewGate";

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

  const mapEmbedUrl = facility.mapLink.includes("output=embed")
    ? facility.mapLink
    : facility.mapLink
        .replace("maps.google.com/?q=", "maps.google.com/maps?q=")
        .replace("maps.google.com/maps?q=", "maps.google.com/maps?q=")
        + "&hl=es&z=16&output=embed";

  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${facility.address}, José C. Paz, Buenos Aires, Argentina`
  )}`;

  return (
    <Suspense><PreviewGate>
      <div>
        {/* Hero / Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-500 text-white py-8 px-4">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/salud?ver=jcp2026"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Salud
            </Link>

            {facility.photo && (
              <div className="mb-5 rounded-xl overflow-hidden h-52 sm:h-64 w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={facility.photo.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${facility.photo}` : facility.photo}
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

            {(facility.phones.length > 0 || facility.emergencyPhone || facility.whatsapp) && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3">
                {facility.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/[\s()-]/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-white/80 transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    {p}
                  </a>
                ))}
                {facility.emergencyPhone && !facility.phones.includes(facility.emergencyPhone) && (
                  <span className="inline-flex items-center gap-1.5 text-white font-semibold">
                    <ShieldAlert className="h-4 w-4 shrink-0" />
                    Guardia: <PhoneLink number={facility.emergencyPhone} className="!text-white hover:!text-white/80" />
                  </span>
                )}
                {facility.whatsapp && (
                  <a
                    href={`https://wa.me/${facility.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-lg px-3 py-1.5 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {facility.whatsappLabel || `WhatsApp: ${facility.whatsapp}`}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Cuerpo */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 space-y-8">
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary-600" />
                Horario de atención
                {facility.hoursLabel && (
                  <span className="text-sm font-normal text-gray-500">&nbsp;— {facility.hoursLabel}</span>
                )}
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <HoursDisplay hours={facility.hours} variant="pills" />
              </div>
            </div>

            {facility.secondaryHours?.map((sh, shi) => (
              <div key={shi}>
                <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary-600" />
                  Horario — {sh.label}
                </h2>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <HoursDisplay hours={sh.hours} variant="pills" />
                </div>
              </div>
            ))}
          </section>

          {facility.specialties.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-primary-600" />
                Especialidades
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
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

          {facility.services.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary-600" />
                Servicios disponibles
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex flex-wrap gap-2">
                  {facility.services.map((s) => (
                    <span
                      key={s}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full border border-gray-200 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Secciones detalladas (guardia, consultorios, etc.) */}
          {facility.detailedSections && facility.detailedSections.length > 0 && (
            <div className="space-y-3">
              {facility.detailedSections.map((section, si) => (
                <details
                  key={si}
                  open={/guardia/i.test(section.title)}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group"
                >
                  <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center shrink-0">
                        {si + 1}
                      </span>
                      {section.title}
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs ml-2">▼</span>
                  </summary>
                  <div className="px-5 pb-4 pt-2 border-t border-gray-100 space-y-3">
                    {section.description && (
                      <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
                    )}
                    {/* Teléfono clickeable */}
                    {section.phone && (
                      <a
                        href={`tel:${section.phone.replace(/[\s()-]/g, "")}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        {section.phone}
                      </a>
                    )}
                    {/* WhatsApp clickeable */}
                    {section.whatsapp && (
                      <a
                        href={`https://wa.me/${section.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-lg px-4 py-2 transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {section.whatsappLabel || "WhatsApp"}
                      </a>
                    )}
                    {(() => {
                      const items = section.items ?? [];
                      if (items.length === 0) return null;
                      const isSimpleList = !items.some(i => i.subItems?.length || i.schedule || i.detail);

                      if (isSimpleList) {
                        return (
                          <div className="flex flex-wrap gap-2">
                            {items.map((item, ii) => (
                              <span key={ii} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full border border-gray-200 font-medium">
                                {item.name}
                              </span>
                            ))}
                          </div>
                        );
                      }

                      return (
                        <div className="divide-y divide-gray-100">
                          {items.map((item, ii) => (
                            <div key={ii} className="py-2.5 first:pt-0 last:pb-0">
                              {item.subItems && item.subItems.length > 0 ? (
                                <details className="group/sub bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl overflow-hidden shadow-sm">
                                  <summary className="cursor-pointer font-bold text-blue-900 hover:bg-blue-200/50 transition-colors flex items-center justify-between px-4 py-3.5">
                                    <span className="flex items-center gap-2.5 text-base">
                                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow">
                                        {item.subItems.length}
                                      </span>
                                      {item.name}
                                    </span>
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center group-open/sub:rotate-180 transition-transform text-xs shrink-0">▼</span>
                                  </summary>
                                  <div className="px-4 pb-4 pt-2 border-t-2 border-blue-300 space-y-3 bg-white/60">
                                    {item.whatsapp && (
                                      <a
                                        href={`https://wa.me/${item.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-lg px-4 py-2.5 transition-colors shadow-sm"
                                      >
                                        <MessageCircle className="h-4 w-4" />
                                        {item.whatsappLabel || "WhatsApp"}
                                      </a>
                                    )}
                                    {item.detail && (
                                      <p className="text-sm text-gray-500">{item.detail}</p>
                                    )}
                                    <ul className="flex flex-wrap gap-2">
                                      {item.subItems.map((sub, si2) => (
                                        <li key={si2} className="bg-white text-gray-700 text-sm px-3 py-1.5 rounded-full border border-blue-200 font-medium">
                                          {sub}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </details>
                              ) : (
                                <div className="space-y-1.5">
                                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                    <span className="font-semibold text-sm text-gray-800 sm:min-w-[220px] shrink-0">
                                      {item.name}
                                    </span>
                                    <div className="flex flex-col gap-0.5">
                                      {item.schedule && (
                                        <span className="text-sm text-primary-700 font-medium">{item.schedule}</span>
                                      )}
                                      {item.detail && (
                                        <span className="text-sm text-gray-500">{item.detail}</span>
                                      )}
                                    </div>
                                  </div>
                                  {item.whatsapp && (
                                    <a
                                      href={`https://wa.me/${item.whatsapp}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs rounded-lg px-3 py-1.5 transition-colors"
                                    >
                                      <MessageCircle className="h-3.5 w-3.5" />
                                      {item.whatsappLabel || "WhatsApp"}
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                </details>
              ))}
            </div>
          )}

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

          {facility.notes && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
              <Info className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800 leading-relaxed">{facility.notes}</p>
            </div>
          )}

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
    </PreviewGate></Suspense>
  );
}
