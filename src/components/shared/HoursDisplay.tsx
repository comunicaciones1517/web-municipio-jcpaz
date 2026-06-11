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
}

export default function HoursDisplay({ hours, compact }: HoursDisplayProps) {
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
