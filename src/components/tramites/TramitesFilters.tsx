"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { X } from "lucide-react";
import { TRAMITE_CATEGORY_LABELS } from "@/lib/utils";

const CATEGORIES = Object.keys(TRAMITE_CATEGORY_LABELS) as Array<
  keyof typeof TRAMITE_CATEGORY_LABELS
>;

export default function TramitesFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("categoria") ?? "";
  const currentSearch = searchParams.get("q") ?? "";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/tramites?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const hasFilters = currentCategory || currentSearch;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
      <input
        type="text"
        placeholder="Buscar trámite..."
        value={currentSearch}
        onChange={(e) => updateParam("q", e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
      />
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => updateParam("categoria", "")}
          className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
            !currentCategory
              ? "bg-primary-600 text-white border-primary-600"
              : "bg-white text-gray-600 border-gray-200 hover:border-primary-300"
          }`}
        >
          Todos
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              updateParam("categoria", currentCategory === cat ? "" : cat)
            }
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
              currentCategory === cat
                ? "bg-primary-600 text-white border-primary-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary-300"
            }`}
          >
            {TRAMITE_CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>
      {hasFilters && (
        <button
          onClick={() => router.push("/tramites", { scroll: false })}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700"
        >
          <X className="h-4 w-4" />
          Limpiar filtros
        </button>
      )}
    </div>
  );
}
