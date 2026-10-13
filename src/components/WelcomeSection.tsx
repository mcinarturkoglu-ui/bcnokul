"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Sparkles, Brain } from "lucide-react";
import { FOUNDER_INFO } from "@/data/bcnData";

export default function WelcomeSection() {
  return (
    <section className="w-full h-full flex items-center justify-center bg-white text-[#17263D] px-5 sm:px-8 lg:px-16 py-6 sm:py-10">
      <div className="max-w-7xl 2xl:max-w-[1480px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Asymmetrical Photo Canvas with Floating Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group"
          >
            <Image
              src="/images/bcn/classroom-modern.jpg"
              alt="BCN Uluslararası Sınıf Ortamı"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-104 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Overlaid Minimalist Floating Pill */}
            <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300 block">
                  SORGULAYICI ÖĞRENME ALANLARI
                </span>
                <span className="text-sm sm:text-base font-bold">
                  Merakı Dünya Standartlarında Vizyona Dönüştüren Ekol
                </span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 shrink-0">
                <Brain className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Manifesto & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Eğitim Felsefemiz & Vizyon</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263D] leading-tight">
                Bir Zihinsel Disiplin İnşası.
              </h2>
            </div>

            {/* Founder Quote Card */}
            <div className="relative pl-5 border-l-2 border-[#C59B27] py-1 space-y-2">
              <Quote className="w-5 h-5 text-[#C59B27]/50" />
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium italic leading-relaxed">
                "{FOUNDER_INFO.quote}"
              </p>
              <div className="text-xs font-bold text-[#17263D]">
                Adem Bican <span className="text-slate-400 font-normal">— Kurucu</span>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              BCN Eğitim Kurumları; ezberci kalıpları yıkarak çocukların doğuştan gelen merakını matematiksel disiplin, analitik muhakeme ve küresel yetkinliğe dönüştüren çağdaş bir ekoldür. 1:8 öğretmen-öğrenci oranı ile kişiselleştirilmiş akademik takip sağlar.
            </p>

            <div className="pt-1">
              <Link
                href="/lider-ekibimiz"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer"
              >
                <span>Lider Ekibimiz ve Yönetim Kadrosu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
