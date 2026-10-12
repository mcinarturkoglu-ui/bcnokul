"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface SlideInfo {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
}

export const SLIDES: SlideInfo[] = [
  { id: "bolum-1", number: "01", title: "BCN International", shortLabel: "Giriş" },
  { id: "bolum-2", number: "02", title: "Eğitim Felsefemiz", shortLabel: "Felsefe" },
  { id: "bolum-3", number: "03", title: "Eğitim Kademelerimiz", shortLabel: "Kademeler" },
  { id: "bolum-4", number: "04", title: "BCN Metodolojisi", shortLabel: "Yaklaşım" },
  { id: "bolum-5", number: "05", title: "Uluslararası Programlar", shortLabel: "Global Ağ" },
  { id: "bolum-6", number: "06", title: "12.000m² Kampüsümüz", shortLabel: "Kampüs" },
  { id: "bolum-7", number: "07", title: "Yaşam & Başarılarımız", shortLabel: "Başarılar" },
  { id: "bolum-8", number: "08", title: "Gündem & Duyurular", shortLabel: "Haberler" },
  { id: "bolum-9", number: "09", title: "Kayıt & Kabul", shortLabel: "Randevu" },
  { id: "bolum-10", number: "10", title: "Kurumsal & İletişim", shortLabel: "Footer" },
];

