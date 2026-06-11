import type { Metadata } from "next";
import { Landmark } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import DependenciaCard from "@/components/dependencias/DependenciaCard";
import { getAllDependencias } from "@/lib/data/dependencias";

export const metadata: Metadata = {
  title: "Dependencias",
  description:
    "Instalaciones y establecimientos municipales de José C. Paz: cementerio, polideportivos y más.",
};

export default function DependenciasPage() {
  const dependencias = getAllDependencias();

  return (
    <div>
      <PageHeader
        title="Dependencias"
        subtitle="Instalaciones y establecimientos municipales de José C. Paz — horarios, contacto y cómo llegar."
        icon={<Landmark />}
        color="teal"
        backHref="/"
        backLabel="Inicio"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dependencias.map((dep) => (
            <DependenciaCard key={dep.id} dependencia={dep} />
          ))}
        </div>
      </div>
    </div>
  );
}
