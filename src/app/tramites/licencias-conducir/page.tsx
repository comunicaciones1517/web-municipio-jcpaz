import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Mail, Clock, Car, FileText, AlertTriangle, ExternalLink, Download } from "lucide-react";
import { getOfficeById } from "@/lib/data/oficinas";
import HoursDisplay from "@/components/shared/HoursDisplay";

export const metadata: Metadata = {
  title: "Licencias de Conducir — Guía de Requisitos | José C. Paz",
  description:
    "Requisitos para licencias de conducir en José C. Paz. Primera licencia, renovación, categorías A–G, robo/extravío y más.",
};

export default function LicenciasConducirPage() {
  const office = getOfficeById("licencias-conducir")!;
  const aviso = (office as any).aviso;
  const phonesExtra = (office as any).phonesExtra as { number: string; label: string; horario: string }[] | undefined;
  const email = (office as any).email as string | undefined;
  const requisitos = (office as any).requisitos as { titulo: string; items: string[] }[] | undefined;
  const categorias = (office as any).categoriasLicencia as { grupo: string; clases: { clase: string; descripcion: string }[] }[] | undefined;

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-10 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Car className="h-8 w-8 text-white" />
            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
              Guía de Trámites
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Licencias de Conducir</h1>
          <p className="text-white/85 text-base max-w-2xl">
            Todo lo que necesitás saber para tramitar, renovar o sumar categoría
            a tu licencia de conducir en José C. Paz.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-8">
        {/* Aviso primera licencia */}
        {aviso && (
          <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-indigo-500 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="font-bold text-indigo-900 text-sm">{aviso.titulo}</p>
                {aviso.pasos ? (
                  <ol className="list-decimal list-inside space-y-1.5 text-sm text-indigo-800">
                    {(aviso.pasos as string[]).map((paso: string, i: number) => (
                      <li key={i}>{paso}</li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-sm text-indigo-800">{aviso.mensaje}</p>
                )}
                {aviso.link && (
                  <a
                    href={aviso.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    {aviso.linkTexto || "Más información"}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Info de la oficina */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contacto */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-indigo-600" />
              Contacto y turnos
            </h2>
            {phonesExtra ? (
              <ul className="space-y-3">
                {phonesExtra.map((p, i) => (
                  <li key={i} className="text-sm">
                    <a
                      href={`tel:${p.number.replace(/\D/g, "")}`}
                      className="text-primary-700 font-semibold text-base hover:underline"
                    >
                      {p.number}
                    </a>
                    <div className="text-gray-500 text-xs mt-0.5">
                      {p.label} — {p.horario}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <a
                href={`tel:${office.phone.replace(/\D/g, "")}`}
                className="text-primary-700 font-semibold text-lg hover:underline"
              >
                {office.phone}
              </a>
            )}
            {email && (
              <div className="flex items-center gap-2 text-sm mt-4 pt-3 border-t border-gray-100">
                <Mail className="h-4 w-4 text-indigo-600 shrink-0" />
                <div>
                  <a href={`mailto:${email}`} className="text-primary-700 hover:underline">
                    {email}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Para solicitar turno</p>
                </div>
              </div>
            )}
            <div className="flex items-start gap-2 text-sm mt-3 pt-3 border-t border-gray-100">
              <MapPin className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
              <span className="text-gray-700">{office.address}</span>
            </div>
          </div>

          {/* Horario */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-indigo-600" />
              Horario de atención
            </h2>
            <HoursDisplay hours={office.hours} />
          </div>
        </div>

        {/* Categorías */}
        {categorias && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Car className="h-6 w-6 text-indigo-600" />
              Categorías de licencia
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Hacé click en cada categoría para ver las subclases y requisitos de antigüedad.
            </p>
            <div className="space-y-3">
              {categorias.map((cat, i) => (
                <details
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group"
                >
                  <summary className="px-5 py-4 cursor-pointer text-sm font-bold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between">
                    {cat.grupo}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs ml-2">▼</span>
                  </summary>
                  <div className="px-5 pb-4 pt-2 border-t border-gray-100 space-y-3">
                    {cat.clases.map((cl, j) => (
                      <div key={j} className="flex items-start gap-3 text-sm">
                        <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded text-xs shrink-0 mt-0.5 min-w-[3rem] text-center">
                          {cl.clase}
                        </span>
                        <span className="text-gray-700">{cl.descripcion}</span>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Requisitos */}
        {requisitos && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-indigo-600" />
              Requisitos por trámite
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Hacé click en cada trámite para ver los documentos que necesitás.
            </p>
            <div className="space-y-3">
              {requisitos.map((req, i) => (
                <details
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group"
                >
                  <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      {req.titulo}
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs ml-2">▼</span>
                  </summary>
                  <ul className="px-5 pb-4 pt-2 space-y-2 border-t border-gray-100">
                    {req.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Mapa */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-800">Ubicación</h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address + ", Buenos Aires, Argentina")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:underline flex items-center gap-1"
            >
              Abrir en Google Maps
            </a>
          </div>
          <iframe
            src={office.mapLink}
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Link a la oficina */}
        <div className="text-center pt-4">
          <Link
            href="/oficinas/licencias-conducir"
            className="inline-flex items-center gap-2 text-sm text-primary-600 hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            Ver página completa de la Dirección General de Licencias de Conducir
          </Link>
        </div>
      </div>
    </div>
  );
}
