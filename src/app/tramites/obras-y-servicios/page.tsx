import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Mail, Clock, HardHat, FileText, MessageCircle } from "lucide-react";
import HoursDisplay from "@/components/shared/HoursDisplay";

export const metadata: Metadata = {
  title: "Obras y Servicios — Guía de Requisitos | José C. Paz",
  description:
    "Requisitos para trámites de Obras Particulares: cambio de titularidad, numeración domiciliaria, planos y más. José C. Paz.",
};

const REQUISITOS = [
  {
    titulo: "Cambio de Titularidad",
    items: [
      "DNI del titular/es",
      "Escritura Original Inscripta en el registro de la propiedad inmueble",
    ],
  },
  {
    titulo: "Numeración Domiciliaria",
    items: [
      "Comprobante de pago del sellado emitido por la Dirección Gral. De Rentas, en el Palacio Municipal sito en Av. Gaspar Campos 6151",
      "Impuesto Municipal, Comprobante del último pago del C.V.P",
    ],
    whatsapp: {
      texto: "Solicitar el pago por WhatsApp",
      numero: "5491138789504",
    },
    quien: "Todos los contribuyentes que lo soliciten",
  },
  {
    titulo: "Empadronamiento de Plano de Propiedad Horizontal",
    items: [
      "Comprobante de pago de inicio de expediente",
      "Nota de solicitud",
      "2 copias del plano aprobado y registrado",
      "Cédulas catastrales y formularios Línea 900",
      "Constancia de libre de deuda de partida origen",
      "Fotocopia del reglamento de copropiedad",
    ],
    quien: "El profesional actuante o propietario",
    lugar: "Mesa Gral de Entrada, Palacio Municipal, Av. Gaspar Campos 6151, Lunes a Viernes de 08:00 a 14:00hs",
  },
  {
    titulo: "Registración de Plano de Mensura",
    items: [
      "Comprobante de pago de inicio de expediente",
      "Nota de solicitud",
      "2 copias del plano aprobado y registrado",
      "Cédulas catastrales y formularios Línea 900",
      "Constancia de libre de deuda de partida origen",
    ],
    quien: "El profesional actuante o propietario",
    lugar: "Mesa Gral de Entrada, Palacio Municipal, Av. Gaspar Campos 6151, Lunes a Viernes de 08:00 a 14:00hs",
  },
  {
    titulo: "Visado de Plano de Mensura",
    items: [
      "Comprobante de pago de inicio de expediente",
      "Nota de solicitud",
      "2 copias del plano",
      "De estar edificada, estado parcelario o informe de metros cuadrados edificados",
      "Libre de deuda",
    ],
    quien: "El Profesional",
    lugar: "Palacio Municipal, Av. Gaspar Campos 6151, Lunes a Viernes de 08:00 a 14:00hs",
  },
  {
    titulo: "Ingreso de Expediente de Plano de Obra",
    items: [
      "Plano visado por la Dirección de Obras Particulares",
      "Liquidación de Derechos de construcción visado por la Dirección de Obras Particulares",
      "Comprobante de pago de derechos de construcción emitido por el Palacio Municipal, Av. Gaspar Campos 6151, Dirección Gral de Rentas",
      "Plano visado por el colegio profesional que corresponda",
      "Planilla anexa (certificado de visado colegial)",
      "Informe técnico (de corresponder)",
      "Planilla de estadística",
      "Plano original (corregido de acuerdo al visado) y hasta 5 copias",
      "En caso de unificación parcelaria, adjuntar contrato, nota de compromiso del agrimensor e inicio de expediente de la mensura de la Dirección de Catastro del Municipio",
    ],
    quien: "Profesional o gestor registrado en la Dirección de Obras Particulares",
    lugar: "Mesa Gral de Entrada, Palacio Municipal, Av. Gaspar Campos 6151, Lunes a Viernes de 08:00 a 14:00hs",
  },
];

export default function ObrasYServiciosPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-700 to-orange-500 text-white py-10 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <HardHat className="h-8 w-8 text-white" />
            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
              Guía de Trámites
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Obras y Servicios</h1>
          <p className="text-white/85 text-base max-w-2xl">
            Requisitos para trámites de Obras Particulares en José C. Paz.
            Consultá antes de acercarte a la oficina.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-orange-600" />
              Contacto
            </h2>
            <a
              href="tel:01153295728"
              className="text-primary-700 font-semibold text-base hover:underline"
            >
              (011) 15-3329-5728
            </a>
            <div className="flex items-center gap-2 text-sm mt-4 pt-3 border-t border-gray-100">
              <Mail className="h-4 w-4 text-orange-600 shrink-0" />
              <a href="mailto:obrasparticularesjcp@gmail.com" className="text-primary-700 hover:underline">
                obrasparticularesjcp@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm mt-3 pt-3 border-t border-gray-100">
              <MapPin className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
              <span className="text-gray-700">Gral. Lavalle 2505, José C. Paz</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-600" />
              Horario de atención
            </h2>
            <HoursDisplay
              hours={[
                { day: "lunes", open: "08:00", close: "14:00" },
                { day: "martes", open: "08:00", close: "14:00" },
                { day: "miercoles", open: "08:00", close: "14:00" },
                { day: "jueves", open: "08:00", close: "14:00" },
                { day: "viernes", open: "08:00", close: "14:00" },
              ]}
            />
          </div>
        </div>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-orange-600" />
            Requisitos por trámite
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Hacé click en cada trámite para ver los documentos que necesitás.
          </p>
          <div className="space-y-3">
            {REQUISITOS.map((req, i) => (
              <details
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group"
              >
                <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {req.titulo}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs ml-2">▼</span>
                </summary>
                <div className="px-5 pb-4 pt-2 border-t border-gray-100 space-y-3">
                  <ul className="space-y-2">
                    {req.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {"whatsapp" in req && req.whatsapp && (
                    <a
                      href={`https://wa.me/${req.whatsapp.numero}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-lg px-4 py-2 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {req.whatsapp.texto}
                    </a>
                  )}
                  {"quien" in req && req.quien && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">¿Quién puede hacer el trámite?</span>{" "}
                      {req.quien}
                    </p>
                  )}
                  {"lugar" in req && req.lugar && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">Lugar y horario:</span>{" "}
                      {req.lugar}
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-800">Ubicación</h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Gral. Lavalle 2505, José C. Paz, Buenos Aires, Argentina")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:underline flex items-center gap-1"
            >
              Abrir en Google Maps
            </a>
          </div>
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent("Gral. Lavalle 2505, José C. Paz, Buenos Aires, Argentina")}&hl=es&z=16&output=embed`}
            width="100%"
            height="280"
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
