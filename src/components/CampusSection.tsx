"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FACILITIES } from "@/data/bcnData";

// Home page shows only spaces we have a real photo of; the rest wait for the school's photos
const byId = (id: string) => FACILITIES.find((f) => f.id === id)!;
const FEATURED = [
  { ...byId("campus-building"), image: "/images/bcn/campus-lobby.jpg" },
  byId("stem-labs"),
  { ...byId("science-lab"), image: "/images/bcn/campus-facade-1.jpg" },
  {
    id: "preschool-garden",
    name: "Anaokulu Oyun Bahçesi",
    category: "Erken Çocukluk",
    description: "Aurelia Preschool öğrencilerine ayrılmış, kaydıraklı ve yumuşak zeminli açık oyun alanı.",
    capacity: "",
    image: "/images/bcn/campus-facade-2.jpg",
  },
];

const HOVER_INTENT_MS = 80;

export default function CampusSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = FEATURED[selectedIdx];

  // Same rule as the levels panels: a passing cursor does not switch the photo, click/focus does at once
  const intentTimer = useRef<number | null>(null);
  const cancelIntent = () => {
    if (intentTimer.current !== null) window.clearTimeout(intentTimer.current);
    intentTimer.current = null;
  };
  const selectNow = (idx: number) => {
    cancelIntent();
    setSelectedIdx(idx);
  };
  const selectWithIntent = (idx: number) => {
    cancelIntent();
    intentTimer.current = window.setTimeout(() => setSelectedIdx(idx), HOVER_INTENT_MS);
  };
  useEffect(() => cancelIntent, []);

  return (
    <section className="w-full flex flex-col bg-white text-[#17263D] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-sm font-semibold text-[var(--bcn-gold-ink)] flex items-center gap-1.5 mb-1">
            <span>12.000 m² Bütünsel Öğrenme ve Yaşam Alanı</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#17263D]">
            Madenler / Çekmeköy Kampüsümüz
          </h2>
        </div>

        <Link
          href="/kampusumuz"
          className="inline-flex items-center min-h-11 gap-2 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer"
        >
          <span>Tüm Tesisleri İnceleyin</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Main Interactive Stage */}
      <div className="w-full max-w-7xl 2xl:max-w-[1520px] mx-auto mt-8 lg:h-[440px] grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
        {/* Left: Dynamic Main Stage Visual Display */}
        <div className="lg:col-span-7 relative h-[280px] sm:h-[380px] lg:h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-950 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

          {/* Floating Campus Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-white text-[#0B1524] text-xs font-semibold">
              {current.category}
            </span>
          </div>

          {/* Overlaid Facility Content */}
          <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5 z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {current.name}
            </h3>
            <p className="text-sm text-slate-200 max-w-lg leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>

        {/* Right: facility selector */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-2">
          {FEATURED.map((fac, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={fac.id}
                type="button"
                aria-pressed={isSelected}
                onMouseEnter={() => selectWithIntent(idx)}
                onMouseLeave={cancelIntent}
                onClick={() => selectNow(idx)}
                onFocus={() => selectNow(idx)}
                className={`min-h-14 px-4 py-3 rounded-2xl flex items-center justify-between gap-3 text-left border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                  isSelected
                    ? "bg-[#0B1524] text-white border-[#0B1524]"
                    : "bg-white hover:bg-slate-50 text-[#17263D] border-slate-200"
                }`}
              >
                <span className="text-sm sm:text-base font-semibold">{fac.name}</span>
                {fac.capacity && (
                  <span className={`text-xs font-medium shrink-0 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                    {fac.capacity}
                  </span>
                )}
              </button>
            );
          })}
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Çekmeköy Metro İstasyonu&apos;na yürüme mesafesinde, çift hostesli güvenli servis filosu.
          </p>
        </div>
      </div>
    </section>
  );
}
