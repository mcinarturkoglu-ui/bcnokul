"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Award, Sparkles } from "lucide-react";

const THREE_ACHIEVEMENTS = [
  {
    title: "Dünya STEM Olimpiyatları Şampiyonluğu",
    category: "Küresel Derece",
    description:
      "48 ülkeden 1.200'ü aşkın okulun yarıştığı finallerde öğrencilerimiz 4 Dünya Derecesi ve 23 Madalya ile genel klasman şampiyonu oldu.",
    image: "/images/bcn/fll-trophy-champions.jpg",
  },
  {
    title: "First Lego League Türkiye Birincisi",
    category: "Robotik & STEM",
    description:
      "BCN Robotics takımı, karmaşık otonom görevleri rekor puanla tamamlayarak FLL Türkiye ve Marmara Şampiyonluğu kupalarını kaldırdı.",
    image: "/images/bcn/fll-robotics-team.jpg",
  },
  {
    title: "TRT World Küresel Genç Gazeteciler",
    category: "Medya & Diplomasi",
    description:
      "Lise öğrencilerimiz, çevre krizleri ve yapay zekâ etiği üzerine İngilizce hazırladıkları araştırma belgeseliyle TRT World canlı yayınında yer aldı.",
    image: "/images/bcn/press-hurriyet.jpg",
  },
];

export default function LifeAndAchievementsSection() {
  return (
    <section className="w-full h-full flex flex-col justify-between bg-slate-900 text-white px-5 sm:px-8 lg:px-12 py-5 sm:py-7 overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#C59B27] uppercase flex items-center gap-1.5 mb-1">
            <Trophy className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Dünya & Ulusal Şampiyonluklar</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Yaşam ve Başarılarımız.
          </h2>
        </div>

        <Link
          href="/basarilarimiz"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 hover:text-white transition-colors group cursor-pointer"
        >
          <span>Tüm Başarı Arşivini Görün</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3 Prominent Achievement Cards Stage */}
      <div className="flex-1 min-h-0 w-full max-w-7xl 2xl:max-w-[1520px] mx-auto my-3 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch">
        {THREE_ACHIEVEMENTS.map((ach, idx) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link
              href="/basarilarimiz"
              className="group flex flex-col justify-between h-full bg-white/[0.05] hover:bg-white/[0.1] rounded-3xl overflow-hidden border border-white/10 hover:border-[#C59B27]/60 transition-all duration-300 p-4 sm:p-5 space-y-3"
            >
              {/* Photo Canvas */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 shrink-0">
                <Image
                  src={ach.image}
                  alt={ach.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C59B27] text-slate-950 text-[10px] font-bold shadow-md">
                    {ach.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-1 flex flex-col justify-between space-y-1.5 text-white">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {ach.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 group-hover:text-white transition-colors">
                  <span>Detayları İncele</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Grounding Bottom Line */}
      <div className="shrink-0 text-center text-[11px] text-slate-400 py-1">
        Bilim, robotik, sanat ve diplomasi alanlarında 23+ uluslararası ve ulusal madalya
      </div>
    </section>
  );
}
