import Link from "next/link";
import { ClipboardCheck, MessageCircle, Mail, MapPin } from "lucide-react";

export default function LibretaSanitariaBanner() {
  return (
    <details className="group mb-6 bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-200 rounded-2xl overflow-hidden shadow-sm">
      <summary className="cursor-pointer px-5 py-4 flex items-center gap-3 hover:bg-teal-100/50 transition-colors">
        <div className="bg-teal-600 text-white rounded-full p-2 shrink-0">
          <ClipboardCheck className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-teal-900">Libreta Sanitaria Laboral</p>
          <p className="text-sm text-teal-700">Requisitos, turnos y lugar de atención — hacé clic para ver el detalle</p>
        </div>
        <span className="text-teal-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
      </summary>

      <div className="px-5 pb-5 pt-1 border-t border-teal-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-bold text-teal-800 uppercase tracking-wide mb-1">Requisitos</p>
          <ul className="text-sm text-gray-700 space-y-0.5">
            <li>• DNI (original y copia)</li>
            <li>• 8 horas de ayuno</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold text-teal-800 uppercase tracking-wide mb-1">Se realizará</p>
          <ul className="text-sm text-gray-700 space-y-0.5">
            <li>• Laboratorio</li>
            <li>• Radiografía de tórax</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold text-teal-800 uppercase tracking-wide mb-1">Horario de atención</p>
          <p className="text-sm text-gray-700">Lunes a viernes de 8:00 a 14:00 hs</p>
        </div>

        <div>
          <p className="text-xs font-bold text-teal-800 uppercase tracking-wide mb-1">Lugar de atención</p>
          <div className="flex items-start gap-1.5 text-sm text-gray-700">
            <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
            <span>
              <Link href="/salud/hospital-mujer-nino-nelly-quiroga/" className="text-primary-600 hover:underline font-medium">
                Hospital de la Mujer y el Niño &quot;Nelly Quiroga&quot;
              </Link>
              {" "}— Fray Butler 1942-2098, José C. Paz.
            </span>
          </div>
        </div>

        <div className="sm:col-span-2 pt-2 border-t border-teal-100">
          <p className="text-xs font-bold text-teal-800 uppercase tracking-wide mb-2">Solicitud de turnos</p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://wa.me/5491125193501"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-lg px-4 py-2 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp: 011 2519-3501
            </a>
            <a
              href="mailto:turnos.libretasanitariajcp@gmail.com"
              className="inline-flex items-center gap-2 bg-white border border-teal-300 hover:bg-teal-50 text-teal-800 font-semibold text-sm rounded-lg px-4 py-2 transition-colors"
            >
              <Mail className="h-4 w-4" />
              turnos.libretasanitariajcp@gmail.com
            </a>
          </div>
        </div>
      </div>
    </details>
  );
}
