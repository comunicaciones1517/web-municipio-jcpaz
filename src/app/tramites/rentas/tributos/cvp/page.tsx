import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PagoInfo from "../PagoInfo";

export const metadata: Metadata = {
  title: "C.V.P — Conservación de la Vía Pública | José C. Paz",
  description:
    "Información sobre el tributo de Conservación de la Vía Pública, lugares y medios de pago en José C. Paz.",
};

export default function CvpPage() {
  return (
    <div>
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
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            La conservación de la Vía Pública es el mantenimiento de las calles y
            plazas de una ciudad para que estén en condiciones de ser transitadas
            de manera segura y eficiente, como del mismo modo el pago de dicho
            tributo para la creación y/o mantenimiento de servicios indirectos,
            tales como ambulancia, universidades, etc.
          </p>
        </div>

        <PagoInfo />
      </div>
    </div>
  );
}
