"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const PROGRAMS = [
  {
    title: "IB Primary Years Programme (PYP)",
    badge: "IB PYP Aday Okulu",
    description:
      "Sorgulama temelli ve disiplinlerarası temalarla yaşam boyu öğrenen bireyler yetiştiren bakalorya modeli.",
  },
  {
    title: "Kanada Çift Diploma (OSSD)",
    badge: "Ontario Ministry of Education",
    description:
      "Ontario onaylı resmi Kanada lise diploması ile dünya üniversitelerine sınavsız doğrudan kabul avantajı.",
  },
  {
    title: "College Board AP (Advanced Placement)",
    badge: "College Board USA",
    description:
      "Lisede üniversite düzeyinde ders kredilendirme, ders muafiyeti ve saygın vakıf bursları kazanma fırsatı.",
  },
  {
    title: "Model United Nations & Erasmus+",
    badge: "Genç Diplomatlar",
    description:
      "Uluslararası komitelerde İngilizce hitabet, delege deneyimi ve Avrupa Birliği gençlik projeleri.",
  },
];

export default function InternationalProgramsSection() {
  return (
    <section className="w-full flex flex-col bg-[#0B1524] text-white px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 overflow-hidden relative">
      {/* Top Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-sm font-semibold text-[#C59B27] flex items-center gap-1.5 mb-1">
            <span>Küresel Akreditasyon ve Diplomalar</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Uluslararası Programlarımız
          </h2>
        </div>

        <Link
          href="/uluslararasi-programlar"
          className="inline-flex items-center min-h-11 gap-2 text-xs sm:text-sm font-bold text-white hover:text-slate-300 transition-colors group cursor-pointer"
        >
          <span>Tüm Uluslararası Ağımız</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Four text cards: no stock photos standing in for programmes we cannot picture */}
      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1520px] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {PROGRAMS.map((prog) => (
          <Link
            key={prog.title}
            href="/uluslararasi-programlar"
            className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-white/25 hover:bg-white/[0.07] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-xs font-semibold text-slate-300">{prog.badge}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-white transition-colors" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-lg font-bold text-white leading-snug">{prog.title}</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{prog.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
