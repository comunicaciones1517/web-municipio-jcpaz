import { MapPin, CreditCard, MessageCircle } from "lucide-react";

const LUGARES_DE_PAGO = [
  {
    nombre: "Hospital Oftalmológico",
    direccion: "Av. Hipólito Yrigoyen 3028",
    horarios: ["Lunes a Viernes de 07:00 a 16:00hs", "Sábados de 08:00 a 13:00hs"],
  },
  {
    nombre: "Juzgado de Faltas",
    direccion: "Melvin Jones 5060",
    horarios: ["Lunes a Viernes de 08:00 a 14:00hs"],
  },
  {
    nombre: "Palacio Municipal",
    direccion: "Av. Gaspar Campos 6151",
    horarios: ["Lunes a Viernes de 08:00 a 17:00hs", "Sábados de 08:00 a 13:00hs"],
  },
  {
    nombre: "Secretaría de Comercio e Industria",
    direccion: "Av. Altube 2075",
    horarios: ["Lunes a Viernes de 08:00 a 16:00hs"],
  },
];

const MEDIOS_DE_PAGO = [
  "Banco de la Provincia de Buenos Aires",
  "Rapipago",
  "Mercado Pago",
  "Pago Fácil",
  "Provincia Net (ex Bapro Pagos)",
  "Vía WhatsApp",
  "Pago mis Cuentas",
];

export default function PagoInfo() {
  return (
    <>
      <a
        href="https://wa.me/5491138789504"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-xl px-6 py-4 shadow-md transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
        Consulta Y Pago por WhatsApp
      </a>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-emerald-600" />
          Lugares de Pago
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LUGARES_DE_PAGO.map((lugar, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <h3 className="font-bold text-gray-800 text-sm mb-2">{lugar.nombre}</h3>
              <p className="text-sm text-gray-600 mb-2">{lugar.direccion}</p>
              <ul className="space-y-1">
                {lugar.horarios.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-emerald-600" />
          Medios de Pago
        </h2>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {MEDIOS_DE_PAGO.map((medio, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                {medio}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
