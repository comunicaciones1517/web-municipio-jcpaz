import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, HeartHandshake, FileText, Info, Phone, MapPin, Clock } from "lucide-react";
import PhoneLink from "@/components/shared/PhoneLink";
import HoursDisplay from "@/components/shared/HoursDisplay";

export const metadata: Metadata = {
  title: "Servicio de Sepelio — Desarrollo Social | José C. Paz",
  description:
    "Servicio de sepelio gratuito para vecinos de José C. Paz sin recursos económicos ni obra social, brindado por la Secretaría de Desarrollo Social.",
};

const DOCUMENTACION = [
  "DNI del fallecido",
  "Certificado Médico de Defunción (asegurarse de que tenga dígito pulgar derecho en la parte superior izquierda)",
];

export default function ServicioSepelioPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-500 text-white py-10 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <HeartHandshake className="h-8 w-8 text-white" />
            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
              Guía de Trámites
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Servicio de Sepelio</h1>
          <p className="text-white/85 text-base max-w-2xl">
            Secretaría de Desarrollo Social — Municipalidad de José C. Paz.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-8">
        {/* Descripción */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            La Secretaría de Desarrollo Social brinda un servicio de sepelio
            apto para todos aquellos vecinos que no cuenten con los recursos
            económicos para contratar un sepelio privado. El mismo garantiza
            una despedida digna para la persona fallecida, de acuerdo con los
            requisitos y criterios establecidos por el Municipio.
          </p>
        </div>

        {/* Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Phone className="h-5 w-5 text-slate-600" />
              Contacto
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3 h-full">
              <PhoneLink number="(02320) 422719" className="text-base font-semibold" />
              <div className="flex items-start gap-2 text-sm text-gray-700 pt-2 border-t border-gray-100">
                <MapPin className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
                <span>Av. Hipólito Yrigoyen 2945, José C. Paz</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5 text-slate-600" />
              Horario de atención
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-full">
              <HoursDisplay
                hours={[
                  { day: "lunes", open: "08:00", close: "14:00" },
                  { day: "martes", open: "08:00", close: "14:00" },
                  { day: "miercoles", open: "08:00", close: "14:00" },
                  { day: "jueves", open: "08:00", close: "14:00" },
                  { day: "viernes", open: "08:00", close: "14:00" },
                  { day: "sabado", open: "08:00", close: "12:00" },
                  { day: "domingo", open: "08:00", close: "12:00" },
                ]}
              />
            </div>
          </section>
        </div>

        {/* Requisitos */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-slate-600" />
            Requisitos para solicitarlo
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Para solicitar un servicio de sepelio, el difunto debe tener su
              residencia en José C. Paz y no contar con ninguna obra social.
              Además, deberá presentar la siguiente documentación:
            </p>
            <ul className="space-y-2.5">
              {DOCUMENTACION.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Eximición de tierra */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-3">
          <Info className="h-5 w-5 text-slate-600 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-800 leading-relaxed">
            También podrá solicitar la eximición completa de tierra en caso
            de no contar con los recursos económicos.
          </p>
        </div>
      </div>
    </div>
  );
}
