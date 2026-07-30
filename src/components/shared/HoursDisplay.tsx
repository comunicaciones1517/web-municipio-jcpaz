import type { DaySchedule } from "@/types";
import { cn } from "@/lib/utils";

const DAY_LABELS: Record<string, string> = {
  lunes: "Lunes",
  martes: "Martes",
  miercoles: "Miércoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sabado: "Sábado",
  domingo: "Domingo",
};

const TODAY_INDEX: Record<number, string> = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
};

interface HoursDisplayProps {
  hours: DaySchedule[];
  compact?: boolean;
  variant?: "table" | "pills";
}

export default function HoursDisplay({ hours, compact, variant = "table" }: HoursDisplayProps) {
  const today = TODAY_INDEX[new Date().getDay()];

  if (compact) {
    const todaySchedule = hours.find((h) => h.day === today);
    if (!todaySchedule) return null;
    const isOpen =
      todaySchedule.open !== "cerrado" && todaySchedule.open !== "";
    return (
      <span className={cn("text-sm", isOpen ? "text-green-600" : "text-red-500")}>
        Hoy:{" "}
        {isOpen
          ? `${todaySchedule.open}–${todaySchedule.close}`
          : "Cerrado"}
      </span>
    );
  }

  if (variant === "pills") {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {hours.map((h) => {
          const isToday = h.day === today;
          const isClosed = h.open === "cerrado" || h.open === "";
          return (
            <div
              key={h.day}
              className={cn(
                "rounded-xl px-3 py-2.5 text-center border",
                isToday
                  ? "bg-primary-600 border-primary-600 text-white shadow-sm"
                  : "bg-gray-50 border-gray-200 text-gray-700"
              )}
            >
              <p className={cn("text-xs font-semibold", isToday ? "text-white" : "text-gray-500")}>
                {DAY_LABELS[h.day]}
                {isToday && " (hoy)"}
              </p>
              <p
                className={cn(
                  "text-sm font-medium mt-0.5",
                  isClosed && !isToday && "text-gray-400"
                )}
              >
                {isClosed ? "Cerrado" : `${h.open} – ${h.close}`}
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <table className="w-full text-sm border-collapse">
      <tbody>
        {hours.map((h) => {
          const isToday = h.day === today;
          const isClosed = h.open === "cerrado" || h.open === "";
          return (
            <tr
              key={h.day}
              className={cn(
                "border-b border-gray-100 last:border-0",
                isToday && "bg-blue-50 font-semibold"
              )}
            >
              <td className="py-1.5 pr-4 text-gray-700 w-28">
                {DAY_LABELS[h.day]}
                {isToday && (
                  <span className="ml-1 text-xs text-blue-600">(hoy)</span>
                )}
              </td>
              <td
                className={cn(
                  "py-1.5",
                  isClosed ? "text-gray-400" : "text-gray-800"
                )}
              >
                {isClosed ? "Cerrado" : `${h.open} – ${h.close}`}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
