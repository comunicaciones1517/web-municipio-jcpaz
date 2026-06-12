import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.84 1.56V6.8a4.85 4.85 0 01-1.07-.11z" />
    </svg>
  );
}

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

        {/* Redes sociales */}
        <div className="mt-10 border-t border-gray-700 pt-8">
          <h3 className="text-white font-semibold text-lg mb-4 text-center">
            Seguinos en redes
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.instagram.com/comunicaciones.1517/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-pink-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>@comunicaciones.1517</span>
            </a>
            <a
              href="https://www.facebook.com/comunicaciones.josecpaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span>comunicaciones.josecpaz</span>
            </a>
            <a
              href="https://www.tiktok.com/@comunicaciones1517"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <TikTokIcon className="h-5 w-5" />
              <span>@comunicaciones1517</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Municipio Digital. Todos los derechos
          reservados. Los datos presentados son de carácter informativo.
        </div>
      </div>
    </footer>
  );
}
