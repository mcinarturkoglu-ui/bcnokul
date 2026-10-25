"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { FOUNDER_INFO } from "@/data/bcnData";

export default function WelcomeSection() {
  return (
    <section className="w-full flex items-center justify-center bg-white text-[#17263D] px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl 2xl:max-w-[1480px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Asymmetrical Photo Canvas with Floating Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group"
          >
            <Image
              src="/images/bcn/campus-gate-exterior.jpg"
              alt="BCN Koleji Madenler kampüsü ana giriş kapısı"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-right group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <p className="absolute bottom-4 left-5 right-5 text-sm font-semibold text-white">
              Madenler kampüsü ana giriş
            </p>
          </motion.div>

          {/* Right Column: Editorial Manifesto & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:space-y-6"
          >
            <div className="space-y-2">
              <span className="text-sm font-semibold text-[var(--bcn-gold-ink)] flex items-center gap-1.5">
                <span>Eğitim Felsefemiz & Vizyon</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263D] leading-tight">
                Bir Zihinsel Disiplin İnşası
              </h2>
            </div>

            {/* Founder Quote Card */}
            <div className="relative pl-5 border-l-2 border-[#C59B27] py-1 space-y-2">
              <Quote className="w-5 h-5 text-[var(--bcn-gold-ink)]/50" />
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium italic leading-relaxed">
                "{FOUNDER_INFO.quote}"
              </p>
              <div className="text-xs font-bold text-[#17263D]">
                Adem Bican <span className="text-slate-500 font-normal">— Kurucu</span>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              BCN Eğitim Kurumları; ezberci kalıpları yıkarak çocukların doğuştan gelen merakını matematiksel disiplin, analitik muhakeme ve küresel yetkinliğe dönüştüren çağdaş bir ekoldür. 1:8 öğretmen-öğrenci oranı ile kişiselleştirilmiş akademik takip sağlar.
            </p>

            <div className="pt-1">
              <Link
                href="/lider-ekibimiz"
                className="inline-flex items-center min-h-11 gap-2 text-xs sm:text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer"
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
