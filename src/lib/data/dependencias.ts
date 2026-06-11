import type { Dependencia } from "@/types";
import data from "@/data/dependencias.json";

const dependencias = data as Dependencia[];

export function getAllDependencias(): Dependencia[] {
  return dependencias;
}

export function getDependenciaById(id: string): Dependencia | undefined {
  return dependencias.find((d) => d.id === id);
}
