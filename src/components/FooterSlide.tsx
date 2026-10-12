"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Globe2,
  Calendar,
  Sparkles,
  MessageCircle,
  Clock,
  Compass,
} from "lucide-react";
import { INSTITUTION_INFO, LEVELS, INTERNATIONAL_PROGRAMS } from "@/data/bcnData";

export default function FooterSlide() {
  const { openAdmission } = useModal();

  return (
    <section
      id="slide-10"
      className="w-full h-full flex flex-col justify-between overflow-y-auto slide-scrollable bg-[#091322] text-white relative py-4 sm:py-6 px-4 sm:px-8 lg:px-12 select-none"
    >
      {/* Background Cinematic Gradient & Campus Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl bg-blue-500/30" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full opacity-20 blur-3xl bg-amber-500/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-[#091322]/95 to-[#091322]" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1520px] mx-auto w-full my-auto space-y-4 sm:space-y-6 pointer-events-auto">
        {/* Top Editorial Banner */}
        <div className="pb-3 sm:pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-white/15">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Modern International School & College</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              BCN Eğitim Kurumları.
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              Çekmeköy-Ümraniye kampüsümüzde anaokulundan liseye, IB PYP, OSSD Kanada Çift Diploması ve zihinsel disiplin vizyonuyla hizmetinizdeyiz.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => openAdmission()}
              className="sheen-btn inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#17263D] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/25 cursor-pointer relative z-20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Ön Kayıt Randevusu Al</span>
            </button>
            <a
              href="https://wa.me/9005520512336?text=Merhaba,%20BCN%20Koleji%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs transition-colors border border-emerald-400/30 cursor-pointer relative z-20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4 Multi-Column Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs">
          {/* Column 1: Kademelerimiz */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold border-b border-white/10 pb-1">
              Eğitim Kademelerimiz
            </div>
            <ul className="space-y-1.5 text-slate-300">
              {LEVELS.map((lvl) => (
                <li key={lvl.id}>
                  <Link
                    href={`/kademeler/${lvl.slug}`}
                    className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                  >
                    <span className="truncate">{lvl.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Uluslararası Ağ */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold border-b border-white/10 pb-1">
              Uluslararası Programlar
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <Link
                  href="/uluslararasi-programlar"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>IB Primary Years (PYP)</span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1 rounded">Aday</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/uluslararasi-programlar"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>Kanada OSSD Çift Diploma</span>
                  <span className="text-[9px] font-mono text-blue-400 bg-blue-950/60 px-1 rounded">Lise</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/uluslararasi-programlar"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>College Board AP Sınavları</span>
                  <span className="text-[9px] font-mono text-purple-400 bg-purple-950/60 px-1 rounded">AP</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/basarilarimiz"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>Dünya STEM Şampiyonluğu</span>
                  <span className="text-[9px] font-mono text-amber-400 bg-amber-950/60 px-1 rounded">STEM</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>Yale RULER & MOXO Modeli</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hızlı Bağlantılar */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold border-b border-white/10 pb-1">
              Kurumsal & Kampüs
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <Link
                  href="/lider-ekibimiz"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>Lider Ekibimiz (14 Yönetici)</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/kampusumuz"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>12.000m² Çekmeköy Kampüsü</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>Eğitim Felsefemiz & Kurucu</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/haberler-ve-duyurular"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>Haberler ve Duyurular</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5 cursor-pointer"
                >
                  <span>İletişim & Ulaşım Bilgileri</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: İletişim Bilgileri */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold border-b border-white/10 pb-1">
              Kampüs & İletişim
            </div>
            <div className="space-y-2 text-slate-300">
              <a
                href={INSTITUTION_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors group cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug text-[11px]">
                  Madenler Mah. Arafat Cad. No:16 Çekmeköy / İstanbul
                </span>
              </a>

              <a
                href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs">{INSTITUTION_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${INSTITUTION_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] truncate">{INSTITUTION_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400 text-[11px] pt-0.5">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Hafta İçi: 08:00 - 18:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations Ribbon Bar */}
        <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-slate-300">IB PYP Aday Okulu</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
            <span className="text-slate-300">Kanada OSSD Çift Diploma</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
            <span className="text-slate-300">College Board AP Onayı</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span className="text-slate-300">Dünya STEM Şampiyonu</span>
          </div>
        </div>

        {/* Bottom Copyright and Legal Bar */}
        <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] text-slate-400">
          <div>
            © 2026 BCN Eğitim Kurumları. Tüm hakları saklıdır. T.C. Millî Eğitim Bakanlığı Onaylıdır.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/kvkk" className="hover:text-white transition-colors cursor-pointer">
              KVKK Aydınlatma
            </Link>
            <span>•</span>
            <Link href="/gizlilik" className="hover:text-white transition-colors cursor-pointer">
              Gizlilik Politikası
            </Link>
            <span>•</span>
            <Link href="/cerez" className="hover:text-white transition-colors cursor-pointer">
              Çerezler
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
