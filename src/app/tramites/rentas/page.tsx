import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Smartphone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Dirección General de Rentas | José C. Paz",
  description:
    "Consultá sobre tus tributos, vencimientos y trámites de la Dirección General de Rentas / Secretaría de Economía y Hacienda de José C. Paz.",
};

export default function RentasPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white py-10 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
          <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-3 inline-block">
            Guía de Trámites
          </span>
          <h1 className="text-3xl font-bold mb-2">Dirección General de Rentas</h1>
          <p className="text-white/85 text-base max-w-2xl">
            Consultá sobre tus tributos, vencimientos y trámites relacionados
            con la Dirección General de Rentas / Secretaría de Economía y Hacienda.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-6">
        {/* Consultar tributos */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Dirección General de Rentas
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Para consultar sobre tus tributos, vencimientos y trámites
            relacionados con la Dirección General de Rentas / Secretaría de
            Economía y Hacienda, podés hacerlo ingresando acá:
          </p>
          <a
            href="https://sites.google.com/view/dir-gral-de-rentas/tributo?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-emerald-600 text-white px-4 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Consultar tributos
          </a>
        </div>

        {/* Puntos de pago */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Puntos de Pago
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Conocé los puntos de pago habilitados para abonar tus tributos municipales.
          </p>
          <a
            href="https://sites.google.com/view/dir-gral-de-rentas/puntos-de-pago?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-amber-600 text-white px-4 py-2.5 rounded-lg hover:bg-amber-700 transition-colors"
          >
            <MapPin className="h-4 w-4" />
            Ver puntos de pago
          </a>
        </div>

        {/* App municipal */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            App Municipalidad de José C. Paz
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Recordá que ahora podés pagar tus tributos de forma más rápida y
            fácil con la App Municipalidad de José C. Paz.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=ar.com.tsf.AppWechterPersonaJCP01&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Smartphone className="h-4 w-4" />
            Descargar en Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
