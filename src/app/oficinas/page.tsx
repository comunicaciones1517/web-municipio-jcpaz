import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import OfficeCard from "@/components/oficinas/OfficeCard";
import { getAllOffices } from "@/lib/data/oficinas";

export const metadata: Metadata = {
  title: "Oficinas Municipales",
  description:
    "Delegaciones y oficinas municipales descentralizadas para gestionar trámites cerca de tu domicilio.",
};

export default function OficinasPage() {
  const offices = getAllOffices();

  return (
    <div>
      <PageHeader
        title="Oficinas Municipales"
        subtitle="Delegaciones y oficinas descentralizadas donde podés gestionar trámites cerca de tu casa."
        icon={<Building2 />}
        color="blue"
        backHref="/"
        backLabel="Inicio"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-gray-500 mb-6">
          {offices.length} oficinas disponibles en el municipio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {offices.map((o) => (
            <OfficeCard key={o.id} office={o} />
          ))}
        </div>
      </div>
    </div>
  );
}
