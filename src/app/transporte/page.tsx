import type { Metadata } from "next";
import { Bus, MapPin } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { getAllBusLines } from "@/lib/data/transporte";

export const metadata: Metadata = {
  title: "Transporte Público",
  description:
    "Líneas de colectivo del municipio: recorridos, paradas, horarios y frecuencias.",
};

export default function TransportePage() {
  const lines = getAllBusLines();

  return (
    <div>
      <PageHeader
        title="Transporte Público"
        subtitle="Líneas de colectivo que circulan por el municipio. Recorridos, paradas y horarios."
        icon={<Bus />}
        color="purple"
        backHref="/"
        backLabel="Inicio"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-gray-500 mb-6">
          {lines.length} líneas de colectivo
        </p>

        <div className="space-y-5">
          {lines.map((line) => (
            <div
              key={line.id}
              className="bg-white border border-gray-200 rounded-xl p-5"
            >
              <div className="flex items-start gap-4">
                {/* Número de línea */}
                <div className="shrink-0 bg-yellow-400 text-gray-900 font-bold text-xl w-16 h-16 rounded-xl flex items-center justify-center text-center leading-tight">
                  {line.lineNumber}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <p className="font-bold text-gray-900">
                        {line.routeDescription}
                      </p>
                      <p className="text-xs text-gray-400">{line.operator}</p>
                    </div>
                    {line.mapLink && (
                      <a
                        href={line.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-xs text-primary-600 hover:underline flex items-center gap-1"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        Mapa
                      </a>
                    )}
                  </div>

                  {/* Frecuencia */}
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Frecuencia:</span>{" "}
                    {line.frequency}
                  </p>

                  {/* Horarios */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { label: "Lunes a viernes", value: line.schedule.weekdays },
                      { label: "Sábados", value: line.schedule.saturday },
                      { label: "Domingos", value: line.schedule.sunday },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="bg-gray-50 rounded-lg px-3 py-2 text-center"
                      >
                        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                        <p className="text-sm font-semibold text-gray-800">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Paradas clave */}
                  <details>
                    <summary className="text-xs font-semibold text-gray-500 cursor-pointer hover:text-gray-700 uppercase tracking-wide">
                      Paradas principales ({line.keyStops.length})
                    </summary>
                    <div className="mt-2 flex flex-col gap-1">
                      {line.keyStops.map((stop, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          {stop}
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
