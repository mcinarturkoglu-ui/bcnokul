"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { INSTITUTION_INFO } from "@/data/bcnData";

export default function AdmissionCtaSection() {
  const { openAdmission } = useModal();

  return (
    <section className="w-full py-20 lg:py-28 bg-[#0B1524] text-white relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1E3A8A]/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#C59B27] uppercase"
        >
          <span>2026 - 2027 Kayıt & Kabul Dönemi</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-2xl"
        >
          Çocuğunuzun Geleceğine{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
            Birlikte Yön Verelim.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-sm sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl"
        >
          Kontenjanlarımız sınırlıdır. Çekmeköy kampüsümüzü ziyaret ederek eğitim vizyonumuzu ve akademik imkânlarımızı yerinde keşfedin.
        </motion.p>

        {/* Exactly 2 Clean Actions */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => openAdmission()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#17263D] font-bold text-sm hover:bg-slate-100 hover:shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-[#C59B27]" />
            <span>Kampüs Ziyaret Randevusu Al</span>
            <ArrowRight className="w-4 h-4 text-[#17263D] group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{INSTITUTION_INFO.phone}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
