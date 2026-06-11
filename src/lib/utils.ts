import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const FACILITY_TYPE_LABELS: Record<string, string> = {
  hospital_publico: "Hospital Público",
  hospital_privado: "Hospital Privado",
  centro_de_salud: "Centro de Salud",
  clinica: "Clínica",
};

export const TRAMITE_CATEGORY_LABELS: Record<string, string> = {
  documentacion: "Documentación",
  habilitaciones: "Habilitaciones",
  beneficios_sociales: "Beneficios Sociales",
  infraestructura: "Infraestructura",
  salud: "Salud",
  educacion: "Educación",
  transporte: "Transporte",
};

export const ESPACIO_TYPE_LABELS: Record<string, string> = {
  parque: "Parque",
  plaza: "Plaza",
  polideportivo: "Polideportivo",
  espacio_deportivo: "Espacio Deportivo",
  reserva: "Reserva",
};

export function getTodaySchedule(
  hours: { day: string; open: string; close: string }[]
): { open: string; close: string } | null {
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  const today = days[new Date().getDay()];
  return hours.find((h) => h.day === today) ?? null;
}
