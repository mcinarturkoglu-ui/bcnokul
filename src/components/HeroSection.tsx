"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  ArrowRight,
  Sparkles,
  Award,
  Globe2,
  GraduationCap,
  Users,
  Compass,
} from "lucide-react";

export default function HeroSection() {
  const { openAdmission } = useModal();

  return (
    <section
      id="slide-1"
      className="w-full h-full flex flex-col justify-between overflow-hidden bg-[#0D1829] text-white relative"
    >
      {/* Background High-Res Genuine Campus Imagery with Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bcn/campus-facade-1.jpg"
          alt="BCN Eğitim Kurumları Çekmeköy Kampüsü"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-subtleZoom opacity-65"
        />
        {/* Editorial Gradients for Crystal-Clear Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1524]/95 via-[#0D1829]/75 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Top Floating Badge Bar */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200"
        >
          <span className="flex items-center gap-1.5 text-amber-300 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            Modern International School
          </span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-slate-300 text-xs">IB PYP Aday Okulu</span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-slate-300 text-xs">Kanada OSSD Çift Diploma</span>
          <span className="text-white/30 hidden md:inline">•</span>
          <span className="hidden md:inline text-slate-300 text-xs">College Board AP</span>
        </motion.div>
      </div>

      {/* Main Hero Headline & Copy with Two-Column Desktop Showcase */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-6 lg:py-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-amber-400 font-mono text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-8 h-px bg-amber-400"></span>
                BCN INTERNATIONAL SCHOOL & COLLEGE
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
                Geleceğin Dünyasına{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
                  Hazır Bireyler.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle / Manifesto - Concise & Impactful */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl"
            >
              Dünya standartlarında akreditasyon, zihinsel disiplin ve sorgulayan rasyonel zihin ekolü.
            </motion.p>

            {/* Prestige CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <button
                type="button"
                onClick={() => openAdmission()}
                className="sheen-btn relative z-20 pointer-events-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-white text-[#17263D] font-bold text-xs sm:text-sm hover:bg-slate-50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform active:scale-95 group cursor-pointer"
              >
                <span>BCN'yi Keşfedin & Randevu Alın</span>
                <ArrowRight className="w-4 h-4 text-[#17263D] group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/kampusumuz"
                className="relative z-20 pointer-events-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Kampüsümüzü Ziyaret Edin</span>
              </Link>
            </motion.div>

            {/* Quick Credibility Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-[11px] sm:text-xs text-slate-300"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Dünya STEM Şampiyonu
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                FLL Robotik Şampiyonu
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Yale RULER & MOXO
              </span>
            </motion.div>
          </div>

          {/* Right Column: Floating Prestige Accreditation Showcase (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block relative"
          >
            {/* Subtle glow background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-60 animate-pulse-glow" />

            <div className="relative animate-float rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold border border-amber-400/30">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      Uluslararası Akreditasyon
                    </div>
                    <div className="text-xs font-extrabold text-white">
                      BCN Global Standartları
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Akredite Ekol
                </span>
              </div>

              {/* Four Pillar Items */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] transition-colors border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs shrink-0">
                      IB
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">IB Primary Years (PYP)</div>
                      <div className="text-[10px] text-slate-300">Sorgulama Temelli İlk Yıllar</div>
                    </div>
                  </div>
                  <span className="text-amber-400 text-xs font-bold">3-12 Yaş</span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] transition-colors border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                      CA
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Kanada Çift Diploma (OSSD)</div>
                      <div className="text-[10px] text-slate-300">Ontario Bakanlığı Onaylı Lise</div>
                    </div>
                  </div>
                  <span className="text-amber-400 text-xs font-bold">Lise</span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] transition-colors border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">
                      AP
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">College Board AP Programı</div>
                      <div className="text-[10px] text-slate-300">İleri Düzey Matematik & Fen</div>
                    </div>
                  </div>
                  <span className="text-amber-400 text-xs font-bold">Global</span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] transition-colors border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs shrink-0">
                      STEM
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Dünya STEM Şampiyonu</div>
                      <div className="text-[10px] text-slate-300">4 Dünya Derecesi & 23 Madalya</div>
                    </div>
                  </div>
                  <span className="text-amber-400 text-xs font-bold">48 Ülke</span>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between text-xs">
                <Link
                  href="/uluslararasi-programlar"
                  className="text-amber-300 hover:text-white font-semibold flex items-center gap-1.5 transition-colors text-[11px]"
                >
                  <span>Tüm Programlar</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/basarilarimiz"
                  className="text-slate-300 hover:text-white font-medium transition-colors text-[11px]"
                >
                  Gurur Tablomuz →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Live Metric Ribbon at Hero Bottom */}
      <div className="relative z-10 w-full bg-[#0B1524]/90 backdrop-blur-md border-t border-white/10 py-3 sm:py-3.5">
        <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0 border border-white/10">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-white tracking-tight">1 : 8</div>
                <div className="text-[10px] sm:text-xs text-slate-400">Öğretmen / Öğrenci</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0 border border-white/10">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-white tracking-tight">4 Dünya</div>
                <div className="text-[10px] sm:text-xs text-slate-400">STEM Olimpiyat Şampiyonu</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 shrink-0 border border-white/10">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-white tracking-tight">8+ Program</div>
                <div className="text-[10px] sm:text-xs text-slate-400">IB, OSSD, AP, MUN</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-purple-400 shrink-0 border border-white/10">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-white tracking-tight">12.000m²</div>
                <div className="text-[10px] sm:text-xs text-slate-400">Çekmeköy Kampüsü</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
