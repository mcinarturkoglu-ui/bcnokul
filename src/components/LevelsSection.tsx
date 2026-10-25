"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LEVELS } from "@/data/bcnData";

const HOVER_INTENT_MS = 80;

// transitions.dev texts reveal: 12px rise, 3px blur, 500ms smooth-out
const REVEAL_LINE = {
  hidden: { opacity: 0, y: 12, filter: "blur(3px)" },
  shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function LevelsSection() {
  const [activeLevelId, setActiveLevelId] = useState(LEVELS[0].id);

  // A passing cursor should not open every panel it crosses: hover waits a beat, click/focus do not
  const intentTimer = useRef<number | null>(null);
  const cancelIntent = () => {
    if (intentTimer.current !== null) window.clearTimeout(intentTimer.current);
    intentTimer.current = null;
  };
  const activateNow = (id: string) => {
    cancelIntent();
    setActiveLevelId(id);
  };
  const activateWithIntent = (id: string) => {
    cancelIntent();
    intentTimer.current = window.setTimeout(() => setActiveLevelId(id), HOVER_INTENT_MS);
  };
  useEffect(() => cancelIntent, []);

  return (
    <section className="w-full flex flex-col bg-[#0B1524] text-white px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Top Header Strip */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-sm font-semibold text-[#C59B27] flex items-center gap-1.5 mb-1">
            <span>3 Yaştan Üniversiteye Kesintisiz Ekol</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Eğitim Kademelerimiz
          </h2>
        </div>

        <Link
          href="/kademeler"
          className="inline-flex items-center min-h-11 gap-2 text-xs sm:text-sm font-bold text-white hover:text-slate-300 transition-colors group cursor-pointer"
        >
          <span>Tüm Kademeleri Keşfedin</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Interactive Expanding Horizontal Panels (Desktop)
          Width tweens via flex-grow only (transitions.dev card resize, smooth-out ease);
          the active panel's copy rises in line by line (texts reveal). */}
      <div className="hidden lg:flex h-[560px] w-full max-w-7xl 2xl:max-w-[1520px] mx-auto mt-8 gap-3 items-stretch">
        {LEVELS.map((lvl) => {
          const isActive = activeLevelId === lvl.id;

          return (
            <div
              key={lvl.id}
              onMouseEnter={() => activateWithIntent(lvl.id)}
              onMouseLeave={cancelIntent}
              onClick={() => activateNow(lvl.id)}
              onFocus={() => activateNow(lvl.id)}
              tabIndex={isActive ? -1 : 0}
              aria-expanded={isActive}
              aria-label={isActive ? undefined : `${lvl.name} kademesini göster`}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-[flex-grow,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                isActive ? "grow-[3] border-white/25 shadow-2xl" : "grow-[0.8] border-white/10 hover:border-white/25"
              }`}
              style={{ flexBasis: 0 }}
            >
              {/* Full Background Image */}
              <Image
                src={lvl.image}
                alt={lvl.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />

              {/* One scrim per state: a reading gradient when open, an even veil when closed */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#0B1524] via-[#0B1524]/40 to-transparent transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`absolute inset-0 bg-[#0B1524] transition-opacity duration-500 ${
                  isActive ? "opacity-0" : "opacity-60 group-hover:opacity-45"
                }`}
              />

              {/* Age pill, active panel only (closed panels show the age under their name) */}
              <div
                className={`absolute top-4 left-4 z-10 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#0B1524]">
                  {lvl.ageGroup}
                </span>
              </div>

              {/* Expanded Active Panel Content */}
              {isActive && (
                <motion.div
                  initial="hidden"
                  animate="shown"
                  variants={{ shown: { transition: { delayChildren: 0.15, staggerChildren: 0.04 } } }}
                  className="absolute bottom-6 left-6 right-6 z-10 space-y-3"
                >
                  <div>
                    <motion.span variants={REVEAL_LINE} className="text-xs font-semibold text-slate-300 block mb-0.5">
                      {lvl.badge}
                    </motion.span>
                    <motion.h3 variants={REVEAL_LINE} className="text-2xl sm:text-3xl font-extrabold text-white">
                      {lvl.name}
                    </motion.h3>
                  </div>

                  <motion.p variants={REVEAL_LINE} className="text-sm text-slate-200 line-clamp-2 max-w-lg leading-relaxed">
                    {lvl.tagline}
                  </motion.p>

                  <motion.div variants={REVEAL_LINE} className="pt-1">
                    <Link
                      href={`/kademeler/${lvl.slug}`}
                      className="inline-flex items-center gap-2 min-h-10 px-4 rounded-xl bg-white text-[#0B1524] text-sm font-semibold hover:bg-slate-100 transition-colors shadow-lg"
                    >
                      <span>Kademeyi İncele</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </motion.div>
                </motion.div>
              )}

              {/* Closed panel label: leaves fast, returns once the panel has narrowed */}
              <div
                aria-hidden={isActive}
                className={`absolute bottom-5 left-5 right-5 z-10 pointer-events-none transition-opacity ${
                  isActive ? "opacity-0 duration-150" : "opacity-100 duration-300 delay-[250ms]"
                }`}
              >
                <span className="block text-base font-semibold leading-snug text-white">{lvl.name}</span>
                <span className="block mt-0.5 text-xs text-slate-300">{lvl.ageGroup}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile / Tablet Horizontal Snap View */}
      <div className="flex lg:hidden h-[440px] mt-8 w-full gap-3 overflow-x-auto py-2 snap-x snap-mandatory no-scrollbar">
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
              <span className="px-2.5 py-0.5 rounded-full bg-white text-[#0B1524] text-xs font-semibold">
                {lvl.ageGroup}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 space-y-1.5 text-white">
              <h3 className="text-lg font-bold text-white">{lvl.name}</h3>
              <p className="text-xs text-slate-300 line-clamp-2">{lvl.tagline}</p>
              <Link
                href={`/kademeler/${lvl.slug}`}
                className="inline-flex items-center min-h-11 gap-1.5 text-xs font-bold text-white"
              >
                <span>İncele</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
