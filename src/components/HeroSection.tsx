"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, Compass } from "lucide-react";

export default function HeroSection() {
  const { openAdmission } = useModal();

  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[86vh] flex items-center justify-center overflow-hidden bg-[#0B1524] text-white">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bcn/campus-facade-1.jpg"
          alt="BCN Eğitim Kurumları Çekmeköy Kampüsü"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 animate-subtleZoom opacity-55"
        />
        {/* Deep Editorial Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-[#0B1524]/60 to-[#0B1524]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1524]/90 via-transparent to-[#0B1524]/90 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Editorial Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#C59B27] uppercase"
        >
          <span className="w-6 h-px bg-[#C59B27]/70" />
          <span>BCN International School & College</span>
          <span className="w-6 h-px bg-[#C59B27]/70" />
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl"
        >
          Geleceğin Dünyasına{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
            Hazır Bireyler.
          </span>
        </motion.h1>

        {/* Two-Line Concise Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
        >
          Uluslararası akademik vizyon, zihinsel disiplin ve sorgulayan analitik düşünce ekolü.
        </motion.p>

        {/* Exactly Two Prestigious CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => openAdmission()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-[#17263D] font-bold text-sm hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform active:scale-95 cursor-pointer group"
          >
            <span>Kampüs Ziyareti & Randevu</span>
            <ArrowRight className="w-4 h-4 text-[#17263D] group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            href="/egitim-modelimiz"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#C59B27]" />
            <span>Eğitim Modelini Keşfet</span>
          </Link>
        </motion.div>
      </div>

      {/* Subtle Bottom Architectural Fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-10" />
    </section>
  );
}
