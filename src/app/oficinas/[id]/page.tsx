import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, MapPin, ClipboardList, Info } from "lucide-react";
import { getAllOffices, getOfficeById } from "@/lib/data/oficinas";
import HoursDisplay from "@/components/shared/HoursDisplay";
import PhoneLink from "@/components/shared/PhoneLink";
import MapLink from "@/components/shared/MapLink";

export async function generateStaticParams() {
  return getAllOffices().map((o) => ({ id: o.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const office = getOfficeById(id);
  if (!office) return {};
  return {
    title: office.name,
    description: `${office.name} — ${office.address}. Trámites disponibles, horarios y contacto.`,
  };
}

export default async function OfficeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const office = getOfficeById(id);
  if (!office) notFound();

  return (
    <div>
      <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white py-8 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/oficinas"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Oficinas
          </Link>
          {office.photo && (
            <div className="mb-5 rounded-xl overflow-hidden relative h-72">
              <Image
                src={office.photo.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${office.photo}` : office.photo}
                alt={`Fachada de ${office.name}`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <span className="text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full mb-2 inline-block">
            {office.zone}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold">{office.name}</h1>
          <div className="flex items-center gap-1.5 mt-2 text-white/80 text-sm">
            <MapPin className="h-4 w-4 shrink-0" />
            {office.address}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-8">
        {/* Contacto */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary-600" />
            Contacto
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-2">
            <PhoneLink number={office.phone} />
            <div className="pt-2 border-t border-gray-100">
              <MapLink href={office.mapLink} address={office.address} />
            </div>
          </div>
        </section>

        {/* Horarios */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary-600" />
            Horarios de atención
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <HoursDisplay hours={office.hours} />
          </div>
        </section>

        {/* Trámites disponibles */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary-600" />
            Trámites disponibles en esta oficina
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
            {office.tramites.map((tramite, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                <span className="text-sm text-gray-700">{tramite}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Para consultas sobre trámites no listados, contactar la oficina directamente.
          </p>
        </section>

        {/* Notas */}
        {office.notes && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
            <Info className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">{office.notes}</p>
          </div>
        )}

        {/* Mapa */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary-600" />
            Cómo llegar
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-100 h-48 flex items-center justify-center">
              <a
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors"
              >
                <MapPin className="h-10 w-10" />
                <span className="font-semibold">Ver en Google Maps</span>
                <span className="text-sm text-gray-500">{office.address}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
