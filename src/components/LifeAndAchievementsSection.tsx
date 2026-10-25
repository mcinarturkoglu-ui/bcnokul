"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section className="w-full flex flex-col bg-[#0B1524] text-white px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-sm font-semibold text-[#C59B27] flex items-center gap-1.5 mb-1">
            <span>Dünya & Ulusal Şampiyonluklar</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Yaşam ve Başarılarımız
          </h2>
        </div>

        <Link
          href="/basarilarimiz"
          className="inline-flex items-center min-h-11 gap-2 text-xs sm:text-sm font-bold text-white hover:text-slate-300 transition-colors group cursor-pointer"
        >
          <span>Tüm Başarı Arşivini Görün</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3 Prominent Achievement Cards Stage */}
      <div className="flex-1 min-h-0 w-full max-w-7xl 2xl:max-w-[1520px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch">
        {THREE_ACHIEVEMENTS.map((ach) => (
          <Link
            key={ach.title}
            href="/basarilarimiz"
            className="group flex flex-col h-full rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07] transition-colors p-4 sm:p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 shrink-0">
              <Image
                src={ach.image}
                alt={ach.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-103 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-white text-[#0B1524] text-xs font-semibold">
                  {ach.category}
                </span>
              </div>
            </div>

            <h3 className="mt-4 text-lg font-bold text-white leading-snug">{ach.title}</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{ach.description}</p>
            <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
              Detayları İncele
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>

    </section>
  );
}
