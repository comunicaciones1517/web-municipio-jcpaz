import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, User, Bus, Instagram, Facebook } from "lucide-react";
import HoursDisplay from "@/components/shared/HoursDisplay";
import {
  getAllDependencias,
  getDependenciaById,
} from "@/lib/data/dependencias";

const TYPE_LABELS: Record<string, string> = {
  cementerio: "Cementerio",
  polideportivo: "Polideportivo",
  biblioteca: "Biblioteca",
  teatro: "Teatro Municipal",
  otro: "Dependencia Municipal",
};

export async function generateStaticParams() {
  const dependencias = getAllDependencias();
  return dependencias.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const dep = getDependenciaById(id);
  if (!dep) return { title: "No encontrado" };
  return {
    title: dep.name,
    description: `${dep.name} — ${dep.address}. Horarios, servicios y cómo llegar.`,
  };
}

export default async function DependenciaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dep = getDependenciaById(id);
  if (!dep) notFound();

  const mapsEmbedUrl = dep.mapLink;
  const mapsExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    dep.address + ", José C. Paz, Buenos Aires, Argentina"
  )}`;

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-10 px-4">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/dependencias"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Dependencias
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
              {TYPE_LABELS[dep.type] ?? "Dependencia"}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-1">{dep.name}</h1>
          <p className="text-white/85 flex items-center gap-1.5 text-base">
            <MapPin className="h-4 w-4 shrink-0" />
            {dep.address} — {dep.zone}
          </p>
          {dep.director && (
            <p className="text-teal-200 flex items-center gap-1.5 text-sm mt-1">
              <User className="h-4 w-4 shrink-0" />
              Director: {dep.director}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Contacto + Horario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contacto */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-800 mb-4">Contacto</h2>
            <ul className="space-y-3 text-sm">
              {dep.phone && (
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-teal-600 shrink-0" />
                  <a
                    href={`tel:${dep.phone.replace(/\D/g, "")}`}
                    className="text-teal-700 font-semibold text-lg hover:underline"
                  >
                    {dep.phone}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">{dep.address}</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              {dep.website && (
                <a
                  href={dep.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-teal-600 hover:underline"
                >
                  Sitio web oficial →
                </a>
              )}
              {dep.instagram && (
                <a
                  href={dep.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              )}
              {dep.facebook && (
                <a
                  href={dep.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              )}
            </div>
          </div>

          {/* Servicios */}
          {dep.services && dep.services.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-800 mb-4">Servicios disponibles</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {dep.services.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Horario */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-base font-bold text-gray-800 mb-4">Horario de atención</h2>
          <HoursDisplay hours={dep.hours} />
        </div>

        {/* Mapa */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-800">Ubicación</h2>
            <a
              href={mapsExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-teal-600 hover:underline flex items-center gap-1"
            >
              Abrir en Google Maps →
            </a>
          </div>
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Cómo llegar */}
        {dep.comoLlegar && dep.comoLlegar.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Bus className="h-5 w-5 text-teal-600" />
              Cómo llegar en transporte público
            </h2>
            <ol className="space-y-3">
              {dep.comoLlegar.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Notas */}
        {dep.notes && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-sm text-yellow-900">
            <p className="font-semibold mb-1">Nota importante</p>
            <p>{dep.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
