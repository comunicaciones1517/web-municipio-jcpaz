import { redirect } from "next/navigation";
import { getAllFacilities } from "@/lib/data/salud";

export async function generateStaticParams() {
  return getAllFacilities().map((f) => ({ id: f.id }));
}

export default function FacilityDetailPage() {
  redirect("/salud");
}
