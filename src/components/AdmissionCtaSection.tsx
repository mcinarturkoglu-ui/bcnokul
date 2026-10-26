"use client";

import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { INSTITUTION_INFO } from "@/data/bcnData";
import { PHONE_HREF } from "@/lib/contact";

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
        <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed max-w-xl">
          Kontenjanlarımız sınırlıdır. Çekmeköy kampüsümüzü ziyaret ederek eğitim vizyonumuzu ve akademik imkânlarımızı yerinde keşfedin.
        </p>

        {/* Two High-Impact Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => openAdmission()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 px-8 rounded-xl bg-white text-[#0B1524] font-semibold text-[15px] hover:bg-slate-100 transition-colors cursor-pointer group focus-ring-light"
          >
            <span>Kampüs Ziyaret Randevusu Al</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </button>

          <a
            href={PHONE_HREF}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl text-white font-semibold text-[15px] border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors cursor-pointer focus-ring-light"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>{INSTITUTION_INFO.phone}</span>
          </a>
        </div>
      </div>

    </section>
  );
}
