import Link from "next/link";
import {
  HeartPulse,
  Building2,
  Landmark,
  Phone,
  ArrowRight,
  FileText,
  Car,
  Store,
  Smartphone,
  HardHat,
  Ambulance,
  Flame,
  Shield,
  Siren,
  Wrench,
} from "lucide-react";

const SECTIONS = [
  {
    href: "/salud",
    icon: HeartPulse,
    title: "Salud",
    description:
      "Hospitales, centros de salud y clínicas. Horarios, especialidades, contacto y más.",
    color: "bg-red-50 border-red-200 hover:bg-red-100",
    iconColor: "text-red-600",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    href: "/oficinas",
    icon: Building2,
    title: "Oficinas Municipales",
    description:
      "Delegaciones y oficinas descentralizadas para gestionar trámites cerca de tu casa.",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    href: "/dependencias",
    icon: Landmark,
    title: "Dependencias",
    description:
      "Cementerio municipal, instalaciones y establecimientos del municipio.",
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100",
    iconColor: "text-teal-600",
    badgeColor: "bg-teal-100 text-teal-700",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* CTA vecinal */}
      <section className="bg-primary-700 text-white py-8 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-white/90 mb-5 max-w-xl mx-auto">
            Encontrá todo lo que necesitás como vecino: salud, trámites,
            transporte y espacios públicos en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/salud"
              className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <HeartPulse className="h-5 w-5" />
              Buscar servicios de salud
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency grid */}
      <section className="bg-red-600 text-white py-4 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            <a href="tel:107" className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-xl py-3 px-2 transition-colors text-center">
              <Ambulance className="h-6 w-6" />
              <span className="text-[11px] font-medium leading-tight">Emergencia</span>
              <span className="text-sm font-bold">107</span>
            </a>
            <a href="tel:1156615900" className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-xl py-3 px-2 transition-colors text-center">
              <Flame className="h-6 w-6" />
              <span className="text-[11px] font-medium leading-tight">Bomberos</span>
              <span className="text-sm font-bold">5661-5900</span>
            </a>
            <a href="tel:02320536494" className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-xl py-3 px-2 transition-colors text-center">
              <Shield className="h-6 w-6" />
              <span className="text-[11px] font-medium leading-tight">C.O.M</span>
              <span className="text-sm font-bold">536494</span>
            </a>
            <a href="tel:1139333283" className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-xl py-3 px-2 transition-colors text-center">
              <Siren className="h-6 w-6" />
              <span className="text-[11px] font-medium leading-tight">Defensa Civil</span>
              <span className="text-sm font-bold">3933-3283</span>
            </a>
            <a href="tel:02320570804" className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-xl py-3 px-2 transition-colors text-center">
              <Siren className="h-6 w-6" />
              <span className="text-[11px] font-medium leading-tight">Patrulla</span>
              <span className="text-sm font-bold">570804</span>
            </a>
            <a href="tel:02320572000" className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-xl py-3 px-2 transition-colors text-center">
              <Wrench className="h-6 w-6" />
              <span className="text-[11px] font-medium leading-tight">Obras</span>
              <span className="text-sm font-bold">572000</span>
            </a>
          </div>
        </div>
      </section>

      {/* Secciones */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            ¿Qué necesitás?
          </h2>
          <p className="text-gray-500 mb-8">
            Seleccioná la sección que te interesa para acceder a la información
            completa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className={`group border-2 rounded-xl p-6 transition-all duration-200 ${section.color}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className={`h-8 w-8 ${section.iconColor}`} />
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rentas y App Municipal */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <a
              href="https://sites.google.com/view/dir-gral-de-rentas/tributo?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 rounded-xl p-6 transition-all duration-200 bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
            >
              <div className="flex items-start justify-between mb-3">
                <Landmark className="h-8 w-8 text-emerald-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Dirección General de Rentas
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Consulta todo sobre tus tributos, vencimientos y trámites de
                manera rápida y sencilla.
              </p>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=ar.com.tsf.AppWechterPersonaJCP01&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 rounded-xl p-6 transition-all duration-200 bg-green-50 border-green-200 hover:bg-green-100"
            >
              <div className="flex items-start justify-between mb-3">
                <Smartphone className="h-8 w-8 text-green-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                App de Municipalidad de José C. Paz
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ahora podés pagar tus tributos de forma más rápida y fácil.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Trámites y Guía */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="h-7 w-7 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Trámites y Guía
            </h2>
          </div>
          <p className="text-gray-500 mb-8">
            Consultá los requisitos antes de acercarte a la oficina.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link
              href="/tramites/habilitacion-comercial"
              className="group border-2 rounded-xl p-6 transition-all duration-200 bg-amber-50 border-amber-200 hover:bg-amber-100"
            >
              <div className="flex items-start justify-between mb-3">
                <Store className="h-8 w-8 text-amber-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Habilitación Comercial
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Requisitos para habilitaciones, anexos de rubro y m², cese de
                comercio, transferencias, permisos y más.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Habilitaciones", "Transferencia", "Cese", "Artesanos", "Ambulantes"].map((tag) => (
                  <span key={tag} className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>

            <Link
              href="/tramites/licencias-conducir"
              className="group border-2 rounded-xl p-6 transition-all duration-200 bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
            >
              <div className="flex items-start justify-between mb-3">
                <Car className="h-8 w-8 text-indigo-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Licencias de Conducir
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Primera licencia, renovación, categorías A–G, requisitos
                por trámite y cómo sacar turno.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Primera vez", "Renovación", "Categorías", "Robo/Extravío", "Profesional"].map((tag) => (
                  <span key={tag} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>

            <Link
              href="/tramites/obras-y-servicios"
              className="group border-2 rounded-xl p-6 transition-all duration-200 bg-orange-50 border-orange-200 hover:bg-orange-100"
            >
              <div className="flex items-start justify-between mb-3">
                <HardHat className="h-8 w-8 text-orange-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Obras y Servicios
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cambio de titularidad, numeración domiciliaria, planos de
                mensura, propiedad horizontal y más.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Titularidad", "Numeración", "Planos", "Mensura", "Obra"].map((tag) => (
                  <span key={tag} className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}
