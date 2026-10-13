"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { LEVELS } from "@/data/bcnData";

export default function LevelsSection() {
  const [activeLevelId, setActiveLevelId] = useState(LEVELS[0].id);

  return (
    <section className="w-full h-full flex flex-col justify-between bg-slate-900 text-white px-5 sm:px-8 lg:px-12 py-5 sm:py-7 overflow-hidden">
      {/* Top Header Strip */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#C59B27] uppercase flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3 h-3 text-[#C59B27]" />
            <span>3 Yaştan Üniversiteye Kesintisiz Ekol</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Eğitim Kademelerimiz.
          </h2>
        </div>

        <Link
          href="/kademeler"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 hover:text-white transition-colors group cursor-pointer"
        >
          <span>Tüm Kademeleri Keşfedin</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Interactive Expanding Horizontal Panels (Desktop) */}
      <div className="hidden lg:flex flex-1 min-h-0 w-full max-w-7xl 2xl:max-w-[1520px] mx-auto my-3 gap-3 items-stretch">
        {LEVELS.map((lvl) => {
          const isActive = activeLevelId === lvl.id;

          return (
            <motion.div
              key={lvl.id}
              layout
              onMouseEnter={() => setActiveLevelId(lvl.id)}
              onClick={() => setActiveLevelId(lvl.id)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border ${
                isActive
                  ? "flex-[3] border-[#C59B27]/70 shadow-2xl"
                  : "flex-[0.8] border-white/10 hover:border-white/30 opacity-75 hover:opacity-95"
              }`}
            >
              {/* Full Background Image */}
              <Image
                src={lvl.image}
                alt={lvl.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center scale-102 transition-transform duration-700"
              />

              {/* Dark Gradient Vignette */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-[#0B1524] via-[#0B1524]/40 to-transparent"
                    : "bg-black/65"
                }`}
              />

              {/* Top Age Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider transition-colors ${
                    isActive
                      ? "bg-[#C59B27] text-slate-950 shadow-md"
                      : "bg-white/20 text-white backdrop-blur-md"
                  }`}
                >
                  {lvl.ageGroup}
                </span>
              </div>

              {/* Expanded Active Panel Content */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="absolute bottom-6 left-6 right-6 z-10 space-y-3"
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300 block mb-0.5">
                      {lvl.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {lvl.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-lg leading-relaxed">
                    {lvl.tagline}
                  </p>

                  <div className="pt-1">
                    <Link
                      href={`/kademeler/${lvl.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#17263D] text-xs font-bold hover:bg-amber-300 transition-colors shadow-lg"
                    >
                      <span>Kademeyi İncele</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Compressed Inactive Panel Label (Vertical Text) */}
              {!isActive && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none whitespace-nowrap">
                  <span className="text-xs font-bold text-white tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
                    {lvl.name}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile / Tablet Horizontal Snap View */}
      <div className="flex lg:hidden flex-1 min-h-0 w-full gap-3 overflow-x-auto py-2 snap-x snap-mandatory no-scrollbar">
        {LEVELS.map((lvl) => (
          <div
            key={lvl.id}
            className="snap-center shrink-0 w-[78vw] sm:w-[320px] h-full relative rounded-2xl overflow-hidden shadow-lg border border-white/10"
          >
            <Image
              src={lvl.image}
              alt={lvl.name}
              fill
              sizes="80vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-black/40 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full bg-[#C59B27] text-slate-900 text-[10px] font-bold">
                {lvl.ageGroup}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 space-y-1.5 text-white">
              <h3 className="text-lg font-bold text-white">{lvl.name}</h3>
              <p className="text-[11px] text-slate-300 line-clamp-2">{lvl.tagline}</p>
              <Link
                href={`/kademeler/${lvl.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 pt-1"
              >
                <span>İncele</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Hint */}
      <div className="shrink-0 text-center text-[11px] text-slate-400 py-1">
        İlgili kademenin detaylarını görmek için panelin üzerine gelin
      </div>
    </section>
  );
}
