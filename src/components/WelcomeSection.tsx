"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { FOUNDER_INFO } from "@/data/bcnData";

export default function WelcomeSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white text-[#17263D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Architecture & Classroom Photography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 group"
          >
            <Image
              src="/images/bcn/classroom-modern.jpg"
              alt="BCN Uluslararası Sınıf Ortamı"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-103 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Column: Refined Editorial Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
                Eğitim Felsefemiz
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263D] leading-tight">
                Bir Zihinsel Disiplin İnşası.
              </h2>
            </div>

            {/* Founder Quote */}
            <div className="relative pl-6 border-l-2 border-[#C59B27] py-1 space-y-2">
              <Quote className="w-6 h-6 text-[#C59B27]/40 mb-1" />
              <p className="text-base sm:text-lg text-slate-700 font-medium italic leading-relaxed">
                "{FOUNDER_INFO.quote}"
              </p>
              <div className="text-xs font-bold text-[#17263D]">
                Adem Bican <span className="text-slate-400 font-normal">— Kurucu</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              BCN Eğitim Kurumları; ezberci kalıpları yıkarak çocukların doğuştan gelen merakını matematiksel disiplin, analitik muhakeme ve küresel yetkinliğe dönüştüren çağdaş bir ekoldür.
            </p>

            <div className="pt-2">
              <Link
                href="/lider-ekibimiz"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer"
              >
                <span>Lider Ekibimiz ve Yönetim Vizyonu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
