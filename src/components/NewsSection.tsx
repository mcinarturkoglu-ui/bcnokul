"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import { NEWS_ITEMS } from "@/data/bcnData";

export default function NewsSection() {
  const topNews = NEWS_ITEMS.slice(0, 3);

  return (
    <section className="w-full h-full flex flex-col justify-between bg-white text-[#17263D] px-5 sm:px-8 lg:px-12 py-5 sm:py-7 overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#C59B27] uppercase flex items-center gap-1.5 mb-1">
            <Newspaper className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Gündem & Paylaşımlar</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#17263D]">
            Haberler ve Duyurular.
          </h2>
        </div>

        <Link
          href="/haberler-ve-duyurular"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer"
        >
          <span>Tüm Duyuru ve Haberler</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3 Editorial News Cards Stage */}
      <div className="flex-1 min-h-0 w-full max-w-7xl 2xl:max-w-[1520px] mx-auto my-3 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch">
        {topNews.map((news, idx) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link
              href="/haberler-ve-duyurular"
              className="group flex flex-col justify-between h-full bg-slate-50/70 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#1E3A8A]/40 hover:shadow-xl transition-all duration-300 p-4 sm:p-5 space-y-3"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#17263D] shadow-sm">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between space-y-1.5">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Calendar className="w-3 h-3 text-[#C59B27]" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors leading-snug line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] group-hover:text-[#17263D] transition-colors">
                  <span>Haberi Oku</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Grounding Bottom Line */}
      <div className="shrink-0 text-center text-[11px] text-slate-500 py-1">
        Okulumuzdaki akademik başarılar, etkinlikler ve öğrenci projeleri güncel olarak paylaşılır
      </div>
    </section>
  );
}
