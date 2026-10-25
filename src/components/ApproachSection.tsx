"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const THREE_PILLARS = [
  {
    number: "01",
    title: "Zihinsel Disiplin & Rasyonel Akıl",
    description:
      "Ezber kalıpları yerine matematiksel muhakeme, kavramsal sorgulama ve analitik düşünce omurgası inşa ediyoruz.",
    image: "/images/bcn/fll-robotics-team.jpg",
    imageAlt: "Öğrenciler FIRST LEGO League turnuvasında robot düzeneği üzerinde çalışıyor",
  },
  {
    number: "02",
    title: "Çift Dilli Yaşayan Ekosistem",
    description:
      "Erken yaştan itibaren anadil edinimine dayalı daldırma (immersion) modeliyle İngilizce ve Almanca yetkinliği kazandırıyoruz.",
    image: "/images/bcn/reading-festival.jpg",
    imageAlt: "Okuma Şenliği sahnesi",
  },
  {
    number: "03",
    title: "Bilimsel Metodoloji & İleri STEM",
    description:
      "Dünya şampiyonlukları kazandıran araştırma kültürü, robotik laboratuvarları ve yapay zekâ okuryazarlığı sunuyoruz.",
    image: "/images/bcn/stem-lab.jpg",
    imageAlt: "Fen laboratuvarında deney düzeneği",
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

      {/* 3 Pillars: quiet content blocks, not clickable cards */}
      <div className="w-full max-w-7xl 2xl:max-w-[1520px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {THREE_PILLARS.map((pillar) => (
          <article key={pillar.number} className="flex flex-col">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-200">
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 text-lg font-bold text-[#17263D] leading-snug">{pillar.title}</h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
