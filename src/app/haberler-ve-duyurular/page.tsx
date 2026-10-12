"use client";

import React, { useState } from "react";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import { NEWS_ITEMS, NewsItem } from "@/data/bcnData";
import { Calendar, Clock, Newspaper, ArrowRight, X, User } from "lucide-react";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [activeNewsModal, setActiveNewsModal] = useState<NewsItem | null>(null);

  const categories = ["Tümü", "Akademik Başarı", "Robotik & Teknoloji", "Medya & Proje", "Kayıt & Kabul"];

  const filteredNews =
    selectedCategory === "Tümü"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((n) => n.category === selectedCategory);

  return (
    <>
      <SubpageHero
        badge="Kurumsal İletişim"
        title="Haberler ve Duyurular"
        subtitle="BCN Eğitim Kurumları'ndan en güncel akademik haberler, öğrenci başarıları ve etkinlik bültenleri."
        bgImage="/images/bcn/press-hurriyet.jpg"
        breadcrumbs={[{ label: "Haberler ve Duyurular" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#17263D] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <div
                key={news.id}
                onClick={() => setActiveNewsModal(news)}
                className="bg-[#F7F8FA] rounded-3xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#17263D] text-xs font-bold">
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-500" />
                        {news.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {news.readTime}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#1E3A8A]">
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {activeNewsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveNewsModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                {activeNewsModal.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263D] leading-tight">
                {activeNewsModal.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>{activeNewsModal.date}</span>
                <span>•</span>
                <span>{activeNewsModal.author}</span>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
              <Image
                src={activeNewsModal.image}
                alt={activeNewsModal.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              {activeNewsModal.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveNewsModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
