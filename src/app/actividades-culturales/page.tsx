import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Palette, CalendarDays, MessageCircle, MapPin, Clock } from "lucide-react";
import EventosCulturales from "@/components/actividades/EventosCulturales";

export const metadata: Metadata = {
  title: "Actividades Culturales — Grilla 2026 | José C. Paz",
  description:
    "Grilla de actividades culturales y talleres gratuitos de José C. Paz: yoga, arte, teatro, tejido, pastelería y más. Horarios e inscripción.",
};

const WHATSAPP = "5491176238532";

const DIAS = [
  {
    dia: "Lunes",
    actividades: [
      { nombre: "Yoga", horario: "10:00 a 11:00 hs" },
      { nombre: "GAP", horario: "14:00 a 15:00 hs" },
      { nombre: "Arte Infantil", horario: "17:00 a 18:30 hs" },
      { nombre: "Caricatura", horario: "18:30 a 20:00 hs" },
    ],
  },
  {
    dia: "Martes",
    actividades: [
      { nombre: "Corte y Confección", horario: "14:00 a 16:00 hs" },
      { nombre: "Pastelería", horario: "18:00 a 20:00 hs" },
    ],
  },
  {
    dia: "Miércoles",
    actividades: [
      { nombre: "Yoga", horario: "10:00 a 11:00 hs" },
      { nombre: "GAP", horario: "14:00 a 15:00 hs" },
      { nombre: "Corte y Confección", horario: "15:00 a 17:00 hs" },
      { nombre: "Teatro Infantil", horario: "17:00 a 18:30 hs" },
      { nombre: "Folklore", horario: "18:30 a 20:00 hs" },
    ],
  },
  {
    dia: "Jueves",
    actividades: [
      { nombre: "Tejido para la Tercera Edad", horario: "10:00 a 11:30 hs" },
      { nombre: "Corte y Confección", horario: "14:00 a 16:00 hs" },
      { nombre: "Maquillaje Integral", horario: "16:30 a 18:30 hs" },
      { nombre: "Teatro Adulto", horario: "18:30 a 20:00 hs" },
    ],
  },
  {
    dia: "Viernes",
    actividades: [
      { nombre: "Yoga", horario: "10:00 a 11:00 hs" },
      { nombre: "GAP", horario: "14:00 a 15:00 hs" },
      { nombre: "Tejido Nivel 1", horario: "15:00 a 16:30 hs" },
      { nombre: "Tejido Nivel 2", horario: "16:30 a 18:00 hs" },
      { nombre: "Culturap", horario: "18:00 a 19:00 hs" },
    ],
  },
];

export default function ActividadesCulturalesPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-violet-700 to-violet-500 text-white py-10 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Palette className="h-8 w-8 text-white" />
            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
              Actividades Culturales
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Grilla de Actividades 2026</h1>
          <p className="text-white/85 text-base max-w-2xl">
            Talleres y actividades culturales gratuitas para todas las edades
            en José C. Paz.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-8">
        {/* Eventos puntuales */}
        <EventosCulturales />

        {/* Grilla por día */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CalendarDays className="h-6 w-6 text-violet-600" />
            Horarios por día
          </h2>
          <div className="space-y-3">
            {DIAS.map((d, i) => (
              <details
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group"
              >
                <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {d.dia}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs ml-2">▼</span>
                </summary>
                <div className="px-5 pb-4 pt-2 border-t border-gray-100 divide-y divide-gray-100">
                  {d.actividades.map((a, j) => (
                    <div
                      key={j}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 py-2.5 first:pt-0 last:pb-0"
                    >
                      <span className="font-semibold text-sm text-gray-800">{a.nombre}</span>
                      <span className="text-sm text-primary-700 font-medium">{a.horario}</span>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Inscripción */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-violet-600" />
            Cómo inscribirte
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Para inscribirte escribí por WhatsApp o acercate personalmente.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-lg px-4 py-2.5 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Escribinos por WhatsApp: 11 7623-8532
            </a>
            <div className="flex items-start gap-2 text-sm text-gray-700 pt-3 border-t border-gray-100">
              <MapPin className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
              <span>Zuviría 4852, José C. Paz</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <Clock className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
              <span>Lunes a Viernes de 10:00 a 20:00 hs</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
