"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

const PROGRAMS = [
  {
    title: "IB Primary Years Programme (PYP)",
    badge: "IB PYP Aday Okulu",
    description:
      "Sorgulama temelli ve disiplinlerarası temalarla yaşam boyu öğrenen bireyler yetiştiren bakalorya modeli.",
    image: "/images/bcn/primary-school.jpg",
  },
  {
    title: "Kanada Çift Diploma (OSSD)",
    badge: "Ontario Ministry of Education",
    description:
      "Ontario onaylı resmi Kanada lise diploması ile dünya üniversitelerine sınavsız doğrudan kabul avantajı.",
    image: "/images/bcn/campus-facade-1.jpg",
  },
  {
    title: "College Board AP (Advanced Placement)",
    badge: "College Board USA",
    description:
      "Lisede üniversite düzeyinde ders kredilendirme, ders muafiyeti ve saygın vakıf bursları kazanma fırsatı.",
    image: "/images/bcn/science-lab.jpg",
  },
  {
    title: "Model United Nations & Erasmus+",
    badge: "Genç Diplomatlar",
    description:
      "Uluslararası komitelerde İngilizce hitabet, delege deneyimi ve Avrupa Birliği gençlik projeleri.",
    image: "/images/bcn/conference-hall.jpg",
  },
];

export default function InternationalProgramsSection() {
  return (
    <section className="w-full h-full flex flex-col justify-between bg-[#0B1524] text-white px-5 sm:px-8 lg:px-12 py-5 sm:py-7 overflow-hidden relative">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1E3A8A]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#C59B27] uppercase flex items-center gap-1.5 mb-1">
            <Globe className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Küresel Akreditasyon ve Diplomalar</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Uluslararası Programlarımız.
          </h2>
        </div>

        <Link
          href="/uluslararasi-programlar"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 hover:text-white transition-colors group cursor-pointer"
        >
          <span>Tüm Uluslararası Ağımız</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 4 Frosted Glass Cards Stage */}
      <div className="relative z-10 flex-1 min-h-0 w-full max-w-7xl 2xl:max-w-[1520px] mx-auto my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
        {PROGRAMS.map((prog, idx) => (
          <motion.div
            key={prog.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <Link
              href="/uluslararasi-programlar"
              className="group flex flex-col justify-between h-full bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#C59B27]/60 transition-all duration-300 p-4 sm:p-5 space-y-3"
            >
              {/* Image Preview Canvas */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#17263D]/90 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-white/10">
                    {prog.badge}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-1 flex flex-col justify-between space-y-1.5 text-white">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {prog.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 group-hover:text-white transition-colors">
                  <span>Programı İncele</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Grounding Bottom Line */}
      <div className="relative z-10 shrink-0 text-center text-[11px] text-slate-400 py-1">
        Kanada OSSD ve College Board AP dersleri ile doğrudan dünya üniversitelerine geçiş imkânı
      </div>
    </section>
  );
}
