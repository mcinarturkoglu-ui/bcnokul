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
    <section className="w-full flex flex-col bg-white text-[#17263D] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full">
        <div>
          <span className="text-sm font-semibold text-[var(--bcn-gold-ink)] flex items-center gap-1.5 mb-1">
            <span>Akademik Metodoloji</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#17263D]">
            Eğitimde Üç Temel Sütun
          </h2>
        </div>

        <Link
          href="/egitim-modelimiz"
          className="inline-flex items-center min-h-11 gap-2 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer"
        >
          <span>Eğitim Modelimizin Ayrıntıları</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3 Pillars Grid Stage */}
      <div className="flex-1 min-h-0 w-full max-w-7xl 2xl:max-w-[1520px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch">
        {THREE_PILLARS.map((pillar, idx) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col justify-between rounded-3xl bg-slate-50 border border-slate-200/80 p-5 group hover:shadow-xl hover:border-[#1E3A8A]/40 transition-all duration-300"
          >
            {/* Visual Canvas */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-sm bg-slate-900 shrink-0">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-106 transition-transform duration-700"
              />
            </div>

            {/* Content Details */}
            <div className="space-y-2 pt-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/egitim-modelimiz"
                  className="inline-flex items-center min-h-11 gap-1.5 text-xs font-bold text-[#1E3A8A] group-hover:text-[#17263D] transition-colors"
                >
                  <span>Metodolojiyi İncele</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grounding Bottom Line */}
      <div className="shrink-0 text-center text-xs text-slate-500 py-1">
        Zihinsel disiplin, erken çocukluktan lise mezuniyetine kadar her kademede uygulanır
      </div>
    </section>
  );
}
