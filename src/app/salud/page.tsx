import type { Metadata } from "next";
import { HeartPulse } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SaludClient from "@/components/salud/SaludClient";
import {
  getAllFacilities,
  getAllSpecialties,
} from "@/lib/data/salud";

export const metadata: Metadata = {
  title: "Salud",
  description:
    "Hospitales municipales, privados, centros de salud y clínicas con horarios, especialidades y contacto.",
};

export default function SaludPage() {
  const facilities = getAllFacilities();
  const specialties = getAllSpecialties();

  return (
    <div>
      <PageHeader
        title="Salud"
        subtitle="Hospitales y centros de salud de José C. Paz — horarios, especialidades, turnos y cómo llegar."
        icon={<HeartPulse />}
        color="red"
        backHref="/"
        backLabel="Inicio"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <SaludClient
          facilities={facilities}
          specialties={specialties}
        />
      </div>
    </div>
  );
}
