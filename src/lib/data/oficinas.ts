import type { MunicipalOffice } from "@/types";
import data from "@/data/oficinas.json";

const offices = data as MunicipalOffice[];

export function getAllOffices(): MunicipalOffice[] {
  return offices;
}

export function getOfficeById(id: string): MunicipalOffice | undefined {
  return offices.find((o) => o.id === id);
}
