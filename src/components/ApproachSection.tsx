"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const THREE_PILLARS = [
  {
    number: "01",
    title: "Zihinsel Disiplin & Rasyonel Akıl",
    description:
      "Ezber kalıpları yerine matematiksel muhakeme, kavramsal sorgulama ve analitik düşünce omurgası inşa ediyoruz.",
    image: "/images/bcn/classroom-interactive.jpg",
  },
  {
    number: "02",
    title: "Çift Dilli Yaşayan Ekosistem",
    description:
      "Erken yaştan itibaren anadil edinimine dayalı daldırma (immersion) modeliyle İngilizce ve Almanca yetkinliği kazandırıyoruz.",
    image: "/images/bcn/conference-hall.jpg",
  },
  {
    number: "03",
    title: "Bilimsel Metodoloji & İleri STEM",
    description:
      "Dünya şampiyonlukları kazandıran araştırma kültürü, robotik laboratuvarları ve yapay zekâ okuryazarlığı sunuyoruz.",
    image: "/images/bcn/stem-lab.jpg",
  },
];

export default function ApproachSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white text-[#17263D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
              Akademik Metodoloji
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263D]">
              Eğitimde Üç Temel Sütun.
            </h2>
          </div>
          <Link
            href="/egitim-modelimiz"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer shrink-0"
          >
            <span>Eğitim Modelimizin Ayrıntıları</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Exactly 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {THREE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col group space-y-5"
            >
              {/* Photo Card */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-md bg-slate-900 border border-slate-100">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-xs font-bold text-[#17263D] shadow-md font-mono">
                    {pillar.number}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
