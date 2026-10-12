"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Award, Music } from "lucide-react";

export default function LifeAndAchievementsSection() {
  return (
    <section
      id="slide-7"
      className="w-full h-full flex flex-col justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-12 max-w-7xl 2xl:max-w-[1520px] mx-auto select-none text-[#17263D] relative overflow-hidden"
    >
      {/* 1. Standard Header Tier */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#1E3A8A] text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-slate-200">
            <Trophy className="w-3 h-3 text-amber-500" />
            <span>Dünya & Ulusal Şampiyonluklar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#17263D] leading-tight">
            Yaşam ve Başarılarımız.
          </h2>
        </div>

        <Link
          href="/basarilarimiz"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors shrink-0 group relative z-20 cursor-pointer"
        >
          <span>Gurur Tablosu (Tümü)</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 2. Standard Main Stage Tier (Fixed Height 3-Column Visual Impact Cards) */}
      <div className="flex-1 min-h-0 w-full py-1.5 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
        {/* Card 1: FLL Championship */}
        <div className="luxury-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-slate-200/80 bg-white shadow-xl hover:border-amber-400/50 transition-all duration-300">
          <div className="relative flex-1 min-h-[180px] overflow-hidden bg-slate-900">
            <Image
              src="/images/bcn/fll-trophy-champions.jpg"
              alt="FLL Türkiye Şampiyonu"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
                <Trophy className="w-3 h-3" />
                Türkiye Şampiyonu
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase block">
                ROBOTİK & İNOVASYON
              </span>
              <h3 className="text-sm sm:text-base font-bold leading-snug">
                First Lego League Türkiye Birincisi
              </h3>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-white space-y-2 shrink-0 border-t border-slate-100 flex flex-col justify-between">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-semibold">
                🏆 Ulusal Şampiyon
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                🤖 Otonom Kodlama
              </span>
            </div>
            <p className="text-[11px] text-slate-600 line-clamp-1">
              Rekor puanla Türkiye şampiyonluğu ve dünya temsil hakkı.
            </p>
            <Link
              href="/basarilarimiz"
              className="text-xs font-bold text-[#1E3A8A] flex items-center gap-1 pt-1 group-hover:underline cursor-pointer"
            >
              <span>Başarı Hikayesini İncele</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Card 2: World STEM Olympiad */}
        <div className="luxury-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-slate-200/80 bg-white shadow-xl hover:border-blue-400/50 transition-all duration-300">
          <div className="relative flex-1 min-h-[180px] overflow-hidden bg-slate-900">
            <Image
              src="/images/bcn/stem-lab.jpg"
              alt="Dünya STEM Olimpiyatları"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
                <Award className="w-3 h-3" />
                Dünya Derecesi
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase block">
                KÜRESEL BİLİM
              </span>
              <h3 className="text-sm sm:text-base font-bold leading-snug">
                Dünya STEM Olimpiyatları: 4 Derece
              </h3>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-white space-y-2 shrink-0 border-t border-slate-100 flex flex-col justify-between">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 font-semibold">
                🥇 23 Madalya
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                🌍 48 Ülke Arasında
              </span>
            </div>
            <p className="text-[11px] text-slate-600 line-clamp-1">
              Biyomimikri, yapay zekâ ve yenilenebilir enerji finalleri.
            </p>
            <Link
              href="/basarilarimiz"
              className="text-xs font-bold text-[#1E3A8A] flex items-center gap-1 pt-1 group-hover:underline cursor-pointer"
            >
              <span>Madalya Tablosunu Gör</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Card 3: Sports, Arts & Holistic Life */}
        <div className="luxury-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-slate-200/80 bg-white shadow-xl hover:border-emerald-400/50 transition-all duration-300">
          <div className="relative flex-1 min-h-[180px] overflow-hidden bg-slate-900">
            <Image
              src="/images/bcn/sports-facility.jpg"
              alt="Spor ve Sanat Ekosistemi"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
                <Music className="w-3 h-3" />
                Bütünsel Gelişim
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
              <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase block">
                KÜLTÜR & SPOR
              </span>
              <h3 className="text-sm sm:text-base font-bold leading-snug">
                Sanat, Yarı Olimpik Spor & Müzik
              </h3>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-white space-y-2 shrink-0 border-t border-slate-100 flex flex-col justify-between">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-semibold">
                🏊 Yüzme & Basketbol
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                🎭 Görsel Sanatlar
              </span>
            </div>
            <p className="text-[11px] text-slate-600 line-clamp-1">
              Öğrencilerin fiziksel ve estetik potansiyelini zirveye taşıyan ekosistem.
            </p>
            <Link
              href="/ogrenci-yasami"
              className="text-xs font-bold text-[#1E3A8A] flex items-center gap-1 pt-1 group-hover:underline cursor-pointer"
            >
              <span>Kulüp ve Yaşamı Keşfet</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Standard Grounding Bottom Tier */}
      <div className="pt-2 sm:pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="font-semibold text-slate-700">Gurur Tablosu:</span>
          <span>FLL Türkiye Şampiyonu</span>
          <span className="text-slate-300">•</span>
          <span>4 Dünya STEM Derecesi</span>
          <span className="text-slate-300">•</span>
          <span>23 Madalya</span>
          <span className="text-slate-300">•</span>
          <span>Yale RULER Onayı</span>
        </div>
        <Link
          href="/basarilarimiz"
          className="text-[11px] sm:text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Tüm Başarı Arşivini İncele</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