export default function FullpageSlider({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isCooldownRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartTimeRef = useRef<number>(0);
  const { isAdmissionOpen } = useModal();

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setActiveIndex(index);
    }
  }, []);

  const triggerSlideChange = useCallback(
    (direction: "next" | "prev") => {
      if (isCooldownRef.current) return;
      isCooldownRef.current = true;

      if (direction === "next") {
        setActiveIndex((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
      } else {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      setTimeout(() => {
        isCooldownRef.current = false;
      }, 700);
    },
    []
  );

  // Wheel listener
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't scroll slides if modal is open
      if (isAdmissionOpen) return;

      // Allow native scroll inside scrollable slides (like slide 10 or cards)
      const target = e.target as HTMLElement | null;
      const scrollable = target?.closest(".slide-scrollable, .overflow-y-auto");
      if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 3;
        const atTop = scrollTop <= 3;

        if (e.deltaY > 0 && !atBottom) return;
        if (e.deltaY < 0 && !atTop) return;
      }

      if (Math.abs(e.deltaY) > 25) {
        if (e.deltaY > 0) {
          triggerSlideChange("next");
        } else {
          triggerSlideChange("prev");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [triggerSlideChange, isAdmissionOpen]);

  // Touch listener (carefully preserving click / tap events)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (isAdmissionOpen) return;
      touchStartYRef.current = e.touches[0].clientY;
      touchStartXRef.current = e.touches[0].clientX;
      touchStartTimeRef.current = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAdmissionOpen) return;
      if (touchStartYRef.current === null || touchStartXRef.current === null) return;

      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
      const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
      const duration = Date.now() - touchStartTimeRef.current;

      touchStartYRef.current = null;
      touchStartXRef.current = null;

      // Short tap without significant movement: let click handlers work naturally!
      if (Math.abs(deltaY) < 18 && Math.abs(deltaX) < 18 && duration < 300) {
        return;
      }

      // Check if target is inside an internal scrollable container
      const target = e.target as HTMLElement | null;
      const scrollable = target?.closest(".slide-scrollable, .overflow-y-auto");
      if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 5;
        const atTop = scrollTop <= 5;
        if (deltaY > 0 && !atBottom) return;
        if (deltaY < 0 && !atTop) return;
      }

      // Distinct swipe detection: > 40px and predominantly vertical
      if (Math.abs(deltaY) > 40 && Math.abs(deltaY) > Math.abs(deltaX) * 1.4) {
        if (deltaY > 0) {
          triggerSlideChange("next");
        } else {
          triggerSlideChange("prev");
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [triggerSlideChange, isAdmissionOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAdmissionOpen) return;
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        triggerSlideChange("next");
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        triggerSlideChange("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerSlideChange, isAdmissionOpen]);

  const slideChildren = React.Children.toArray(children);
  const currentSlide = SLIDES[activeIndex] || SLIDES[0];

  return (
    <div className="fixed inset-x-0 bottom-0 top-[58px] md:top-[89px] overflow-hidden bg-[#FAFBFD] z-10 select-none">
      {/* Ambient Atmospheric Lighting - Edge to Edge */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-amber-100/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#1E3A8A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Top Slide Progress Bar */}
      <div className="fixed top-[58px] md:top-[89px] left-0 right-0 h-0.5 bg-slate-200/60 z-30 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-[#1E3A8A] shadow-[0_0_8px_#F59E0B] transition-all duration-700 ease-out"
          style={{ width: `${((activeIndex + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Presentation Roadmap Navigation (Right Side Dots - Modern Glassmorphism) */}
      <nav
        aria-label="Sunum Yol Haritası"
        className="fixed right-2.5 sm:right-5 top-1/2 -translate-y-1/2 z-40 select-none pointer-events-auto"
      >
        <div className="flex flex-col items-center gap-2 py-3 px-1.5 bg-white/95 backdrop-blur-2xl rounded-full border border-slate-200/90 shadow-2xl">
          {SLIDES.map((slide, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className="group relative flex items-center justify-center p-0.5 focus:outline-none cursor-pointer"
                title={`${slide.number} / 10 • ${slide.title}`}
                aria-label={`${slide.number} / 10 • ${slide.title}`}
              >
                {/* Tooltip on Hover */}
                <div className="absolute right-7 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap bg-[#0F1E36] text-white text-[10px] font-bold py-1 px-2.5 rounded-lg border border-slate-700 shadow-2xl flex items-center gap-1.5 z-50">
                  <span className="font-mono text-amber-400 text-[9px]">
                    {slide.number} / 10
                  </span>
                  <span>{slide.shortLabel}</span>
                </div>

                {/* Dot */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-2.5 h-2.5 bg-amber-500 ring-2 ring-amber-400/40 shadow-[0_0_8px_#F59E0B]"
                      : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-600 group-hover:scale-125"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Floating Bottom Indicator */}
      <div className="lg:hidden fixed bottom-4 left-3 z-30 pointer-events-auto">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 shadow-xl">
          <button
            type="button"
            onClick={() => triggerSlideChange("prev")}
            disabled={activeIndex === 0}
            className="p-1 text-slate-500 hover:text-slate-900 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Önceki Slayt"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>

          <span className="font-mono text-[#1E3A8A] text-xs font-bold">
            {currentSlide.number}
          </span>
          <span className="text-slate-300 text-[10px]">/</span>
          <span className="font-mono text-slate-500 text-xs">10</span>
          <span className="text-[10px] text-slate-700 font-semibold max-w-[70px] truncate ml-0.5">
            {currentSlide.shortLabel}
          </span>

          <button
            type="button"
            onClick={() => triggerSlideChange("next")}
            disabled={activeIndex === SLIDES.length - 1}
            className="p-1 text-slate-500 hover:text-slate-900 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Sonraki Slayt"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Bottom Next Slide Invite (Desktop) */}
      {activeIndex < SLIDES.length - 1 && (
        <div className="hidden lg:flex fixed bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-auto animate-float">
          <button
            type="button"
            onClick={() => triggerSlideChange("next")}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold backdrop-blur-xl border border-slate-200/90 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <span className="text-[#1E3A8A] font-mono text-[11px] font-bold">
              {SLIDES[activeIndex + 1]?.number}
            </span>
            <span className="text-slate-700 group-hover:text-[#1E3A8A] transition-colors">
              Sonraki: {SLIDES[activeIndex + 1]?.title}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-amber-500 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* The Pure CSS Transform Translation Track (Hardware Accelerated) */}
      <div
        className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translate3d(0, -${activeIndex * 100}%, 0)` }}
      >
        {slideChildren.map((slideChild, idx) => (
          <div
            key={idx}
            id={SLIDES[idx]?.id || `bolum-${idx + 1}`}
            className="fullpage-slide w-full h-full shrink-0 relative flex flex-col justify-center items-center overflow-hidden"
          >
            {slideChild}
          </div>
        ))}
      </div>
    </div>
  );
}
