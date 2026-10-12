"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, Sparkles, Brain, Cpu, Languages, Compass, Users2 } from "lucide-react";

const APPROACH_PILLARS = [
  {
    number: "01",
    shortTitle: "Zihinsel Disiplin",
    title: "Akademik Mükemmeliyet & Zihinsel Disiplin",
    tagline: "Ezber kalıpları değil; sorgulayan ve analiz eden rasyonel zihin inşası.",
    highlights: [
      { title: "Matematiksel Düşünce", desc: "Pratik problem çözme yetkinliği" },
      { title: "Haftalık Veri Analitiği", desc: "Öğrenci kazanım takibi ve birebir geri bildirim" },
      { title: "LGS & YKS Güvencesi", desc: "Bireye özgü akademik çalışma programı" }
    ],
    image: "/images/bcn/classroom-interactive.jpg",
    metric: "%100",
    metricLabel: "Bireysel Akademik Takip",
    icon: Brain
  },
  {
    number: "02",
    shortTitle: "STEM & Yapay Zekâ",
    title: "Yapay Zekâ & İleri STEM Laboratuvarları",
    tagline: "Teknolojiyi yalnızca tüketen değil; üreten, kodlayan ve yöneten nesiller.",
    highlights: [
      { title: "Dünya STEM Şampiyonu", desc: "4 Dünya Derecesi & 23 madalya kazandıran Ar-Ge" },
      { title: "FLL Robotik Şampiyonluğu", desc: "First Lego League Türkiye birincisi olan takım" },
      { title: "Yapay Zekâ Entegrasyonu", desc: "Algoritmik düşünce ve makine öğrenimi temelleri" }
    ],
    image: "/images/bcn/stem-lab.jpg",
    metric: "4 Dünya",
    metricLabel: "Olimpiyat Şampiyonluğu",
    icon: Cpu
  },
  {
    number: "03",
    shortTitle: "MOXO Dikkat Modeli",
    title: "Kişiselleştirilmiş Öğrenme & MOXO Modeli",
    tagline: "Her çocuğun öğrenme hızı ve dikkat profili parmak izi kadar benzersizdir.",
    highlights: [
      { title: "Bilimsel Dikkat Analizi", desc: "Nörobilimsel MOXO performans ölçümü" },
      { title: "Bireyselleştirilmiş Rota", desc: "Öğrencinin güçlü yönlerine göre özel plan" },
      { title: "1:8 Mentorluk Oranı", desc: "Rehberlik ve akademik mentörlerin birebir takibi" }
    ],
    image: "/images/bcn/library-resource.jpg",
    metric: "1 : 8",
    metricLabel: "Mentorluk & Rehberlik Oranı",
    icon: Compass
  },
  {
    number: "04",
    shortTitle: "Çift Dilli Yaşam",
    title: "Çift Dilli Yaşayan Ekosistem (İngilizce & Almanca)",
    tagline: "Yabancı dili bir ders değil, doğal yaşamın iletişim dili olarak edinme.",
    highlights: [
      { title: "Doğal Dil Edinimi (Immersion)", desc: "Anaokulundan itibaren çift dilli kampüs" },
      { title: "Küresel Münazara (MUN)", desc: "Model United Nations İngilizce delegasyonu" },
      { title: "İkinci Yabancı Dil: Almanca", desc: "Akademik yetkinlikte çift dilli diploma" }
    ],
    image: "/images/bcn/conference-hall.jpg",
    metric: "2 Dil",
    metricLabel: "Uluslararası Akademik Yeterlilik",
    icon: Languages
  },
  {
    number: "05",
    shortTitle: "Ebeveyn Akademisi",
    title: "BCN Ebeveyn Akademisi & Bütünsel Ortaklık",
    tagline: "Eğitim okul duvarlarında bitmez; aileyle kurulan rasyonel ortaklıkla büyür.",
    highlights: [
      { title: "Bilimsel Veli Seminerleri", desc: "Duygu onayı ve güvenli bağlanma atölyeleri" },
      { title: "Şeffaf İletişim Portalı", desc: "Öğrenci gelişiminin anlık veli istişaresi" },
      { title: "Yale RULER Aile Modülü", desc: "Evde ve okulda ortak duygusal zeka dili" }
    ],
    image: "/images/bcn/campus-atrium.jpg",
    metric: "360°",
    metricLabel: "Bütünsel Okul-Aile İş Birliği",
    icon: Users2
  }
];

