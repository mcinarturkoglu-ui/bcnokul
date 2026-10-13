"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface SectionMeta {
  id: string;
  name: string;
  shortLabel: string;
}

export const HOME_SECTIONS: SectionMeta[] = [
  { id: "hero", name: "Giriş", shortLabel: "Giriş" },
  { id: "philosophy", name: "Eğitim Felsefemiz", shortLabel: "Felsefe" },
  { id: "levels", name: "Eğitim Kademeleri", shortLabel: "Kademeler" },
  { id: "approach", name: "Akademik Metodoloji", shortLabel: "Metodoloji" },
  { id: "international", name: "Uluslararası Vizyon", shortLabel: "Global Ağ" },
  { id: "campus", name: "Kampüs Olanakları", shortLabel: "Kampüs" },
  { id: "achievements", name: "Yaşam & Başarılar", shortLabel: "Başarılar" },
  { id: "news", name: "Haberler & Gündem", shortLabel: "Haberler" },
  { id: "admission", name: "Kayıt & İletişim", shortLabel: "İletişim" },
];

interface FullPageContainerProps {
  children: React.ReactNode[];
}

export default function FullPageContainer({ children }: FullPageContainerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isTransitioningRef = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number>(0);
  const { isAdmissionOpen } = useModal();

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < HOME_SECTIONS.length) {
      setActiveIndex(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioningRef.current) return;
    if (activeIndex < HOME_SECTIONS.length - 1) {
      isTransitioningRef.current = true;
      setActiveIndex((prev) => prev + 1);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 850);
    }
  }, [activeIndex]);

  const prevSlide = useCallback(() => {
    if (isTransitioningRef.current) return;
    if (activeIndex > 0) {
      isTransitioningRef.current = true;
      setActiveIndex((prev) => prev - 1);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 850);
    }
  }, [activeIndex]);

  // Desktop wheel listener
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      // Pause slider if modal is active
      if (isAdmissionOpen) return;

      // Allow scroll inside scrollable elements (e.g. chat, modals)
      const target = e.target as HTMLElement | null;
      if (target?.closest(".allow-inner-scroll, [role='dialog'], aside")) {
        return;
      }

      if (Math.abs(e.deltaY) < 30) return;

      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isMobile, isAdmissionOpen, nextSlide, prevSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAdmissionOpen) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(HOME_SECTIONS.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAdmissionOpen, nextSlide, prevSlide, goToSlide]);

  // Mobile Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAdmissionOpen) return;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isAdmissionOpen || touchStartY.current === null) return;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    const duration = Date.now() - touchStartTime.current;

    // Detect intentional swipe
    if (Math.abs(deltaY) > 50 && duration < 500) {
      if (deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartY.current = null;
  };

  return (
    <div
      className="relative w-full h-[calc(100vh-58px)] md:h-[calc(100vh-89px)] overflow-hidden bg-[#0B1524] select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Viewport Container */}
      <div
        className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          transform: `translate3d(0, -${activeIndex * 100}%, 0)`,
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="w-full h-full relative overflow-hidden flex flex-col justify-center"
            style={{
              visibility: Math.abs(activeIndex - index) <= 1 ? "visible" : "hidden",
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Floating Minimal Right-Side Progress Indicator (Desktop) */}
      <nav
        aria-label="Bölüm Navigasyonu"
        className="hidden lg:flex fixed right-6 xl:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 pointer-events-auto"
      >
        <div className="flex flex-col items-center gap-2.5 p-2 rounded-full bg-[#0B1524]/60 backdrop-blur-md border border-white/10 shadow-2xl">
          {HOME_SECTIONS.map((sec, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className="group relative flex items-center justify-end p-1 cursor-pointer focus:outline-none"
                aria-label={`${sec.name} bölümüne git`}
              >
                {/* Tooltip on hover */}
                <span className="absolute right-7 px-2.5 py-1 rounded-md bg-[#17263D] text-white text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border border-white/15">
                  {sec.name}
                </span>

                {/* Dot / Pill indicator */}
                <span
                  className={`block transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-2.5 h-6 bg-gradient-to-b from-[#C59B27] to-amber-300 shadow-md ring-2 ring-[#C59B27]/40"
                      : "w-2 h-2 bg-white/40 hover:bg-white/80"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Section Counter Pill */}
        <div className="mt-1 px-2.5 py-1 rounded-full bg-[#0B1524]/70 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-amber-300 tracking-wider">
          0{activeIndex + 1} / 0{HOME_SECTIONS.length}
        </div>
      </nav>

      {/* Mobile Floating Progress Dots (Minimal) */}
      <div className="lg:hidden fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5 p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
        {HOME_SECTIONS.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goToSlide(idx)}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              activeIndex === idx ? "h-4 bg-[#C59B27]" : "h-1.5 bg-white/40"
            }`}
            aria-label={`Bölüm ${idx + 1}`}
          />
        ))}
      </div>

      {/* Floating Bottom Quick Next Arrow (Except Last Slide) */}
      {activeIndex < HOME_SECTIONS.length - 1 && (
        <button
          type="button"
          onClick={nextSlide}
          className="hidden sm:flex fixed bottom-5 left-1/2 -translate-x-1/2 z-30 items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer animate-bounce group"
          aria-label="Sonraki bölüme geç"
        >
          <span>{HOME_SECTIONS[activeIndex + 1]?.shortLabel}</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#C59B27] group-hover:translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}
