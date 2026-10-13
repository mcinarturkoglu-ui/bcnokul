"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    title: "IB Primary Years Programme (PYP)",
    badge: "IB PYP Aday Okulu",
    description:
      "Sorgulama temelli ve disiplinlerarası küresel temalarla yaşam boyu öğrenen bireyler yetiştiren erken dönem bakalorya ekolü.",
    image: "/images/bcn/primary-school.jpg",
  },
  {
    title: "Kanada Çift Diploma (OSSD)",
    badge: "Ontario Ministry of Education",
    description:
      "Ontario Eğitim Bakanlığı onaylı resmi Kanada lise diploması ile dünya üniversitelerine doğrudan sınavsız başvuru hakkı.",
    image: "/images/bcn/campus-facade-1.jpg",
  },
  {
    title: "Advanced Placement (AP)",
    badge: "College Board USA",
    description:
      "Üniversite düzeyinde ders tamamlama, kredi saydırma ve yurt içi/dışı seçkin üniversitelerde burs avantajı.",
    image: "/images/bcn/science-lab.jpg",
  },
  {
    title: "Model United Nations & Erasmus+",
    badge: "Genç Diplomatlar",
    description:
      "Uluslararası diplomatik simülasyonlar, akıcı İngilizce savunma ve Avrupa Birliği gençlik projeleri deneyimi.",
    image: "/images/bcn/conference-hall.jpg",
  },
];

export default function InternationalProgramsSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/70 text-[#17263D] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
              Uluslararası Diplomalar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263D]">
              Uluslararası Programlar.
            </h2>
          </div>
          <Link
            href="/uluslararasi-programlar"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer shrink-0"
          >
            <span>Tüm Uluslararası Ağımız</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Clean Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog, idx) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                href="/uluslararasi-programlar"
                className="group flex flex-col justify-between h-full bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300 p-5 space-y-4"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#17263D] shadow-sm">
                      {prog.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-base font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors leading-snug">
                      {prog.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] group-hover:text-[#17263D] transition-colors">
                    <span>Program Detayı</span>
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
