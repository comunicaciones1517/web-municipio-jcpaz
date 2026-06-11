import type { BusLine } from "@/types";
import data from "@/data/transporte.json";

const lines = data as BusLine[];

export function getAllBusLines(): BusLine[] {
  return lines;
}
