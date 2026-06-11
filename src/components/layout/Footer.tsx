import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre el municipio */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Municipio Digital
            </h3>
            <p className="text-sm leading-relaxed">
              Portal vecinal de servicios municipales. Encontrá información
              sobre salud, trámites, transporte y espacios públicos de tu
              municipio.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-400 shrink-0" />
                <span>(02320) 527300</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary-400 mt-0.5 shrink-0" />
                <span>Gaspar Campos 6151, 1665 — Sede Central</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary-400 shrink-0" />
                <span>Lunes a viernes 8:00–17:00 hs</span>
              </li>
            </ul>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Acceso rápido
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/salud", label: "Salud y Hospitales" },
                { href: "/oficinas", label: "Oficinas Municipales" },
                { href: "/tramites", label: "Trámites Online" },
                { href: "/dependencias", label: "Dependencias" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Municipio Digital. Todos los derechos
          reservados. Los datos presentados son de carácter informativo.
        </div>
      </div>
    </footer>
  );
}
