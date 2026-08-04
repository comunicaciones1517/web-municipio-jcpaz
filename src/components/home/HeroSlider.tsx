"use client";

import { useEffect, useRef, useState } from "react";
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
    description:
      "Mantenete informado sobre tus tributos y trámites de la Dirección General de Rentas.",
    buttonLabel: "Dirección General de Rentas",
    buttonIcon: Landmark,
    href: "https://sites.google.com/view/dir-gral-de-rentas/tributo?authuser=0",
    external: true,
  },
  {
    description:
      "Recordá que ahora podés pagar tus tributos y gestionar tus comercios desde la nueva App Municipal.",
    buttonLabel: "App Municipal",
    buttonIcon: Smartphone,
    href: "https://play.google.com/store/apps/details?id=ar.com.tsf.AppWechterPersonaJCP01&pcampaignid=web_share",
    external: true,
  },
];

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 40;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isDragging]);

  const goTo = (i: number) => setIndex((i + SLIDES.length) % SLIDES.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    setDragOffset(e.touches[0].clientX - touchStartX.current);
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    if (dragOffset > SWIPE_THRESHOLD) {
      goTo(index - 1);
    } else if (dragOffset < -SWIPE_THRESHOLD) {
      goTo(index + 1);
    }
    touchStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const buttonClasses =
    "inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center";

  const trackWidth = trackRef.current?.offsetWidth || 0;
  const dragPercent = trackWidth ? (dragOffset / trackWidth) * 100 : 0;

  return (
    <section className="bg-primary-700 text-white py-8 px-4">
      <div className="mx-auto max-w-3xl text-center relative">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Anterior"
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Siguiente"
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={trackRef}
          className="overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(calc(${-index * 100}% + ${dragPercent}%))`,
              transition: isDragging
                ? "none"
                : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {SLIDES.map((slide, i) => {
              const Icon = slide.buttonIcon;
              return (
                <div
                  key={i}
                  className="w-full shrink-0 min-h-[92px] flex flex-col items-center justify-center px-2"
                >
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
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
