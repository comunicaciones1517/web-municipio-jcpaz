"use client";

import { useState, useMemo } from "react";
import { X, HeartPulse } from "lucide-react";
import type { HealthFacility } from "@/types";
import FacilityCard from "./FacilityCard";
import { FACILITY_TYPE_LABELS } from "@/lib/utils";

const TYPES = [
  "hospital_publico",
  "hospital_privado",
  "centro_de_salud",
  "clinica",
] as const;

function norm(str: string) {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

interface Props {
  facilities: HealthFacility[];
  specialties: string[];
}

export default function SaludClient({ facilities, specialties }: Props) {
  const [query, setQuery] = useState("");
  const [tipo, setTipo] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [soloGuardia, setSoloGuardia] = useState(false);

  const filtered = useMemo(() => {
    let r = facilities;
    if (tipo) r = r.filter((f) => f.type === tipo);
    if (especialidad)
      r = r.filter((f) =>
        f.specialties.some((s) => norm(s) === norm(especialidad))
      );
    if (soloGuardia) r = r.filter((f) => f.hasEmergencyRoom);
    if (query.trim()) {
      const q = norm(query.trim());
      r = r.filter(
        (f) =>
          norm(f.name).includes(q) ||
          norm(f.address).includes(q) ||
          norm(f.zone).includes(q)
      );
    }
    return r;
  }, [facilities, tipo, especialidad, soloGuardia, query]);

  const hasFilters = tipo || especialidad || soloGuardia || query;

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
        <input
          type="text"
          placeholder="Buscar hospital, especialidad, barrio..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
              Tipo
            </label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
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

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
              Especialidad
            </label>
            <select
              value={especialidad}
              onChange={(e) => setEspecialidad(e.target.value)}
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

        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 select-none w-fit">
          <input
            type="checkbox"
            checked={soloGuardia}
            onChange={(e) => setSoloGuardia(e.target.checked)}
            className="w-4 h-4 rounded accent-primary-600"
          />
          Solo con guardia 24 horas
        </label>

        {hasFilters && (
          <button
            onClick={() => {
              setQuery("");
              setTipo("");
              setEspecialidad("");
              setSoloGuardia(false);
            }}
            className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 transition-colors"
          >
            <X className="h-4 w-4" />
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="mt-6 mb-4">
        <p className="text-sm text-gray-500">
          {filtered.length === facilities.length
            ? `${facilities.length} efectores de salud`
            : `${filtered.length} de ${facilities.length} efectores`}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <HeartPulse className="h-12 w-12 mx-auto mb-3 opacity-30" />
          <p className="text-lg font-medium">No se encontraron resultados.</p>
          <p className="text-sm mt-1">Intentá con otros criterios.</p>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${
            filtered.length === 1
              ? "grid-cols-1 max-w-md"
              : filtered.length === 2
                ? "grid-cols-1 sm:grid-cols-2 max-w-3xl"
                : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {filtered.map((f) => (
            <FacilityCard key={f.id} facility={f} />
          ))}
        </div>
      )}
    </>
  );
}
