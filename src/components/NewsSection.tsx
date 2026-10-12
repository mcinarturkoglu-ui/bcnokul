"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import { NEWS_ITEMS } from "@/data/bcnData";

export default function NewsSection() {
  const topNews = NEWS_ITEMS.slice(0, 3);

  return (
    <section
      id="slide-8"
      className="w-full h-full flex flex-col justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-12 max-w-7xl 2xl:max-w-[1520px] mx-auto select-none text-[#17263D] relative overflow-hidden"
    >
      {/* 1. Standard Header Tier */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#1E3A8A] text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-slate-200">
            <Newspaper className="w-3 h-3 text-amber-500" />
            <span>Gündem & Başarı Hikayeleri</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#17263D] leading-tight">
            Haberler ve Duyurular.
          </h2>
        </div>

        <Link
          href="/haberler-ve-duyurular"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors shrink-0 group relative z-20 cursor-pointer"
        >
          <span>Tüm Haber Arşivi</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 2. Standard Main Stage Tier (Fixed Height 3-Column Editorial News Cards) */}
      <div className="flex-1 min-h-0 w-full py-1.5 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
        {topNews.map((news, idx) => (
          <Link
            key={news.id}
            href="/haberler-ve-duyurular"
            className="luxury-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-slate-200/80 hover:border-amber-400/60 shadow-xl bg-white transition-all duration-300 cursor-pointer"
          >
            {/* Image Canvas */}
            <div className="relative flex-1 min-h-[180px] overflow-hidden bg-slate-900">
              <Image
                src={news.image}
                alt={news.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold shadow-md ${
                    idx === 0
                      ? "bg-amber-500 text-white"
                      : "bg-white/95 text-[#17263D] backdrop-blur-md"
                  }`}
                >
                  {news.category}
                </span>
              </div>

              {/* Date Chip & Title */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                <div className="flex items-center gap-1 text-[11px] text-amber-300 font-medium">
                  <Calendar className="w-3 h-3" />
                  <span>{news.date}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold leading-snug line-clamp-2 text-white">
                  {news.title}
                </h3>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-3.5 sm:p-4 bg-white space-y-2 shrink-0 border-t border-slate-100 flex flex-col justify-between">
              <p className="text-slate-600 text-[11px] sm:text-xs line-clamp-2 leading-relaxed">
                {news.summary}
              </p>

              <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1E3A8A] group-hover:text-amber-600 transition-colors">
                <span>Haberi Oku</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 3. Standard Grounding Bottom Tier */}
      <div className="pt-2 sm:pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="font-semibold text-slate-700">Duyuru Hattı:</span>
          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            2026-2027 Erken Kayıt Dönemi
          </span>
          <span className="text-slate-300">•</span>
          <span>Bursluluk Sınavı Başvuruları</span>
          <span className="text-slate-300">•</span>
          <span>TRT World Belgeseli</span>
        </div>
        <Link
          href="/haberler-ve-duyurular"
          className="text-[11px] sm:text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Tüm Haber & Basın Bültenleri</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
