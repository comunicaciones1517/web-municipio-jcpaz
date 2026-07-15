import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PagoInfo from "../PagoInfo";

export const metadata: Metadata = {
  title: "Seguridad E Higiene | José C. Paz",
  description:
    "Información sobre el tributo de Seguridad E Higiene, lugares y medios de pago en José C. Paz.",
};

export default function SeguridadHigienePage() {
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
          <h1 className="text-3xl font-bold mb-2">Seguridad E Higiene</h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-8">
        <PagoInfo />
      </div>
    </div>
  );
}
