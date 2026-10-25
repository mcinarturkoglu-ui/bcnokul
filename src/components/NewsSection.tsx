"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS_ITEMS } from "@/data/bcnData";

export default function NewsSection() {
  const topNews = NEWS_ITEMS.slice(0, 3);

  return (
    <section className="w-full flex flex-col bg-white text-[#17263D] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-sm font-semibold text-[var(--bcn-gold-ink)] flex items-center gap-1.5 mb-1">
            <span>Gündem & Paylaşımlar</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#17263D]">
            Haberler ve Duyurular
          </h2>
        </div>

        <Link
          href="/haberler-ve-duyurular"
          className="inline-flex items-center min-h-11 gap-2 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer"
        >
          <span>Tüm Duyuru ve Haberler</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Dated list: news reads as a record of events, distinct from the achievement cards above */}
      <ul className="w-full max-w-7xl 2xl:max-w-[1520px] mx-auto mt-8 divide-y divide-slate-200 border-y border-slate-200">
        {topNews.map((news) => (
          <li key={news.id}>
            <Link
              href="/haberler-ve-duyurular"
              className="group grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] rounded-lg"
            >
              <div className="text-sm text-slate-500">
                <time>{news.date}</time>
                <span className="block mt-0.5 font-medium text-slate-600">{news.category}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#17263D] leading-snug group-hover:text-[#1E3A8A] transition-colors">
                  {news.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">{news.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
