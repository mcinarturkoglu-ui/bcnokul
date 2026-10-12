"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, Sparkles, MapPin, ShieldCheck, Clock } from "lucide-react";
import { INSTITUTION_INFO } from "@/data/bcnData";

export default function AdmissionCtaSection() {
  const [phoneInput, setPhoneInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [levelInput, setLevelInput] = useState("İlkokul (IB PYP Adayı)");
  const [isQuickSent, setIsQuickSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuickSent(true);
  };

  return (
    <section
      id="slide-9"
      className="w-full h-full flex flex-col justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-12 max-w-7xl 2xl:max-w-[1520px] mx-auto select-none text-[#17263D] relative overflow-hidden"
    >
      {/* 1. Standard Header Tier */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#1E3A8A] text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-slate-200">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>2026 - 2027 Erken Kayıt & Kabul Dönemi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#17263D] leading-tight">
            Kayıt ve Tanışma Randevusu.
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-[#17263D] font-bold text-xs border border-slate-200 transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{INSTITUTION_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* 2. Standard Main Stage Tier (Fixed Height Frame) */}
      <div className="flex-1 min-h-0 w-full py-1.5 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
        {/* Left Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3 bg-white p-5 sm:p-6 lg:p-7 rounded-3xl border border-slate-200/80 shadow-xl">
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-wider uppercase text-[#1E3A8A] font-bold block">
              GELECEĞİN EĞİTİM EKOSİSTEMİ
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#17263D] leading-snug">
              Çocuğunuzun Geleceğine <span className="text-[#1E3A8A]">Birlikte Yön Verelim.</span>
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              Akademik başarıyı, çift diplomayı ve zihinsel disiplini birleştiren ayrıcalıklı ekolümüzde yerinizi ayırtın. Kabul koordinatörlerimiz tüm sorularınızı birebir yanıtlamaktan memnuniyet duyacaktır.
            </p>
          </div>

          {/* Direct Actions */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
                className="sheen-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer relative z-20 pointer-events-auto"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Hemen Arayın: {INSTITUTION_INFO.phone}</span>
              </a>

              <a
                href={INSTITUTION_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#17263D] font-bold text-xs border border-slate-200 transition-all cursor-pointer relative z-20 pointer-events-auto"
              >
                <MapPin className="w-4 h-4 text-[#1E3A8A]" />
                <span>Madenler, Çekmeköy Kampüsü</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="grid grid-cols-3 gap-2 text-xs pt-1">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-700 text-[11px]">Hızlı Randevu</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-700 text-[11px]">Birebir Rehberlik</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="font-semibold text-slate-700 text-[11px]">24 Saatte Dönüş</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Fast Registration Card */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
            {isQuickSent ? (
              <div className="py-8 text-center space-y-3 my-auto">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#17263D]">Talebiniz Alındı!</h3>
                <p className="text-xs text-slate-600">
                  Kabul koordinatörümüz 1 iş saati içinde sizi arayarak randevunuzu teyit edecektir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#17263D]">
                    Hızlı Tanışma & Randevu
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Öğrenci kademesini seçip bilgilerinizi bırakın, uzmanlarımız sizi arasın.
                  </p>
                </div>

                <div className="space-y-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">
                      Veli Adı Soyadı
                    </label>
                    <input
                      type="text"
                      required
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="Örn: Mehmet Yılmaz"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[#17263D] placeholder-slate-400 text-xs focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-colors relative z-20 pointer-events-auto"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">
                      İletişim Numarası
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[#17263D] placeholder-slate-400 text-xs focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-colors relative z-20 pointer-events-auto"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">
                      Öğrenci Kademesi
                    </label>
                    <select
                      value={levelInput}
                      onChange={(e) => setLevelInput(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[#17263D] text-xs focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-colors cursor-pointer relative z-20 pointer-events-auto"
                    >
                      <option value="Aurelia Preschool (3-6 Yaş)">Aurelia Preschool (3-6 Yaş)</option>
                      <option value="İlkokul (IB PYP Adayı)">İlkokul (IB PYP Adayı)</option>
                      <option value="Ortaokul (LGS & STEM)">Ortaokul (LGS & STEM)</option>
                      <option value="Anadolu Lisesi (Kanada OSSD)">Anadolu Lisesi (Kanada OSSD)</option>
                      <option value="Fen Lisesi (College Board AP)">Fen Lisesi (College Board AP)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="sheen-btn w-full py-2.5 px-4 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 relative z-20 pointer-events-auto"
                >
                  <span>Randevu Talebini İlet</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 3. Standard Grounding Bottom Tier */}
      <div className="pt-2 sm:pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="font-semibold text-slate-700">Kabul Süreci:</span>
          <span>1. Ön Başvuru Formu</span>
          <span className="text-slate-300">•</span>
          <span>2. Rehberlik & Tanışma Mülakatı</span>
          <span className="text-slate-300">•</span>
          <span>3. Bireysel Değerlendirme</span>
          <span className="text-slate-300">•</span>
          <span>4. Kesin Kayıt</span>
        </div>
        <Link
          href="/kayit-ve-kabul"
          className="text-[11px] sm:text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Ayrıntılı Kayıt Rehberi</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
