"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SlideInfo {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
}

const SLIDES: SlideInfo[] = [
  { id: "slide-1", number: "01", title: "BCN International", shortLabel: "Giriş" },
  { id: "slide-2", number: "02", title: "Eğitim Felsefemiz", shortLabel: "Felsefe" },
  { id: "slide-3", number: "03", title: "Eğitim Kademelerimiz", shortLabel: "Kademeler" },
  { id: "slide-4", number: "04", title: "BCN Metodolojisi", shortLabel: "Yaklaşım" },
  { id: "slide-5", number: "05", title: "Uluslararası Programlar", shortLabel: "Global Ağ" },
  { id: "slide-6", number: "06", title: "12.000m² Kampüsümüz", shortLabel: "Kampüs" },
  { id: "slide-7", number: "07", title: "Yaşam & Başarılarımız", shortLabel: "Başarılar" },
  { id: "slide-8", number: "08", title: "Gündem & Duyurular", shortLabel: "Haberler" },
  { id: "slide-9", number: "09", title: "Kayıt & Kabul", shortLabel: "Randevu" },
];

export default function SlideProgressNavigator() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Find which slide is currently in view
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = SLIDES.length - 1; i >= 0; i--) {
        const el = document.getElementById(SLIDES[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSlideIndex(i);
          break;
        }
      }

      // Hide if scrolled into footer
      const lastSlide = document.getElementById("slide-9");
      if (lastSlide) {
        const lastSlideBottom = lastSlide.offsetTop + lastSlide.offsetHeight;
        if (window.scrollY + window.innerHeight > lastSlideBottom + 120) {
          setIsVisible(false);
          return;
        }
      }
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      const el = document.getElementById(SLIDES[index].id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!isVisible) return null;

  const currentSlide = SLIDES[activeSlideIndex] || SLIDES[0];

  return (
    <>
      {/* Desktop Vertical Page-by-Page Navigator (Right Rail) */}
      <nav
        aria-label="Sayfa Gezintisi"
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 pointer-events-auto"
      >
        <div className="p-2.5 rounded-full bg-[#17263D]/80 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col items-center gap-2.5">
          {SLIDES.map((slide, idx) => {
            const isActive = activeSlideIndex === idx;
            return (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Sayfa ${slide.number}: ${slide.title}`}
                className="group relative flex items-center justify-center p-1.5 cursor-pointer outline-none"
              >
                {/* Floating Tooltip Pill */}
                <div className="absolute right-8 px-3 py-1 rounded-lg bg-[#17263D] text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-1 group-hover:translate-x-0 flex items-center gap-2">
                  <span className="text-amber-400 font-mono text-[10px]">{slide.number}</span>
                  <span>{slide.title}</span>
                </div>

                {/* Dot / Indicator Bar */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-2.5 h-6 bg-gradient-to-b from-amber-400 to-amber-500 shadow-md shadow-amber-400/50 scale-110"
                      : "w-2 h-2 bg-white/40 hover:bg-white/80 hover:scale-125"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Current Page Indicator Mini Tag */}
        <div className="px-2.5 py-1 rounded-full bg-[#17263D]/90 backdrop-blur-md border border-white/15 text-[10px] font-mono text-amber-300 shadow-lg tracking-wider">
          {currentSlide.number} / {SLIDES.length.toString().padStart(2, "0")}
        </div>
      </nav>

      {/* Mobile Floating Glass Slide Progress Pill (Bottom Right) */}
      <div className="lg:hidden fixed bottom-20 right-4 z-40 pointer-events-auto">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17263D]/90 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
          <button
            onClick={() => scrollToSlide(Math.max(0, activeSlideIndex - 1))}
            disabled={activeSlideIndex === 0}
            className="p-1 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white"
            aria-label="Önceki Sayfa"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1.5 text-xs font-bold px-1">
            <span className="text-amber-400 font-mono text-[11px]">{currentSlide.number}</span>
            <span className="text-white/40 text-[10px]">/</span>
            <span className="text-slate-300 font-mono text-[11px]">09</span>
            <span className="text-white/30 text-[10px]">•</span>
            <span className="text-[11px] text-white truncate max-w-[85px]">{currentSlide.shortLabel}</span>
          </div>

          <button
            onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, activeSlideIndex + 1))}
            disabled={activeSlideIndex === SLIDES.length - 1}
            className="p-1 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white"
            aria-label="Sonraki Sayfa"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
}
