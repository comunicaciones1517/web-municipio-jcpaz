"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeartPulse, Landmark, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  description?: string;
  buttonLabel: string;
  buttonIcon: React.ComponentType<{ className?: string }>;
  href: string;
  external?: boolean;
};

const SLIDES: Slide[] = [
  {
    description:
      "Encontrá todo lo que necesitás como vecino: salud, trámites, transporte y espacios públicos en un solo lugar.",
    buttonLabel: "Buscar servicios de salud",
    buttonIcon: HeartPulse,
    href: "/salud",
  },
  {
    buttonLabel: "Consultá tus tributos y servicios acá",
    buttonIcon: Landmark,
    href: "https://sites.google.com/view/dir-gral-de-rentas/tributo?authuser=0",
    external: true,
  },
  {
    buttonLabel: "Registrá tu comercio y pagá tus impuestos desde la App Municipal",
    buttonIcon: Smartphone,
    href: "https://play.google.com/store/apps/details?id=ar.com.tsf.AppWechterPersonaJCP01&pcampaignid=web_share",
    external: true,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => setIndex((i + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[index];
  const Icon = slide.buttonIcon;

  const buttonClasses =
    "inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center";

  return (
    <section className="bg-primary-700 text-white py-8 px-4">
      <div className="mx-auto max-w-3xl text-center relative">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Anterior"
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Siguiente"
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="min-h-[92px] flex flex-col items-center justify-center">
          {slide.description && (
            <p className="text-lg text-white/90 mb-5 max-w-xl mx-auto">
              {slide.description}
            </p>
          )}
          {slide.external ? (
            <a
              href={slide.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {slide.buttonLabel}
            </a>
          ) : (
            <Link href={slide.href} className={buttonClasses}>
              <Icon className="h-5 w-5 shrink-0" />
              {slide.buttonLabel}
            </Link>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
