"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FACILITIES } from "@/data/bcnData";

export default function CampusSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const featuredFacilities = FACILITIES.slice(0, 5);
  const current = featuredFacilities[selectedIdx] || featuredFacilities[0];

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
      <div className="w-full max-w-7xl 2xl:max-w-[1520px] mx-auto mt-8 lg:h-[540px] grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
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
                className="object-cover object-center group-hover:scale-104 transition-transform duration-700"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

          {/* Floating Campus Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#17263D] text-xs font-bold shadow-md inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>{current.category}</span>
            </span>
          </div>

          {/* Overlaid Facility Content */}
          <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5 z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {current.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-lg leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>

        {/* Right: Interactive Facility Selector Tabs */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-3">
          {featuredFacilities.map((fac, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={fac.id}
                type="button"
                onMouseEnter={() => setSelectedIdx(idx)}
                onClick={() => setSelectedIdx(idx)}
                className={`p-3 sm:p-3.5 rounded-2xl flex items-center justify-between text-left transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? "bg-[#17263D] text-white border-[#17263D] shadow-lg scale-101"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80"
                }`}
              >
                <div className="space-y-0.5 pr-2">
                  <div className="text-xs sm:text-sm font-bold flex items-center gap-2">
                    <span>{fac.name}</span>
                  </div>
                  <div
                    className={`text-xs line-clamp-1 ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {fac.description}
                  </div>
                </div>

                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    isSelected
                      ? "bg-amber-400 text-slate-900"
                      : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {fac.capacity}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grounding Bottom Line */}
      <div className="shrink-0 text-center text-xs text-slate-500 py-1">
        Çekmeköy Metro İstasyonu&apos;na yürüme mesafesinde, çift hostesli güvenli servis filosu
      </div>
    </section>
  );
}
