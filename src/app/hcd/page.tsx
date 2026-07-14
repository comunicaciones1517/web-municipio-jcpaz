import type { Metadata } from "next";
import { Phone, MapPin, Mail, ExternalLink, Landmark, Instagram } from "lucide-react";
import HoursDisplay from "@/components/shared/HoursDisplay";
import hcdData from "@/data/hcd.json";
import type { DaySchedule } from "@/types";

export const metadata: Metadata = {
  title: "Honorable Concejo Deliberante — José C. Paz",
  description:
    "Honorable Concejo Deliberante de José C. Paz. Dirección, teléfono, horarios y funciones del órgano legislativo municipal.",
};

const hcd = hcdData as {
  name: string;
  address: string;
  zone: string;
  phone: string;
  photo: string;
  website: string;
  hours: DaySchedule[];
  funciones: string[];
  mapLink: string;
  description: string;
};

export default function HCDPage() {
  const mapsExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    hcd.address + ", Buenos Aires, Argentina"
  )}`;

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-10 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-3">
            <Landmark className="h-7 w-7 text-yellow-400" />
            <span className="text-xs font-semibold bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full">
              Órgano Legislativo
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{hcd.name}</h1>
          <p className="text-white/80 flex items-center gap-1.5 text-base">
            <MapPin className="h-4 w-4 shrink-0" />
            {hcd.address} — {hcd.zone}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-8">
        {/* Descripción */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 text-sm leading-relaxed">{hcd.description}</p>
        </div>

        {/* Contacto + Funciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contacto */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary-600" />
              Contacto
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-600 shrink-0" />
                <a
                  href={`tel:${hcd.phone.replace(/\D/g, "")}`}
                  className="text-primary-700 font-semibold text-lg hover:underline"
                >
                  {hcd.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">{hcd.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-600 shrink-0" />
                <a
                  href="mailto:info.hcdjcp@gmail.com"
                  className="text-primary-700 hover:underline"
                >
                  info.hcdjcp@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              {hcd.website && (
                <a
                  href={hcd.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-600 hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Sitio web oficial
                </a>
              )}
              <a
                href="https://www.instagram.com/hcdjosecpaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram className="h-4 w-4" />
                @hcdjosecpaz
              </a>
            </div>
          </div>

          {/* Funciones */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary-600" />
              Funciones y servicios
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {hcd.funciones.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horario */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Horario de atención</h2>
          <HoursDisplay hours={hcd.hours} />
        </div>

        {/* Mapa */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">Ubicación</h2>
            <a
              href={mapsExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:underline flex items-center gap-1"
            >
              Abrir en Google Maps
            </a>
          </div>
          <iframe
            src={hcd.mapLink}
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
