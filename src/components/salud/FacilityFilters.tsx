"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { X } from "lucide-react";
import { FACILITY_TYPE_LABELS } from "@/lib/utils";

interface FacilityFiltersProps {
  zones: string[];
  specialties: string[];
}

const TYPES = [
  "hospital_publico",
  "hospital_privado",
  "centro_de_salud",
  "clinica",
] as const;

export default function FacilityFilters({
  zones,
  specialties,
}: FacilityFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentType = searchParams.get("tipo") ?? "";
  const currentZone = searchParams.get("zona") ?? "";
  const currentSpecialty = searchParams.get("especialidad") ?? "";
  const currentGuardia = searchParams.get("guardia") === "1";
  const currentSearch = searchParams.get("q") ?? "";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/salud?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const clearAll = () => {
    router.push("/salud", { scroll: false });
  };

  const hasFilters =
    currentType || currentZone || currentSpecialty || currentGuardia || currentSearch;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
      {/* Búsqueda libre */}
      <input
        type="text"
        placeholder="Buscar por nombre o dirección..."
        value={currentSearch}
        onChange={(e) => updateParam("q", e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Tipo */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
            Tipo
          </label>
          <select
            value={currentType}
            onChange={(e) => updateParam("tipo", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white"
          >
            <option value="">Todos</option>
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {FACILITY_TYPE_LABELS[t]}
              </option>
            ))}
          </select>
        </div>

        {/* Zona */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
            Zona / Barrio
          </label>
          <select
            value={currentZone}
            onChange={(e) => updateParam("zona", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white"
          >
            <option value="">Todas las zonas</option>
            {zones.map((z) => (
              <option key={z} value={z}>
                {z}
              </option>
            ))}
          </select>
        </div>

        {/* Especialidad */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
            Especialidad
          </label>
          <select
            value={currentSpecialty}
            onChange={(e) => updateParam("especialidad", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white"
          >
            <option value="">Todas</option>
            {specialties.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Guardia toggle */}
      <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 select-none w-fit">
        <input
          type="checkbox"
          checked={currentGuardia}
          onChange={(e) =>
            updateParam("guardia", e.target.checked ? "1" : "")
          }
          className="w-4 h-4 rounded accent-primary-600"
        />
        Solo con guardia 24 horas
      </label>

      {/* Limpiar */}
      {hasFilters && (
        <button
          onClick={clearAll}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 transition-colors"
        >
          <X className="h-4 w-4" />
          Limpiar filtros
        </button>
      )}
    </div>
  );
}
