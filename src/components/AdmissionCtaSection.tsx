"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, MapPin, Mail, Clock, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { INSTITUTION_INFO } from "@/data/bcnData";

export default function AdmissionCtaSection() {
  const { openAdmission } = useModal();

  return (
    <section className="w-full h-full flex flex-col justify-between bg-[#0B1524] text-white px-5 sm:px-8 lg:px-12 py-5 sm:py-7 overflow-y-auto no-scrollbar relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1E3A8A]/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Main CTA Stage */}
      <div className="relative z-10 max-w-4xl mx-auto w-full my-auto text-center flex flex-col items-center py-4">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-widest text-[#C59B27] uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>2026 - 2027 Kayıt & Kabul Dönemi</span>
        </div>

        {/* Master Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-2xl">
          Çocuğunuzun Geleceğine{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
            Birlikte Yön Verelim.
          </span>
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

      {/* Integrated Luxury Footer Strip */}
      <footer className="relative z-10 w-full max-w-7xl 2xl:max-w-[1520px] mx-auto border-t border-white/10 pt-4 pb-2 shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-slate-400">
          {/* Col 1: Coordinates */}
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-200">Madenler Kampüsü</div>
              <div className="text-[11px] text-slate-400">İdealist Kent Cad. No:5/A Çekmeköy</div>
            </div>
          </div>

          {/* Col 2: Communication */}
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-200">{INSTITUTION_INFO.phone}</div>
              <div className="text-[11px] text-slate-400">{INSTITUTION_INFO.email}</div>
            </div>
          </div>

          {/* Col 3: Hours */}
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-200">Çalışma Saatleri</div>
              <div className="text-[11px] text-slate-400">Hafta İçi: 08:00 - 18:00 | Cts: 09:00 - 15:00</div>
            </div>
          </div>

          {/* Col 4: Links & Copyright */}
          <div className="flex flex-col sm:items-end justify-between text-[11px]">
            <div className="flex items-center gap-3 text-slate-300">
              <Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link>
              <span>•</span>
              <Link href="/kademeler" className="hover:text-white transition-colors">Kademeler</Link>
              <span>•</span>
              <Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link>
            </div>
            <div className="text-slate-500 mt-1">
              © 2026 BCN Eğitim Kurumları. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
