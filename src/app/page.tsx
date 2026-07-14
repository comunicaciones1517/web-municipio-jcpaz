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
  ExternalLink,
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

      {/* Emergency bar */}
      <section className="bg-red-600 text-white py-3 px-4">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-medium">
          <Phone className="h-4 w-4 shrink-0" />
          <span>Emergencia Médica: <strong>107 / 147</strong></span>
          <span className="text-white/40">|</span>
          <span>Bomberos: <strong>11 5661-5900</strong></span>
          <span className="text-white/40">|</span>
          <span>C.O.M: <strong>(02320) 536494</strong></span>
          <span className="text-white/40">|</span>
          <span>Defensa Civil: <strong>11 3933-3283</strong></span>
          <span className="text-white/40">|</span>
          <span>Patrulla Urbana: <strong>(02320) 570804</strong></span>
          <span className="text-white/40">|</span>
          <span>Obras y Servicios: <strong>(02320) 572000 / 573000</strong></span>
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

      {/* Rentas y App */}
      <section className="py-10 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Dirección General de Rentas</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para consultar sobre tus tributos, vencimientos y trámites relacionados con la Dirección General de Rentas / Secretaría de Economía y Hacienda, ingresá al siguiente link:
              </p>
              <a
                href="https://sites.google.com/view/dir-gral-de-rentas/tributo?authuser=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-emerald-600 text-white px-4 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Consultar tributos
              </a>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">App Municipalidad de José C. Paz</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Recordá que ahora podés pagar tus tributos de forma más rápida y fácil con la App Municipalidad de José C. Paz.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=ar.com.tsf.AppWechterPersonaJCP01&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Descargar en Google Play
              </a>
            </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          </div>
        </div>
      </section>

    </div>
  );
}
