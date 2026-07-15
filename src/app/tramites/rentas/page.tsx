import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

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

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <a
            href="https://sites.google.com/view/dir-gral-de-rentas/puntos-de-pago?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-5 text-center hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
          >
            <MapPin className="h-7 w-7 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-800">Puntos de Pago</span>
          </a>
        </div>
      </div>
    </div>
  );
}
