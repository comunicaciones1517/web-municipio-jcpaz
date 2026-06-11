import type { EspacioVerde } from "@/types";
import data from "@/data/espacios.json";

const espacios = data as EspacioVerde[];

export function getAllEspacios(): EspacioVerde[] {
  return espacios;
}
