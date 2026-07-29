"use client";

import { useSearchParams } from "next/navigation";
import { Wrench } from "lucide-react";
import Link from "next/link";

export default function PreviewGate({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get("ver") === "jcp2026";

  if (!isPreview) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-10">
          <Wrench className="h-14 w-14 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Sección en mantenimiento
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Estamos actualizando y verificando la información de los
            establecimientos de salud para brindarte datos correctos y
            actualizados. Disculpá las molestias.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-4">
        <div className="bg-amber-100 border border-amber-300 rounded-lg px-4 py-2 text-sm text-amber-800 font-medium">
          Vista previa — esta sección no es visible para el público.
        </div>
      </div>
      {children}
    </>
  );
}
