export type DayOfWeek =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo";

export interface DaySchedule {
  day: DayOfWeek;
  open: string;
  close: string;
}

// ─── Salud ────────────────────────────────────────────────────

export type FacilityType =
  | "hospital_publico"
  | "hospital_privado"
  | "centro_de_salud"
  | "clinica";

export interface HealthFacility {
  id: string;
  name: string;
  type: FacilityType;
  address: string;
  zone: string;
  phones: string[];
  emergencyPhone?: string;
  hasEmergencyRoom: boolean;
  hours: DaySchedule[];
  specialties: string[];
  services: string[];
  mapLink: string;
  coordinates?: { lat: number; lng: number };
  photo?: string;
  photos?: string[];
  website?: string;
  notes?: string;
  comoLlegar?: string[];
}

// ─── Oficinas Municipales ─────────────────────────────────────

export interface MunicipalOffice {
  id: string;
  name: string;
  address: string;
  zone: string;
  phone: string;
  hours: DaySchedule[];
  tramites: string[];
  mapLink: string;
  photo?: string;
  notes?: string;
}

// ─── Trámites Online ──────────────────────────────────────────

export type TramiteCategory =
  | "documentacion"
  | "habilitaciones"
  | "beneficios_sociales"
  | "infraestructura"
  | "salud"
  | "educacion"
  | "transporte";

export interface OnlineTramite {
  id: string;
  title: string;
  category: TramiteCategory;
  description: string;
  requiredDocuments: string[];
  link: string;
  estimatedTime: string;
  isNew?: boolean;
}

// ─── Transporte Público ───────────────────────────────────────

export interface BusSchedule {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface BusLine {
  id: string;
  lineNumber: string;
  operator: string;
  routeDescription: string;
  keyStops: string[];
  frequency: string;
  schedule: BusSchedule;
  mapLink?: string;
}

// ─── Dependencias Municipales ─────────────────────────────────

export type DependenciaType =
  | "cementerio"
  | "polideportivo"
  | "biblioteca"
  | "teatro"
  | "otro";

export interface Dependencia {
  id: string;
  name: string;
  type: DependenciaType;
  address: string;
  zone: string;
  phone?: string;
  director?: string;
  hours: DaySchedule[];
  services?: string[];
  mapLink: string;
  coordinates?: { lat: number; lng: number };
  photo?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  notes?: string;
  comoLlegar?: string[];
}

// ─── Espacios Verdes ──────────────────────────────────────────

export type EspacioType =
  | "parque"
  | "plaza"
  | "polideportivo"
  | "espacio_deportivo"
  | "reserva";

export interface EspacioVerde {
  id: string;
  name: string;
  type: EspacioType;
  address: string;
  zone: string;
  amenities: string[];
  hours?: string;
  mapLink: string;
  area?: string;
}
