"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { Navigation, ArrowRight, Compass } from "lucide-react";
import { INSTITUTION_INFO, FACILITIES } from "@/data/bcnData";

export default function CampusSection() {
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState(0);
  const { openAdmission } = useModal();
  const currentFacility = FACILITIES[selectedFacilityIndex];

  return (
    <section
      id="slide-6"
      className="w-full h-full flex flex-col justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-12 max-w-7xl 2xl:max-w-[1520px] mx-auto select-none text-[#17263D] relative overflow-hidden"
    >
      {/* 1. Standard Header Tier */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#1E3A8A] text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-slate-200">
            <Compass className="w-3 h-3 text-amber-500" />
            <span>12.000m² Bütünsel Yaşam & Öğrenme Alanı</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#17263D] leading-tight">
            Madenler / Çekmeköy Kampüsümüz.
          </h2>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={INSTITUTION_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-[#17263D] font-bold text-xs transition-colors shrink-0 border border-slate-200"
          >
            <Navigation className="w-3.5 h-3.5 text-[#1E3A8A]" />
            <span>Konum</span>
          </a>
          <Link
            href="/kampusumuz"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors shrink-0 group relative z-20 cursor-pointer"
          >
            <span>Tüm Tesisler</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. Standard Main Stage Tier (Fixed Height Frame with Navigation) */}
      <div className="flex-1 min-h-0 w-full py-1.5 flex flex-col justify-between gap-2.5">
        {/* Facility Selector Bar */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2 shrink-0">
          {FACILITIES.slice(0, 8).map((fac, idx) => {
            const isSelected = selectedFacilityIndex === idx;
            return (
              <button
                key={fac.id}
                type="button"
                onClick={() => setSelectedFacilityIndex(idx)}
                className={`py-1.5 px-2 rounded-xl text-center text-xs font-bold transition-all border cursor-pointer relative z-20 pointer-events-auto ${
                  isSelected
                    ? "bg-[#17263D] text-white border-[#17263D] shadow-md scale-102"
                    : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                <div className="truncate text-[11px] sm:text-xs">{fac.name.split(" ")[0]}</div>
                <div className={`text-[9px] truncate ${isSelected ? "text-amber-300" : "text-slate-400"}`}>
                  {fac.category.split(" ")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Major Facility Feature Canvas */}
        <div className="luxury-card rounded-3xl border border-slate-200/80 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 bg-white flex-1 min-h-0">
          {/* Main Photo Showcase */}
          <div className="lg:col-span-7 relative h-full min-h-[220px] group overflow-hidden bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFacility.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentFacility.image}
                  alt={currentFacility.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* Overlay Chips */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#17263D] text-[11px] font-bold shadow-sm">
                {currentFacility.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
                Kapasite: {currentFacility.capacity}
              </span>
            </div>

            <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-4 z-10 text-white space-y-0.5">
              <h3 className="text-base sm:text-2xl font-extrabold">
                {currentFacility.name}
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm max-w-xl line-clamp-1">
                {currentFacility.description}
              </p>
            </div>
          </div>

          {/* Side Info & Highlights Panel */}
          <div className="lg:col-span-5 p-4 sm:p-5 lg:p-6 flex flex-col justify-between space-y-2.5 bg-white">
            <div className="space-y-2">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#1E3A8A] font-bold">
                  FİZİKİ STANDARTLAR
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#17263D]">
                  {currentFacility.name}
                </h4>
              </div>

              {/* Highlights List */}
              <div className="space-y-1.5">
                {currentFacility.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => openAdmission("Kampüs Ziyareti")}
                className="sheen-btn w-full py-2 px-4 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer relative z-20 pointer-events-auto"
              >
                <span>Kampüs Turu Randevusu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Standard Grounding Bottom Tier */}
      <div className="pt-2 sm:pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="font-semibold text-slate-700">Tesis Özellikleri:</span>
          <span>12.000m² Kapalı & Açık Alan</span>
          <span className="text-slate-300">•</span>
          <span>Yarı Olimpik Havuz</span>
          <span className="text-slate-300">•</span>
          <span>STEM & Robotik Ar-Ge</span>
          <span className="text-slate-300">•</span>
          <span>Akustik Oditoryum</span>
        </div>
        <Link
          href="/kampusumuz"
          className="text-[11px] sm:text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Kampüs Galerisi & Sanal Tur</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
