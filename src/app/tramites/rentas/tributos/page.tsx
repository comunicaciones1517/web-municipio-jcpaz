import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Receipt, ShieldCheck, Bike, Car, FileText, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Tributos — Dirección General de Rentas | José C. Paz",
  description:
    "C.V.P, Seguridad E Higiene, Moto, Automotor, Otros Tributos y Ts. Obras. Dirección General de Rentas de José C. Paz.",
};

export default function TributosPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white py-10 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/tramites/rentas"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Dirección General de Rentas
          </Link>
          <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-3 inline-block">
            Guía de Trámites
          </span>
          <h1 className="text-3xl font-bold mb-2">Tributos</h1>
          <p className="text-white/85 text-base max-w-2xl">
            Seleccioná el tributo que necesitás consultar.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Link
            href="/tramites/rentas/tributos/cvp"
            className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-5 text-center hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
          >
            <Receipt className="h-7 w-7 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-800">C.V.P</span>
          </Link>
          <Link
            href="/tramites/rentas/tributos/seguridad-e-higiene"
            className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-5 text-center hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
          >
            <ShieldCheck className="h-7 w-7 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-800">Seguridad E Higiene</span>
          </Link>
          <Link
            href="/tramites/rentas/tributos/moto"
            className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-5 text-center hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
          >
            <Bike className="h-7 w-7 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-800">Moto</span>
          </Link>
          <Link
            href="/tramites/rentas/tributos/automotor"
            className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-5 text-center hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
          >
            <Car className="h-7 w-7 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-800">Automotor</span>
          </Link>
          <Link
            href="/tramites/rentas/tributos/otros-tributos"
            className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-5 text-center hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
          >
            <FileText className="h-7 w-7 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-800">Otros Tributos</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-5 text-center">
            <HardHat className="h-7 w-7 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-800">Ts. Obras</span>
          </div>
        </div>
      </div>
    </div>
  );
}
