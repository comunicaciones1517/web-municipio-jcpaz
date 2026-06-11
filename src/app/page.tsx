import Link from "next/link";
import {
  HeartPulse,
  Building2,
  ClipboardList,
  Landmark,
  Phone,
  ArrowRight,
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
    href: "/tramites",
    icon: ClipboardList,
    title: "Trámites Online",
    description:
      "Iniciá habilitaciones, solicitá certificados y más trámites desde tu computadora.",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    iconColor: "text-green-600",
    badgeColor: "bg-green-100 text-green-700",
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
            <Link
              href="/tramites"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-colors"
            >
              <ClipboardList className="h-5 w-5" />
              Ver trámites online
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

      {/* Info util */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            ¿Sabías que podés gestionar tus trámites online?
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-5">
            Muchos trámites del municipio ya se pueden iniciar desde casa. Ahorrá
            tiempo y evitá colas.
          </p>
          <Link
            href="/tramites"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Ver trámites disponibles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
