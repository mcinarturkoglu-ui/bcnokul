"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LEVELS } from "@/data/bcnData";

export default function LevelsSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/70 text-[#17263D] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
              Eğitim Kademeleri
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263D]">
              3 Yaştan Üniversiteye Kesintisiz Ekol.
            </h2>
          </div>
          <Link
            href="/kademeler"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer shrink-0"
          >
            <span>Tüm Kademeleri Keşfedin</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5 Visual Photo Panels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {LEVELS.map((lvl, index) => (
            <motion.div
              key={lvl.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/kademeler/${lvl.slug}`}
                className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 bg-slate-900 border border-slate-200/60 block"
              >
                {/* Background Full Photo */}
                <Image
                  src={lvl.image}
                  alt={lvl.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                />

                {/* Dark Editorial Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-[#0B1524]/50 to-transparent pointer-events-none" />

                {/* Top Age Pill */}
                <div className="relative z-10 self-start">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wider">
                    {lvl.ageGroup}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-2 text-white">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    {lvl.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                    {lvl.tagline}
                  </p>
                  <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    <span>İncele</span>
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
