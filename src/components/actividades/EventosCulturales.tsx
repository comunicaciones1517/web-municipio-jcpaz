"use client";

import { MapPin, Clock } from "lucide-react";

interface EventoCultural {
  fecha: string; // ISO yyyy-mm-dd
  titulo: string;
  horario: string;
  lugar: string;
}

const EVENTOS: EventoCultural[] = [
  {
    fecha: "2026-08-07",
    titulo: 'Homenaje a Alberto Julio Fernández en el Museo Histórico "José Altube"',
    horario: "17:00 hs",
    lugar: "Granaderos a Caballo 4866, José C. Paz",
  },
  {
    fecha: "2026-08-07",
    titulo: "Arte en José C. Paz — muestra por Celian Cascio y Zulma Iglesias",
    horario: "18:00 hs",
    lugar: "Zuviría 4852, José C. Paz",
  },
  {
    fecha: "2026-08-08",
    titulo: "DitiRambo Estudio presenta: Pulso",
    horario: "18:00 hs y 20:00 hs",
    lugar: "Zuviría 4852, José C. Paz",
  },
];

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

function formatFecha(fecha: string) {
  const [, m, d] = fecha.split("-").map(Number);
  return `${String(d).padStart(2, "0")} de ${MESES[m - 1]}`;
}

function hoyISO() {
  const hoy = new Date();
  return `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;
}

function agruparPorFecha(eventos: EventoCultural[]) {
  const grupos = new Map<string, EventoCultural[]>();
  for (const evento of eventos) {
    const lista = grupos.get(evento.fecha) ?? [];
    lista.push(evento);
    grupos.set(evento.fecha, lista);
  }
  return Array.from(grupos.entries());
}

function DiaCard({ fecha, eventos }: { fecha: string; eventos: EventoCultural[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <span className="inline-block text-xs font-bold text-violet-700 bg-violet-100 px-2.5 py-1 rounded-full mb-3">
        {formatFecha(fecha)}
      </span>
      <div className="divide-y divide-gray-100">
        {eventos.map((evento, i) => (
          <div key={i} className="py-3 first:pt-0 last:pb-0">
            <h3 className="font-bold text-gray-800 text-base mb-1.5">{evento.titulo}</h3>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-violet-600 shrink-0" />
                <span>{evento.horario}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-violet-600 shrink-0" />
                <span>{evento.lugar}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventosCulturales() {
  const hoy = hoyISO();
  const proximos = agruparPorFecha(
    EVENTOS.filter((e) => e.fecha >= hoy).sort((a, b) => a.fecha.localeCompare(b.fecha))
  );
  const pasados = agruparPorFecha(
    EVENTOS.filter((e) => e.fecha < hoy).sort((a, b) => b.fecha.localeCompare(a.fecha))
  );

  return (
    <section className="space-y-6">
      <div>
        {proximos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {proximos.map(([fecha, eventos]) => (
              <DiaCard key={fecha} fecha={fecha} eventos={eventos} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No hay eventos programados por el momento.</p>
        )}
      </div>

      {pasados.length > 0 && (
        <details className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
          <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between">
            Actividades pasadas
            <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs ml-2">▼</span>
          </summary>
          <div className="px-5 pb-5 pt-2 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pasados.map(([fecha, eventos]) => (
              <DiaCard key={fecha} fecha={fecha} eventos={eventos} />
            ))}
          </div>
        </details>
      )}
    </section>
  );
}
