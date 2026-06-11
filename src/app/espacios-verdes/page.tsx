import type { Metadata } from "next";
import { Trees, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { getAllEspacios } from "@/lib/data/espacios";
import { ESPACIO_TYPE_LABELS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Espacios Verdes",
  description:
    "Parques, plazas, polideportivos y reservas del municipio con amenities, horarios y ubicación.",
};

const TYPE_COLORS: Record<string, string> = {
  parque: "bg-green-100 text-green-700",
  plaza: "bg-emerald-100 text-emerald-700",
  polideportivo: "bg-blue-100 text-blue-700",
  espacio_deportivo: "bg-orange-100 text-orange-700",
  reserva: "bg-teal-100 text-teal-700",
};

export default function EspaciosVerdesPage() {
  const espacios = getAllEspacios();

  return (
    <div>
      <PageHeader
        title="Espacios Verdes"
        subtitle="Parques, plazas, polideportivos y reservas del municipio. Actividades, horarios y acceso."
        icon={<Trees />}
        color="green"
        backHref="/"
        backLabel="Inicio"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-gray-500 mb-6">
          {espacios.length} espacios verdes y recreativos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {espacios.map((e) => (
            <div
              key={e.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Color bar */}
              <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500" />

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1 inline-block ${TYPE_COLORS[e.type] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {ESPACIO_TYPE_LABELS[e.type] ?? e.type}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">
                      {e.name}
                    </h3>
                  </div>
                  {e.area && (
                    <span className="text-xs text-gray-400 shrink-0">{e.area}</span>
                  )}
                </div>

                <div className="space-y-1.5 text-sm text-gray-600 mb-3">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    <span>
                      {e.address}{" "}
                      <span className="text-gray-400">— {e.zone}</span>
                    </span>
                  </div>
                  {e.hours && (
                    <div className="flex items-start gap-1.5">
                      <Clock className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                      <span>{e.hours}</span>
                    </div>
                  )}
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {e.amenities.slice(0, 4).map((a) => (
                    <span
                      key={a}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                    >
                      {a}
                    </span>
                  ))}
                  {e.amenities.length > 4 && (
                    <span className="text-xs text-gray-400 px-1 py-0.5">
                      +{e.amenities.length - 4} más
                    </span>
                  )}
                </div>

                <a
                  href={e.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 hover:underline"
                >
                  <MapPin className="h-4 w-4 shrink-0" />
                  Ver en mapa
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
