import type { Metadata } from "next";
import { HeartPulse, Wrench } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salud — En mantenimiento",
  description: "Sección de salud temporalmente en mantenimiento.",
};

export default function SaludPage() {
  return (
    <div>
      <PageHeader
        title="Salud"
        subtitle="Hospitales y centros de salud de José C. Paz"
        icon={<HeartPulse />}
        color="red"
        backHref="/"
        backLabel="Inicio"
      />
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-10">
          <Wrench className="h-14 w-14 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Sección en mantenimiento
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Estamos actualizando y verificando la información de los establecimientos de salud para brindarte datos correctos y actualizados. Disculpá las molestias.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
