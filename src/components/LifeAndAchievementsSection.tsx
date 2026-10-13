"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
    title: "TRT World Küresel Genç Gazeteciler Projesi",
    category: "Medya & Diplomasi",
    description:
      "Lise öğrencilerimiz, çevre krizleri ve yapay zekâ etiği üzerine İngilizce hazırladıkları araştırma belgeseliyle TRT World canlı yayınında yer aldı.",
    image: "/images/bcn/press-hurriyet.jpg",
  },
];

export default function LifeAndAchievementsSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/70 text-[#17263D] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
              Gurur Tablosu
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263D]">
              Öne Çıkan Başarılarımız.
            </h2>
          </div>
          <Link
            href="/basarilarimiz"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer shrink-0"
          >
            <span>Tüm Başarı Hikayelerini Görün</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Prestigious Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THREE_ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href="/basarilarimiz"
                className="group flex flex-col justify-between h-full bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300 p-6 space-y-5 block"
              >
                {/* Photo Display */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                  <Image
                    src={ach.image}
                    alt={ach.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#17263D] shadow-sm">
                      {ach.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors leading-snug">
                      {ach.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>

                  <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] group-hover:text-[#17263D] transition-colors">
                    <span>Detayları İncele</span>
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
