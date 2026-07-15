import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "C.V.P — Conservación de la Vía Pública | José C. Paz",
  description:
    "Información sobre el tributo de Conservación de la Vía Pública, lugares y medios de pago en José C. Paz.",
};

const LUGARES_DE_PAGO = [
  {
    nombre: "Hospital Oftalmológico",
    direccion: "Av. Hipólito Yrigoyen 3028",
    horarios: ["Lunes a Viernes de 07:00 a 16:00hs", "Sábados de 08:00 a 13:00hs"],
  },
  {
    nombre: "Juzgado de Faltas",
    direccion: "Melvin Jones 5060",
    horarios: ["Lunes a Viernes de 08:00 a 14:00hs"],
  },
  {
    nombre: "Palacio Municipal",
    direccion: "Av. Gaspar Campos 6151",
    horarios: ["Lunes a Viernes de 08:00 a 17:00hs", "Sábados de 08:00 a 13:00hs"],
  },
  {
    nombre: "Secretaría de Comercio e Industria",
    direccion: "Av. Altube 2075",
    horarios: ["Lunes a Viernes de 08:00 a 16:00hs"],
  },
];

const MEDIOS_DE_PAGO = [
  "Banco de la Provincia de Buenos Aires",
  "Rapipago",
  "Mercado Pago",
  "Pago Fácil",
  "Provincia Net (ex Bapro Pagos)",
  "Vía WhatsApp",
  "Pago mis Cuentas",
];

export default function CvpPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white py-10 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/tramites/rentas/tributos"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Tributos
          </Link>
          <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-3 inline-block">
            Dirección General de Rentas
          </span>
          <h1 className="text-3xl font-bold mb-2">C.V.P</h1>
          <p className="text-white/85 text-base max-w-2xl">
            Conservación de la Vía Pública
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-8">
        {/* Info */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            La conservación de la Vía Pública es el mantenimiento de las calles y
            plazas de una ciudad para que estén en condiciones de ser transitadas
            de manera segura y eficiente, como del mismo modo el pago de dicho
            tributo para la creación y/o mantenimiento de servicios indirectos,
            tales como ambulancia, universidades, etc.
          </p>
        </div>

        {/* Lugares de pago */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-emerald-600" />
            Lugares de Pago
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LUGARES_DE_PAGO.map((lugar, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
              >
                <h3 className="font-bold text-gray-800 text-sm mb-2">{lugar.nombre}</h3>
                <p className="text-sm text-gray-600 mb-2">{lugar.direccion}</p>
                <ul className="space-y-1">
                  {lugar.horarios.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Medios de pago */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-emerald-600" />
            Medios de Pago
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {MEDIOS_DE_PAGO.map((medio, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  {medio}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
