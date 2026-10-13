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
  MapPin,
  ArrowRight,
  Building2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { INSTITUTION_INFO, LEVELS, INTERNATIONAL_PROGRAMS } from "@/data/bcnData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const { openAdmission } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Pre-Header Bar: Clean, Understated & Editorial */}
      <div className="bg-[#0B1524] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Madenler Kampüsü, Çekmeköy / İstanbul</span>
            </span>
            <span className="text-slate-600">•</span>
            <a
              href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{INSTITUTION_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-amber-200/90 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] animate-pulse" />
            <span>2026 - 2027 Erken Kayıt & Kabul Dönemi</span>
          </div>
        </div>
      </div>

      {/* Main Navbar: Clean, Sticky & Minimal Luxury */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-2.5 shadow-md border-b border-slate-100"
            : "bg-white/90 backdrop-blur-md py-3.5 border-b border-slate-100/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#17263D] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-103 transition-transform duration-300">
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
                  <span className="text-[10px] sm:text-[11px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-[#1E3A8A] tracking-wider uppercase">
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

              {/* Kurumsal Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("kurumsal")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>Kurumsal</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "kurumsal" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "kurumsal" && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 animate-fadeIn">
                    <div className="space-y-1">
                      <Link
                        href="/hakkimizda"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 text-[#1E3A8A]">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#17263D]">Hakkımızda</div>
                          <div className="text-[11px] text-slate-500">Tarihçe ve kurucu vizyonu</div>
                        </div>
                      </Link>

                      <Link
                        href="/misyon-ve-vizyon"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#17263D]">Misyon & Vizyon</div>
                          <div className="text-[11px] text-slate-500">Zihinsel disiplin inşası</div>
                        </div>
                      </Link>

                      <Link
                        href="/lider-ekibimiz"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#17263D]">Lider Ekibimiz</div>
                          <div className="text-[11px] text-slate-500">Adem Bican ve yönetim</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Kademeler Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("kademeler")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>Kademeler</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "kademeler" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "kademeler" && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 animate-fadeIn">
                    <div className="space-y-1">
                      {LEVELS.map((lvl) => (
                        <Link
                          key={lvl.id}
                          href={`/kademeler/${lvl.slug}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#17263D]">{lvl.name}</div>
                            <div className="text-[11px] text-slate-500">{lvl.subtitle}</div>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {lvl.ageGroup}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100">
                      <Link
                        href="/kademeler"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-xs font-semibold text-[#1E3A8A] hover:underline flex items-center justify-between px-2"
                      >
                        <span>Tüm Kademeleri İncele</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Uluslararası Programlar Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("uluslararasi")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>Uluslararası Programlar</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "uluslararasi" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "uluslararasi" && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 animate-fadeIn">
                    <div className="space-y-1">
                      {INTERNATIONAL_PROGRAMS.slice(0, 4).map((prog) => (
                        <Link
                          key={prog.id}
                          href="/uluslararasi-programlar"
                          onClick={() => setActiveMegaMenu(null)}
                          className="p-2 rounded-xl hover:bg-slate-50 transition-colors block"
                        >
                          <div className="text-[10px] font-semibold text-amber-700 uppercase">
                            {prog.badge}
                          </div>
                          <div className="text-xs font-bold text-[#17263D]">{prog.shortTitle}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100">
                      <Link
                        href="/uluslararasi-programlar"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-xs font-semibold text-[#1E3A8A] hover:underline flex items-center justify-between px-2"
                      >
                        <span>Tüm Uluslararası Ağımız</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
                href="/kampusumuz"
                className="px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors"
              >
                Kampüsümüz
              </Link>

              <Link
                href="/iletisim"
                className="px-3 py-2 text-sm font-medium text-[#17263D] hover:text-[#1E3A8A] rounded-lg hover:bg-slate-50 transition-colors"
              >
                İletişim
              </Link>
            </nav>

            {/* Desktop Single Distinct CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={() => openAdmission()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17263D] text-white text-xs font-bold tracking-wide hover:bg-[#1E3A8A] hover:shadow-lg transition-all duration-200 transform active:scale-95 cursor-pointer"
              >
                <span>Randevu Alın</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => openAdmission()}
                className="px-3.5 py-2 rounded-xl bg-[#17263D] text-white text-xs font-bold"
              >
                Randevu Al
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Menü"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[58px] md:top-[89px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-100 p-5 space-y-4 animate-fadeIn">
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
                Lider Ekibimiz
              </Link>
              <Link
                href="/kademeler"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Eğitim Kademeleri
              </Link>
              <Link
                href="/egitim-modelimiz"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Eğitim Modelimiz
              </Link>
              <Link
                href="/uluslararasi-programlar"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Uluslararası Programlar
              </Link>
              <Link
                href="/kampusumuz"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Kampüsümüz
              </Link>
              <Link
                href="/basarilarimiz"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Başarılarımız
              </Link>
              <Link
                href="/haberler-ve-duyurular"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                Haberler & Duyurular
              </Link>
              <Link
                href="/iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-[#17263D] rounded-xl hover:bg-slate-50"
              >
                İletişim
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAdmission();
                }}
                className="w-full py-3 rounded-xl bg-[#17263D] text-white font-bold text-sm text-center block shadow-md"
              >
                Kampüs Ziyaret Randevusu Al
              </button>
              <div className="text-center text-xs text-slate-500">
                Danışma: {INSTITUTION_INFO.phone}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
