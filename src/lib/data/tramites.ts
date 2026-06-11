import type { OnlineTramite } from "@/types";
import data from "@/data/tramites.json";

const tramites = data as OnlineTramite[];

export function getAllTramites(): OnlineTramite[] {
  return tramites;
}

export function getAllCategories(): string[] {
  return Array.from(new Set(tramites.map((t) => t.category)));
}
