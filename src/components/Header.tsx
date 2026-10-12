"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Globe2,
  Building2,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { INSTITUTION_INFO, LEVELS, INTERNATIONAL_PROGRAMS } from "@/data/bcnData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const { openAdmission } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Pre-Header Bar */}
      <div className="bg-[#17263D] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Madenler, Çekmeköy / İstanbul</span>
            </span>
            <a
              href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{INSTITUTION_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1.5 text-amber-300/90 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              2026-2027 Erken Kayıt & Bursluluk Dönemi Devam Ediyor
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/haberler-ve-duyurular"
              className="hover:text-white transition-colors"
            >
              Duyurular
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="/basarilarimiz"
              className="hover:text-white transition-colors font-medium text-emerald-400"
            >
              Dünya STEM Şampiyonu
            </Link>
            <span className="text-slate-600">•</span>
            <button
              type="button"
              onClick={() => openAdmission()}
              className="text-amber-300 hover:text-white transition-colors font-medium underline underline-offset-2 cursor-pointer"
            >
              Randevu Al
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav-scrolled py-2 sm:py-2.5 shadow-md"
            : "glass-nav py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#17263D] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/bcn/logo-white.png"
                  alt="BCN Koleji Logo"
                  width={38}
                  height={38}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#17263D]">
                    BCN
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-[#1E3A8A] tracking-wider uppercase">
                    COLLEGE
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                  Modern International School
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors"
              >
                Ana Sayfa
              </Link>

              {/* Mega Menu: Kurumsal */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("kurumsal")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors">
                  <span>Hakkımızda</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "kurumsal" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "kurumsal" && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 animate-fadeIn">
                    <div className="space-y-1">
                      <Link
                        href="/hakkimizda"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#17263D]">
                            Kurumsal Tanıtım
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Tarihçe, vizyon ve kurucu felsefemiz
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/misyon-ve-vizyon"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#17263D]">
                            Misyon & Vizyon
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Matematiksel akıl & zihinsel disiplin
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/lider-ekibimiz"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#17263D]">
                            Lider Ekibimiz & Yönetim
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Adem Bican ve profesyonel yönetim kadrosu
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/kampusumuz"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#17263D]">
                            Kampüs & Fiziki İmkânlar
                          </div>
                          <div className="text-[11px] text-slate-500">
                            12.000m² Madenler / Çekmeköy yerleşkesi
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Mega Menu: Kademeler */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("kademeler")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors">
                  <span>Eğitim Kademeleri</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "kademeler" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "kademeler" && (
                  <div className="absolute top-full left-0 w-[420px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-fadeIn">
                    <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase px-2 mb-2">
                      Kademelerimiz (3 Yaş - 12. Sınıf)
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {LEVELS.map((lvl) => (
                        <Link
                          key={lvl.id}
                          href={`/kademeler/${lvl.slug}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors">
                              {lvl.name}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {lvl.subtitle}
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {lvl.ageGroup}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center px-2">
                      <Link
                        href="/kademeler"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-xs font-semibold text-[#1E3A8A] hover:underline flex items-center gap-1"
                      >
                        Tüm Kademeleri İncele <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Mega Menu: Uluslararası Programlar */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("uluslararasi")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors">
                  <span>Uluslararası Programlar</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "uluslararasi" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "uluslararasi" && (
                  <div className="absolute top-full -left-20 w-[480px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-fadeIn">
                    <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase px-2 mb-2">
                      Global Akreditasyonlar & Diplomalar
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {INTERNATIONAL_PROGRAMS.map((prog) => (
                        <Link
                          key={prog.id}
                          href="/uluslararasi-programlar"
                          onClick={() => setActiveMegaMenu(null)}
                          className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors block group"
                        >
                          <div className="text-[11px] font-semibold text-amber-700 tracking-wider uppercase mb-0.5">
                            {prog.badge}
                          </div>
                          <div className="text-xs font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors">
                            {prog.shortTitle}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {prog.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 px-2 flex justify-between items-center">
                      <span className="text-[11px] text-slate-500">
                        Dünya standartlarında çift diploma ayrıcalığı
                      </span>
                      <Link
                        href="/uluslararasi-programlar"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-xs font-semibold text-[#1E3A8A] hover:underline flex items-center gap-1"
                      >
                        Tümünü Gör <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/egitim-modelimiz"
                className="px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors"
              >
                Eğitim Modelimiz
              </Link>

              <Link
                href="/ogrenci-yasami"
                className="px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors"
              >
                Öğrenci Yaşamı
              </Link>

              <Link
                href="/haberler-ve-duyurular"
                className="px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors"
              >
                Haberler
              </Link>

              <Link
                href="/iletisim"
                className="px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors"
              >
                İletişim
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/kayit-ve-kabul"
                className="text-xs font-semibold text-[#17263D] hover:text-[#1E3A8A] px-3 py-2 rounded-xl transition-colors"
              >
                Kabul Kriterleri
              </Link>
              <button
                onClick={() => openAdmission()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#17263D] text-white text-xs font-semibold tracking-wide hover:bg-[#1E3A8A] hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-200 transform active:scale-95"
              >
                <span>Kayıt Bilgisi Alın</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => openAdmission()}
                className="px-3 py-1.5 rounded-lg bg-[#17263D] text-white text-xs font-semibold"
              >
                Ön Kayıt
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Menüyü Aç/Kapat"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[58px] md:top-[89px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-100 p-5 space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hakkimizda"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Hakkımızda
              </Link>
              <Link
                href="/lider-ekibimiz"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Lider Ekibimiz & Yönetim
              </Link>
              <Link
                href="/misyon-ve-vizyon"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Misyon ve Vizyon
              </Link>
              <Link
                href="/kademeler"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Eğitim Kademeleri (Tümü)
              </Link>
              <div className="pl-4 space-y-1 border-l-2 border-slate-100 ml-3">
                {LEVELS.map((lvl) => (
                  <Link
                    key={lvl.id}
                    href={`/kademeler/${lvl.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm font-medium text-slate-600 hover:text-[#1E3A8A]"
                  >
                    • {lvl.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/egitim-modelimiz"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Eğitim Modelimiz & BCN Yaklaşımı
              </Link>
              <Link
                href="/uluslararasi-programlar"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Uluslararası Programlar (IB, OSSD, AP)
              </Link>
              <Link
                href="/kampusumuz"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Kampüsümüz & Fiziki Olanaklar
              </Link>
              <Link
                href="/ogrenci-yasami"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Öğrenci Yaşamı & Kulüpler
              </Link>
              <Link
                href="/basarilarimiz"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Dünya & Ulusal Başarılarımız
              </Link>
              <Link
                href="/haberler-ve-duyurular"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Haberler & Etkinlikler
              </Link>
              <Link
                href="/kayit-ve-kabul"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Kayıt ve Kabul Rehberi
              </Link>
              <Link
                href="/iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                İletişim & Ulaşım
              </Link>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAdmission();
                }}
                className="w-full py-3 rounded-xl bg-[#17263D] text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Hemen Kayıt Bilgisi Alın</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-[#17263D] font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#1E3A8A]" />
                <span>{INSTITUTION_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
