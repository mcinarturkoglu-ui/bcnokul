"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { NEWS_ITEMS } from "@/data/bcnData";

export default function NewsSection() {
  const topNews = NEWS_ITEMS.slice(0, 3);

  return (
    <section className="w-full py-20 lg:py-28 bg-white text-[#17263D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
              Gündem & Paylaşımlar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263D]">
              Haberler ve Duyurular.
            </h2>
          </div>
          <Link
            href="/haberler-ve-duyurular"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer shrink-0"
          >
            <span>Tüm Duyuru ve Haberler</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Editorial News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topNews.map((news, idx) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href="/haberler-ve-duyurular"
                className="group flex flex-col justify-between h-full bg-slate-50/50 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-300 p-6 space-y-5 block"
              >
                {/* Photo */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#17263D] shadow-sm">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{news.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors leading-snug line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>

                  <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] group-hover:text-[#17263D] transition-colors">
                    <span>Haberi Oku</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
