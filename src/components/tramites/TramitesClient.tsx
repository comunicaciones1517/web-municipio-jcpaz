"use client";

import { useState, useMemo } from "react";
import { X, ClipboardList, ExternalLink } from "lucide-react";
import type { OnlineTramite } from "@/types";

function norm(str: string) {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

interface Props {
  tramites: OnlineTramite[];
}

export default function TramitesClient({ tramites }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return tramites;
    const q = norm(query.trim());
    return tramites.filter(
      (t) =>
        norm(t.title).includes(q) ||
        norm(t.description).includes(q) ||
        t.requiredDocuments.some((d) => norm(d).includes(q))
    );
  }, [tramites, query]);

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <input
          type="text"
          placeholder="Buscar trámite..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 mt-2"
          >
            <X className="h-4 w-4" />
            Limpiar búsqueda
          </button>
        )}
      </div>

      <p className="text-sm text-gray-500 mt-4 mb-6">
        {filtered.length} trámites disponibles
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <ClipboardList className="h-12 w-12 mx-auto mb-3 opacity-30" />
          <p className="text-lg font-medium">
            {query ? "Sin resultados para tu búsqueda." : "Próximamente."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-gray-200 rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="font-bold text-gray-900 text-base">{t.title}</h3>
                {t.isNew && (
                  <span className="text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">
                    Nuevo
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {t.description}
              </p>

              {t.requiredDocuments.length > 0 && (
                <details className="mb-3">
                  <summary className="text-xs font-semibold text-gray-500 cursor-pointer hover:text-gray-700 uppercase tracking-wide">
                    Documentación requerida ({t.requiredDocuments.length})
                  </summary>
                  <ul className="mt-2 space-y-1">
                    {t.requiredDocuments.map((doc, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">⏱ {t.estimatedTime}</span>
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors"
                >
                  Iniciar trámite
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
