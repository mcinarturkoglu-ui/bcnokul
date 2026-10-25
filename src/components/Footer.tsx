"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { MapPin, Phone, Mail, ArrowRight, Award, Clock } from "lucide-react";
import { INSTITUTION_INFO, LEVELS, INTERNATIONAL_PROGRAMS } from "@/data/bcnData";

export default function Footer() {
  const { openAdmission } = useModal();

  return (
    <footer className="bg-[#17263D] text-white pt-16 sm:pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Banner */}
        <div className="pb-12 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Dünya Standartlarında Eğitim</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Geleceği Sorgulayan, Bilimle İnşa Eden Nesiller
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              BCN Eğitim Kurumları; Çekmeköy-Ümraniye kampüsünde anaokulundan liseye, IB PYP, OSSD Kanada Çift Diploması ve yapay zekâ destekli öğrenme vizyonuyla hizmet vermektedir.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => openAdmission()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#17263D] font-bold text-sm hover:bg-slate-100 hover:shadow-lg transition-all"
            >
              <span>Ön Kayıt Başvurusu Yapın</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={INSTITUTION_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/10"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Yol Tarifi Alın</span>
            </a>
          </div>
        </div>

        {/* Accreditations Ribbon */}
        <div className="py-8 border-b border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
              IB
            </div>
            <div>
              <div className="font-semibold text-white">IB PYP Aday Okulu</div>
              <div className="text-xs text-slate-400">Primary Years Programme</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-blue-400/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
              CA
            </div>
            <div>
              <div className="font-semibold text-white">OSSD Kanada Diploması</div>
              <div className="text-xs text-slate-400">Ontario Secondary Diploma</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-emerald-400/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
              AP
            </div>
            <div>
              <div className="font-semibold text-white">Advanced Placement</div>
              <div className="text-xs text-slate-400">College Board Onaylı</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-purple-400/20 text-purple-400 flex items-center justify-center font-bold text-xs shrink-0">
              FLL
            </div>
            <div>
              <div className="font-semibold text-white">FLL Şampiyonu</div>
              <div className="text-xs text-slate-400">Türkiye & Marmara 1.'si</div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Identity & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/bcn/logo-crest.png"
                alt="BCN College arması"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="font-brand font-semibold text-xl tracking-[0.06em] text-white block">
                  BCN EĞİTİM KURUMLARI
                </span>
                <span className="text-xs font-medium text-slate-400 tracking-wider uppercase block">
                  Çekmeköy & Madenler Kampüsü
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pr-4">
              {INSTITUTION_INFO.address}
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`} className="inline-flex items-center min-h-11 hover:text-white font-medium">
                  {INSTITUTION_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${INSTITUTION_INFO.email}`} className="inline-flex items-center min-h-11 hover:text-white">
                  {INSTITUTION_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{INSTITUTION_INFO.workingHours}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={INSTITUTION_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={INSTITUTION_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href={INSTITUTION_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Kademeler */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Eğitim Kademeleri
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/kademeler/aurelia-preschool" className="hover:text-white transition-colors block py-1.5">
                  Aurelia Preschool (3-6 Yaş)
                </Link>
              </li>
              <li>
                <Link href="/kademeler/ilkokul" className="hover:text-white transition-colors block py-1.5">
                  İlkokul (IB PYP Aday Okulu)
                </Link>
              </li>
              <li>
                <Link href="/kademeler/ortaokul" className="hover:text-white transition-colors block py-1.5">
                  Ortaokul & LGS Hazırlık
                </Link>
              </li>
              <li>
                <Link href="/kademeler/anadolu-lisesi" className="hover:text-white transition-colors block py-1.5">
                  Anadolu Lisesi (Kanada OSSD)
                </Link>
              </li>
              <li>
                <Link href="/kademeler/fen-lisesi" className="hover:text-white transition-colors block py-1.5">
                  Fen Lisesi & İleri STEM
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/kademeler" className="text-amber-300 hover:underline inline-flex items-center gap-1 min-h-11 font-semibold">
                  Tüm Kademeleri Keşfet <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Uluslararası Programlar */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Uluslararası Programlar
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/uluslararasi-programlar" className="hover:text-white transition-colors block py-1.5">
                  IB Primary Years (PYP)
                </Link>
              </li>
              <li>
                <Link href="/uluslararasi-programlar" className="hover:text-white transition-colors block py-1.5">
                  Kanada Çift Diploma (OSSD)
                </Link>
              </li>
              <li>
                <Link href="/uluslararasi-programlar" className="hover:text-white transition-colors block py-1.5">
                  Advanced Placement (AP)
                </Link>
              </li>
              <li>
                <Link href="/uluslararasi-programlar" className="hover:text-white transition-colors block py-1.5">
                  Model United Nations (MUN)
                </Link>
              </li>
              <li>
                <Link href="/uluslararasi-programlar" className="hover:text-white transition-colors block py-1.5">
                  Erasmus+ Avrupa Projeleri
                </Link>
              </li>
              <li>
                <Link href="/uluslararasi-programlar" className="hover:text-white transition-colors block py-1.5">
                  ThinkGlobal & Partner Okullar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Kurumsal & Hızlı Erişim */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Kurumsal & Başarılar
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors block py-1.5">
                  Hakkımızda & Kurucu Vizyonu
                </Link>
              </li>
              <li>
                <Link href="/lider-ekibimiz" className="hover:text-white transition-colors block py-1.5">
                  Lider Ekibimiz & Yönetim
                </Link>
              </li>
              <li>
                <Link href="/misyon-ve-vizyon" className="hover:text-white transition-colors block py-1.5">
                  Misyon ve Vizyon
                </Link>
              </li>
              <li>
                <Link href="/egitim-modelimiz" className="hover:text-white transition-colors block py-1.5">
                  Eğitim Modelimiz & RULER
                </Link>
              </li>
              <li>
                <Link href="/kampusumuz" className="hover:text-white transition-colors block py-1.5">
                  Fiziki Olanaklar & Kampüs
                </Link>
              </li>
              <li>
                <Link href="/basarilarimiz" className="hover:text-white transition-colors block py-1.5">
                  Dünya Şampiyonlukları
                </Link>
              </li>
              <li>
                <Link href="/kayit-ve-kabul" className="hover:text-white transition-colors block py-1.5">
                  Kayıt ve Kabul Rehberi
                </Link>
              </li>
              <li>
                <Link href="/haberler-ve-duyurular" className="hover:text-white transition-colors block py-1.5">
                  Basında Biz & Haberler
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Tüm Hakları Saklıdır • BCN Eğitim Kurumları
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/kayit-ve-kabul#kvkk" className="inline-flex items-center min-h-11 hover:text-slate-200 transition-colors">
              Aydınlatma Metni (KVKK)
            </Link>
            <span>•</span>
            <Link href="/kayit-ve-kabul#kvkk" className="inline-flex items-center min-h-11 hover:text-slate-200 transition-colors">
              Açık Rıza Metni
            </Link>
            <span>•</span>
            <Link href="/kayit-ve-kabul#kvkk" className="inline-flex items-center min-h-11 hover:text-slate-200 transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
