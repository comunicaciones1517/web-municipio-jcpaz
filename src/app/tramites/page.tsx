import type { Metadata } from "next";
import { ClipboardList } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import TramitesClient from "@/components/tramites/TramitesClient";
import { getAllTramites } from "@/lib/data/tramites";

export const metadata: Metadata = {
  title: "Trámites Online",
  description:
    "Iniciá trámites municipales desde tu casa: habilitaciones, certificados, subsidios y más.",
};

export default function TramitesPage() {
  const tramites = getAllTramites();

  return (
    <div>
      <PageHeader
        title="Trámites Online"
        subtitle="Iniciá trámites municipales desde tu casa. Ahorrá tiempo y evitá filas."
        icon={<ClipboardList />}
        color="green"
        backHref="/"
        backLabel="Inicio"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <TramitesClient tramites={tramites} />
      </div>
    </div>
  );
}
