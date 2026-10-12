"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Sparkles, Brain, Award, Languages } from "lucide-react";
import { FOUNDER_INFO } from "@/data/bcnData";

export default function WelcomeSection() {
  return (
    <section
      id="slide-2"
      className="w-full h-full flex flex-col justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-12 max-w-7xl 2xl:max-w-[1520px] mx-auto select-none text-[#17263D] relative overflow-hidden"
    >
      {/* 1. Standard Header Tier */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-3"
      >
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#1E3A8A] text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-slate-200">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Eğitim Felsefemiz & Kurumsal Vizyon</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#17263D] leading-tight">
            Bir <span className="text-[#1E3A8A]">Zihinsel Disiplin</span> İnşası.
          </h2>
        </div>

        <Link
          href="/lider-ekibimiz"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors shrink-0 group relative z-20 cursor-pointer"
        >
          <span>Lider Kadromuz (14 Yönetici)</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* 2. Standard Main Stage Tier (Fixed Height Frame) */}
      <div className="flex-1 min-h-0 w-full py-2 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
        {/* Left: Prominent Authentic Photography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 relative h-full min-h-[260px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group"
        >
          <Image
            src="/images/bcn/classroom-modern.jpg"
            alt="BCN Uluslararası Sınıf Ortamı"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded text-amber-300 inline-block">
              Sorgulayıcı Öğrenme Alanları
            </span>
            <h3 className="text-base sm:text-2xl font-bold">
              Merakı Dünya Standartlarında Vizyona Dönüştüren Sınıflar
            </h3>
          </div>

          {/* Overlapping Floating Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-2.5 z-10 pointer-events-none">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/50">
              <Brain className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-[#17263D]">Rasyonel Zihin</div>
              <div className="text-slate-500 text-[10px]">Analitik akıl ve karakter dengesi</div>
            </div>
          </div>
        </motion.div>

        {/* Right: Founder Quote Card & Core Visual Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col justify-between gap-3"
        >
          {/* Founder Card */}
          <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:border-amber-400/50 hover:shadow-xl transition-all duration-300 relative space-y-2.5 group flex-1 flex flex-col justify-between">
            <Quote className="w-7 h-7 text-amber-400/30 absolute top-4 right-4 group-hover:text-amber-400/60 transition-colors" />

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-wider block">
                KURUCU MANİFESTOSU
              </span>
              <p className="text-xs sm:text-sm text-slate-700 font-medium italic leading-relaxed pr-5">
                "{FOUNDER_INFO.quote}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400/70 shadow-md bg-white shrink-0">
                  <Image
                    src="/images/bcn/founder-adem-bican.png"
                    alt="Adem Bican - Kurucu"
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-[#17263D] text-xs sm:text-sm">
                    {FOUNDER_INFO.name}
                  </div>
                  <div className="text-[10px] font-semibold text-[#1E3A8A]">
                    {FOUNDER_INFO.title}
                  </div>
                </div>
              </div>

              <Link
                href="/lider-ekibimiz"
                className="text-[11px] font-bold text-[#1E3A8A] hover:underline flex items-center gap-1 shrink-0 relative z-20 cursor-pointer pointer-events-auto"
              >
                <span>14 Yönetici</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 3 Visual Pillar Cards */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center space-y-1 hover:border-blue-400/50 transition-colors">
              <div className="w-7 h-7 mx-auto rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Brain className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-bold text-[#17263D]">Rasyonel Akıl</div>
              <div className="text-[9px] text-slate-500">Matematiksel Düşünce</div>
            </div>

            <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center space-y-1 hover:border-amber-400/50 transition-colors">
              <div className="w-7 h-7 mx-auto rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-bold text-[#17263D]">Yale RULER</div>
              <div className="text-[9px] text-slate-500">Duygusal Zeka</div>
            </div>

            <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center space-y-1 hover:border-emerald-400/50 transition-colors">
              <div className="w-7 h-7 mx-auto rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Languages className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-bold text-[#17263D]">Çift Dil</div>
              <div className="text-[9px] text-slate-500">İngilizce & Almanca</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Standard Grounding Bottom Tier */}
      <div className="pt-2 sm:pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="font-semibold text-slate-700">Akademik Temeller:</span>
          <span>12.000m² Çekmeköy Kampüsü</span>
          <span className="text-slate-300">•</span>
          <span>1:8 Mentorluk Oranı</span>
          <span className="text-slate-300">•</span>
          <span>%100 Bireysel Takip</span>
        </div>
        <Link
          href="/egitim-modelimiz"
          className="text-[11px] sm:text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Eğitim Modelimiz Hakkında Daha Fazla</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
