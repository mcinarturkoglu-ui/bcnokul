"use client";

import React from "react";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { INSTITUTION_INFO } from "@/data/bcnData";

export default function AdmissionCtaSection() {
  const { openAdmission } = useModal();

  return (
    <section className="w-full flex flex-col bg-[#0B1524] text-white px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">

      {/* Main CTA Stage */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Eyebrow */}
        <p className="mb-3 text-sm font-semibold text-[#C59B27]">2026 - 2027 Kayıt ve Kabul Dönemi</p>

        {/* Master Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-3xl text-balance">
          Çocuğunuzun Geleceğine Birlikte Yön Verelim
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-xs sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
          Kontenjanlarımız sınırlıdır. Çekmeköy kampüsümüzü ziyaret ederek eğitim vizyonumuzu ve akademik imkânlarımızı yerinde keşfedin.
        </p>

        {/* Two High-Impact Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => openAdmission()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white text-[#17263D] font-bold text-xs sm:text-sm hover:bg-slate-100 hover:shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-[#C59B27]" />
            <span>Kampüs Ziyaret Randevusu Al</span>
            <ArrowRight className="w-4 h-4 text-[#17263D] group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{INSTITUTION_INFO.phone}</span>
          </a>
        </div>
      </div>

    </section>
  );
}
