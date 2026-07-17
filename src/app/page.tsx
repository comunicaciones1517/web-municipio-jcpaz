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
  Scale,
  CalendarDays,
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
      <section className="py-10 px-4 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a
              href="https://sites.google.com/view/dir-gral-de-rentas/tributo?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
            >
              <Landmark className="h-10 w-10 text-emerald-600" />
              <span className="text-sm font-bold text-gray-800 leading-tight">Dirección General de Rentas</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ar.com.tsf.AppWechterPersonaJCP01&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-green-300 transition-all"
            >
              <Smartphone className="h-10 w-10 text-green-600" />
              <span className="text-sm font-bold text-gray-800 leading-tight">App Municipal</span>
            </a>
            <a
              href="https://drive.google.com/drive/folders/146swI0DfUgZ2HwXidkQZqNSZF_OY3Agy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-amber-300 transition-all"
            >
              <Scale className="h-10 w-10 text-amber-600" />
              <span className="text-sm font-bold text-gray-800 leading-tight">Ordenanza Fiscal Vigente</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1WoimnkxdOuX5kh2Yq9FylEps2XT1pOlA/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <CalendarDays className="h-10 w-10 text-blue-600" />
              <span className="text-sm font-bold text-gray-800 leading-tight">Calendario Fiscal Vigente</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trámites y Guía */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-7 w-7 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Trámites y Guía
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link
              href="/tramites/habilitacion-comercial"
              className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-amber-300 transition-all"
            >
              <Store className="h-10 w-10 text-amber-600" />
              <span className="text-sm font-bold text-gray-800 leading-tight">Habilitación Comercial</span>
            </Link>

            <Link
              href="/tramites/licencias-conducir"
              className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
            >
              <Car className="h-10 w-10 text-indigo-600" />
              <span className="text-sm font-bold text-gray-800 leading-tight">Licencias de Conducir</span>
            </Link>

            <Link
              href="/tramites/obras-y-servicios"
              className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-orange-300 transition-all"
            >
              <HardHat className="h-10 w-10 text-orange-600" />
              <span className="text-sm font-bold text-gray-800 leading-tight">Obras y Servicios</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
