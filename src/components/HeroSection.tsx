"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { openAdmission } = useModal();

  return (
    <section data-hero="dark" className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0B1524] text-white pt-[58px] md:pt-[89px]">
      {/* The school's own entrance hall, kept readable under a single scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bcn/campus-lobby.jpg"
          alt="BCN College Madenler kampüsü giriş holü"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-[#0B1524]/65 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0B1524]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1524] to-transparent pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-10 text-center flex flex-col items-center"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl text-balance">
          Geleceğin Dünyasına Hazır Bireyler
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl text-balance">
          Çekmeköy Madenler kampüsünde anaokulundan liseye; IB PYP, Kanada çift diploma ve AP programlarıyla.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => openAdmission()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-[#17263D] font-bold text-sm hover:bg-slate-100 transition-colors cursor-pointer group"
          >
            <span>Kampüs Ziyareti & Randevu</span>
            <ArrowRight className="w-4 h-4 text-[#17263D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>

          <Link
            href="/egitim-modelimiz"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl text-white font-semibold text-sm border border-white/40 hover:bg-white/10 hover:border-white/70 transition-colors cursor-pointer focus-ring-light"
          >
            Eğitim Modelimiz
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
