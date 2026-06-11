import type { HealthFacility } from "@/types";
import data from "@/data/salud.json";

const facilities = data as HealthFacility[];

export function getAllFacilities(): HealthFacility[] {
  return facilities;
}

export function getFacilityById(id: string): HealthFacility | undefined {
  return facilities.find((f) => f.id === id);
}

export function getAllZones(): string[] {
  return Array.from(new Set(facilities.map((f) => f.zone))).sort();
}

export function getAllSpecialties(): string[] {
  const all = facilities.flatMap((f) => f.specialties);
  return Array.from(new Set(all)).sort();
}