export default function ApproachSection() {
  const [selectedPillar, setSelectedPillar] = useState(0);
  const { openAdmission } = useModal();
  const current = APPROACH_PILLARS[selectedPillar];

  return (
    <section
      id="slide-4"
      className="w-full h-full flex flex-col justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-12 max-w-7xl 2xl:max-w-[1520px] mx-auto select-none text-[#17263D] relative overflow-hidden"
    >
      {/* 1. Standard Header Tier */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#1E3A8A] text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-slate-200">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Çağdaş Akademik Metodoloji</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#17263D] leading-tight">
            BCN Eğitim Yaklaşımı.
          </h2>
        </div>

        <Link
          href="/egitim-modelimiz"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors shrink-0 group relative z-20 cursor-pointer"
        >
          <span>Eğitim Modelimiz Detayları</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 2. Standard Main Stage Tier (Fixed Height Frame with Navigation) */}
      <div className="flex-1 min-h-0 w-full py-1.5 flex flex-col justify-between gap-2.5">
        {/* 5 Pillar Navigation Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-0.5 no-scrollbar shrink-0">
          {APPROACH_PILLARS.map((pillar, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={pillar.number}
                type="button"
                onClick={() => setSelectedPillar(idx)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer relative z-20 pointer-events-auto ${
                  isSelected
                    ? "bg-[#17263D] text-white shadow-md scale-100"
                    : "bg-white text-slate-600 hover:text-[#17263D] hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span className={`font-mono text-[11px] ${isSelected ? "text-amber-400" : "text-slate-400"}`}>
                  {pillar.number}
                </span>
                <span>{pillar.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Major Showcase Card */}
        <div className="luxury-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl border border-slate-200/80 bg-white flex-1 min-h-0">
          {/* Left Visual Area */}
          <div className="lg:col-span-7 relative h-full min-h-[220px] overflow-hidden group bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Metric Floating Ribbon */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <div className="px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md text-[#17263D] shadow-lg flex items-center gap-2 border border-slate-100">
                <span className="text-base sm:text-lg font-black text-[#1E3A8A]">{current.metric}</span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-600">{current.metricLabel}</span>
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-4 z-10 text-white space-y-0.5">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-300 block">
                METODOLOJİ {current.number}
              </span>
              <h3 className="text-base sm:text-2xl font-bold leading-tight">
                {current.title}
              </h3>
            </div>
          </div>

          {/* Right Information Area */}
          <div className="lg:col-span-5 p-4 sm:p-5 lg:p-6 flex flex-col justify-between space-y-2.5 bg-white">
            <div className="space-y-2.5">
              <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed italic border-l-2 border-amber-400 pl-3">
                "{current.tagline}"
              </p>

              {/* 3 Visual Feature Highlights */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Kritik Yetkinlikler
                </div>
                {current.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs"
                  >
                    <div className="w-4 h-4 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </div>
                    <div>
                      <div className="font-bold text-[#17263D]">{item.title}</div>
                      <div className="text-[11px] text-slate-500 leading-snug">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => openAdmission()}
                className="w-full sm:w-auto flex-1 py-2 px-4 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer relative z-20 pointer-events-auto"
              >
                <span>Akademik Danışmanlık Alın</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Standard Grounding Bottom Tier */}
      <div className="pt-2 sm:pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="font-semibold text-slate-700">Metodoloji:</span>
          <span>Zihinsel Disiplin</span>
          <span className="text-slate-300">•</span>
          <span>Dünya STEM Şampiyonluğu</span>
          <span className="text-slate-300">•</span>
          <span>MOXO Dikkat Testi</span>
          <span className="text-slate-300">•</span>
          <span>Immersion Çift Dil</span>
        </div>
        <Link
          href="/egitim-modelimiz"
          className="text-[11px] sm:text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Metodoloji Kılavuzunu İncele</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
