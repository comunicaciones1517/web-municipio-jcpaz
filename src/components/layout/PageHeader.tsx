import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  color?: "blue" | "green" | "red" | "purple" | "orange" | "teal";
  backHref?: string;
  backLabel?: string;
}

const COLOR_CLASSES = {
  blue: "from-primary-700 to-primary-500",
  green: "from-secondary-700 to-secondary-500",
  red: "from-red-700 to-red-500",
  purple: "from-purple-700 to-purple-500",
  orange: "from-orange-600 to-orange-400",
  teal: "from-teal-700 to-teal-500",
};

export default function PageHeader({
  title,
  subtitle,
  icon,
  color = "blue",
  backHref,
  backLabel = "Inicio",
}: PageHeaderProps) {
  return (
    <div
      className={`bg-gradient-to-r ${COLOR_CLASSES[color]} text-white py-10 px-4`}
    >
      <div className="mx-auto max-w-7xl">
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        )}
        <div className="flex items-center gap-3 mb-2">
          {icon && <span className="text-3xl">{icon}</span>}
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        {subtitle && (
          <p className="text-white/85 text-lg mt-1 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
