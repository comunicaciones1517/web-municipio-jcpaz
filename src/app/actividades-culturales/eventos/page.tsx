import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import EventosCulturales from "@/components/actividades/EventosCulturales";

export const metadata: Metadata = {
  title: "Próximos Eventos — Actividades Culturales | José C. Paz",
  description:
    "Eventos culturales puntuales en José C. Paz: muestras, presentaciones, homenajes y más, con fecha, horario y lugar.",
};

export default function ProximosEventosPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-violet-700 to-violet-500 text-white py-10 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/actividades-culturales"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Actividades Culturales
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <CalendarDays className="h-8 w-8 text-white" />
            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
              Actividades Culturales
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Próximos Eventos</h1>
          <p className="text-white/85 text-base max-w-2xl">
            Muestras, presentaciones, homenajes y actividades puntuales en
            José C. Paz.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <EventosCulturales />
      </div>
    </div>
  );
}
