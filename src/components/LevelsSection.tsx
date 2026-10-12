"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, Sparkles } from "lucide-react";
import { LEVELS } from "@/data/bcnData";

export default function LevelsSection() {
  const [activeLevelIndex, setActiveLevelIndex] = useState(0);
  const { openAdmission } = useModal();
  const currentLevel = LEVELS[activeLevelIndex];

  return (
    <section
      id="slide-3"
      className="w-full h-full flex flex-col justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-12 max-w-7xl 2xl:max-w-[1520px] mx-auto select-none text-[#17263D] relative overflow-hidden"
    >
      {/* 1. Standard Header Tier */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white text-[#1E3A8A] text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-slate-200">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>3 Yaştan Üniversiteye Kesintisiz Ekol</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#17263D] leading-tight">
            Eğitim Kademelerimiz.
          </h2>
        </div>

        <Link
          href="/kademeler"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors shrink-0 group relative z-20 cursor-pointer"
        >
          <span>Tüm Kademeleri Gör</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 2. Standard Main Stage Tier (Fixed Height Frame with Navigation) */}
      <div className="flex-1 min-h-0 w-full py-1.5 flex flex-col justify-between gap-2.5">
        {/* Level Switcher Navigation (Pills) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-0.5 no-scrollbar shrink-0">
          {LEVELS.map((lvl, index) => {
            const isActive = activeLevelIndex === index;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setActiveLevelIndex(index)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer relative z-20 pointer-events-auto ${
                  isActive
                    ? "bg-[#17263D] text-white shadow-md scale-100"
                    : "bg-white text-slate-600 hover:text-[#17263D] hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span>{lvl.name.split(" ")[0]}</span>
                <span
                  className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {lvl.ageGroup}
                </span>
              </button>
            );
          })}
        </div>

        {/* Major Showcase Panel */}
        <div className="luxury-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl border border-slate-200/80 bg-white flex-1 min-h-0">
          {/* Left Visual Area */}
          <div className="lg:col-span-7 relative h-full min-h-[220px] overflow-hidden group bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLevel.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentLevel.image}
                  alt={currentLevel.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Overlay Badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#17263D] text-[11px] font-bold shadow-md">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                {currentLevel.badge}
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-4 z-10 text-white space-y-0.5">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-300">
                {currentLevel.ageGroup} • {currentLevel.subtitle}
              </div>
              <h3 className="text-base sm:text-2xl font-bold">
                {currentLevel.name}
              </h3>
            </div>
          </div>

          {/* Right Information Area */}
          <div className="lg:col-span-5 p-4 sm:p-5 lg:p-6 flex flex-col justify-between space-y-2.5 bg-white">
            <div className="space-y-2.5">
              <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed italic border-l-2 border-amber-400 pl-3">
                "{currentLevel.subtitle} — Bireysel merakı dünya standartlarında akademik yetkinliğe dönüştüren kademe."
              </p>

              {/* 3 Key Feature Chips */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Kritik Kazanımlar & Pedagoji
                </div>
                {currentLevel.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs"
                  >
                    <div className="w-4 h-4 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </div>
                    <div>
                      <div className="font-bold text-[#17263D]">{feat.title}</div>
                      <div className="text-[11px] text-slate-500 leading-snug">{feat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2 border-t border-slate-100">
              <Link
                href={`/kademeler/${currentLevel.slug}`}
                className="w-full sm:w-auto flex-1 py-2 px-4 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 relative z-20 pointer-events-auto cursor-pointer"
              >
                <span>Müfredat Detayları</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => openAdmission(currentLevel.name)}
                className="w-full sm:w-auto py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#17263D] text-xs font-bold transition-all cursor-pointer relative z-20 pointer-events-auto"
              >
                Randevu Al
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Standard Grounding Bottom Tier */}
      <div className="pt-2 sm:pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="font-semibold text-slate-700">Tüm Kademeler:</span>
          <span>Aurelia Preschool (3-6)</span>
          <span className="text-slate-300">•</span>
          <span>İlkokul (IB PYP)</span>
          <span className="text-slate-300">•</span>
          <span>Ortaokul (LGS)</span>
          <span className="text-slate-300">•</span>
          <span>Anadolu & Fen Lisesi (OSSD/AP)</span>
        </div>
        <Link
          href="/kademeler"
          className="text-[11px] sm:text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Tüm Müfredat Kılavuzunu İncele</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
