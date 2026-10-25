"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  Compass,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { INSTITUTION_INFO, LEVELS, INTERNATIONAL_PROGRAMS } from "@/data/bcnData";
import { whatsappHref } from "@/lib/contact";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [closingMenu, setClosingMenu] = useState<string | null>(null);
  const hoverCloseTimer = useRef<number | null>(null);
  const [hasDarkHero, setHasDarkHero] = useState(false);
  const { openAdmission } = useModal();
  const pathname = usePathname();

  // Pages that open on a dark hero (marked data-hero="dark") get a transparent bar until scrolled
  useEffect(() => {
    // Read the DOM on the next frame, once the new route's markup is in place
    const frame = requestAnimationFrame(() => {
      setHasDarkHero(Boolean(document.querySelector('[data-hero="dark"]')));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  // Text and CTA colours stay fixed; only the bar's surface changes: clear over a dark hero, frosted navy otherwise
  const overHero = hasDarkHero && !isScrolled && !mobileMenuOpen;
  const navItemTone = "text-white hover:bg-white/10 focus-ring-light";

  // Mega-menus use the transitions.dev dropdown: .is-open to grow in, .is-closing while it fades out
  const setMenu = (next: string | null) => {
    if (hoverCloseTimer.current) {
      window.clearTimeout(hoverCloseTimer.current);
      hoverCloseTimer.current = null;
    }
    if (activeMegaMenu && activeMegaMenu !== next) {
      const closing = activeMegaMenu;
      const closeMs =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--dropdown-close-dur")) || 150;
      setClosingMenu(closing);
      window.setTimeout(() => setClosingMenu((current) => (current === closing ? null : current)), closeMs);
    }
    setActiveMegaMenu(next);
  };

  // Short grace period so moving the pointer between triggers doesn't flash the menus
  const scheduleMenuClose = () => {
    hoverCloseTimer.current = window.setTimeout(() => setMenu(null), 120);
  };

  const dropdownState = (key: string) =>
    activeMegaMenu === key ? "is-open" : closingMenu === key ? "is-closing" : "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!activeMegaMenu && !mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMegaMenu, mobileMenuOpen]);

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
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" aria-hidden="true" />
            <span>2026 - 2027 Erken Kayıt & Kabul Dönemi</span>
          </div>
        </div>
      </div>

      {/* Main Navbar: Clean, Sticky & Minimal Luxury */}
      <div
        className={`w-full py-3.5 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
          overHero
            ? "bg-transparent border-transparent"
            : "bg-[#0B1524]/95 backdrop-blur-[16px] border-white/[0.08]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" aria-label="BCN College ana sayfa" className="flex items-center gap-2.5 sm:gap-3 group">
              <Image
                src="/images/bcn/logo-crest.png"
                alt=""
                width={44}
                height={44}
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain group-hover:scale-103 transition-transform duration-300"
                priority
              />
              <span className="font-brand font-semibold text-lg sm:text-xl tracking-[0.08em] whitespace-nowrap text-white">
                BCN COLLEGE
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            {/* Logo links home, so the desktop menu starts at Kurumsal; items sit on a 32px rhythm */}
            <nav aria-label="Ana menü" className="hidden xl:flex ml-auto items-center gap-2">
              {/* Kurumsal Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMenu("kurumsal")}
                onMouseLeave={scheduleMenuClose}
              >
                <button
                  type="button"
                  onClick={() => setMenu(activeMegaMenu === "kurumsal" ? null : "kurumsal")}
                  aria-expanded={activeMegaMenu === "kurumsal"}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-3 py-2 whitespace-nowrap text-sm font-medium rounded-lg transition-colors cursor-pointer ${navItemTone}`}
                >
                  <span>Kurumsal</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "kurumsal" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  data-origin="top-left"
                  inert={activeMegaMenu !== "kurumsal"}
                  className={`t-dropdown ${dropdownState("kurumsal")} absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5`}
                >
                  <div className="space-y-1">
                    <Link
                      href="/hakkimizda"
                      onClick={() => setMenu(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-blue-50 text-[#1E3A8A]">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#17263D]">Hakkımızda</div>
                        <div className="text-xs text-slate-500">Tarihçe ve kurucu vizyonu</div>
                      </div>
                    </Link>

                    <Link
                      href="/misyon-ve-vizyon"
                      onClick={() => setMenu(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
                        <Compass className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#17263D]">Misyon & Vizyon</div>
                        <div className="text-xs text-slate-500">Zihinsel disiplin inşası</div>
                      </div>
                    </Link>

                    <Link
                      href="/lider-ekibimiz"
                      onClick={() => setMenu(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#17263D]">Lider Ekibimiz</div>
                        <div className="text-xs text-slate-500">Adem Bican ve yönetim</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Kademeler Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMenu("kademeler")}
                onMouseLeave={scheduleMenuClose}
              >
                <button
                  type="button"
                  onClick={() => setMenu(activeMegaMenu === "kademeler" ? null : "kademeler")}
                  aria-expanded={activeMegaMenu === "kademeler"}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-3 py-2 whitespace-nowrap text-sm font-medium rounded-lg transition-colors cursor-pointer ${navItemTone}`}
                >
                  <span>Kademeler</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "kademeler" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  data-origin="top-left"
                  inert={activeMegaMenu !== "kademeler"}
                  className={`t-dropdown ${dropdownState("kademeler")} absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3`}
                >
                  <div className="space-y-1">
                    {LEVELS.map((lvl) => (
                      <Link
                        key={lvl.id}
                        href={`/kademeler/${lvl.slug}`}
                        onClick={() => setMenu(null)}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#17263D]">{lvl.name}</div>
                          <div className="text-xs text-slate-500">{lvl.subtitle}</div>
                        </div>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {lvl.ageGroup}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <Link
                      href="/kademeler"
                      onClick={() => setMenu(null)}
                      className="text-xs font-semibold text-[#1E3A8A] hover:underline flex items-center justify-between px-2"
                    >
                      <span>Tüm Kademeleri İncele</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Uluslararası Programlar Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMenu("uluslararasi")}
                onMouseLeave={scheduleMenuClose}
              >
                <button
                  type="button"
                  onClick={() => setMenu(activeMegaMenu === "uluslararasi" ? null : "uluslararasi")}
                  aria-expanded={activeMegaMenu === "uluslararasi"}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-3 py-2 whitespace-nowrap text-sm font-medium rounded-lg transition-colors cursor-pointer ${navItemTone}`}
                >
                  <span>Uluslararası Programlar</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "uluslararasi" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  data-origin="top-left"
                  inert={activeMegaMenu !== "uluslararasi"}
                  className={`t-dropdown ${dropdownState("uluslararasi")} absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3`}
                >
                  <div className="space-y-1">
                    {INTERNATIONAL_PROGRAMS.slice(0, 4).map((prog) => (
                      <Link
                        key={prog.id}
                        href="/uluslararasi-programlar"
                        onClick={() => setMenu(null)}
                        className="p-2 rounded-xl hover:bg-slate-50 transition-colors block"
                      >
                        <div className="text-xs font-semibold text-amber-700 uppercase">
                          {prog.badge}
                        </div>
                        <div className="text-xs font-bold text-[#17263D]">{prog.shortTitle}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <Link
                      href="/uluslararasi-programlar"
                      onClick={() => setMenu(null)}
                      className="text-xs font-semibold text-[#1E3A8A] hover:underline flex items-center justify-between px-2"
                    >
                      <span>Tüm Uluslararası Ağımız</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/egitim-modelimiz"
                className={`px-3 py-2 whitespace-nowrap text-sm font-medium rounded-lg transition-colors ${navItemTone}`}
              >
                Eğitim Modelimiz
              </Link>

              <Link
                href="/kampusumuz"
                className={`px-3 py-2 whitespace-nowrap text-sm font-medium rounded-lg transition-colors ${navItemTone}`}
              >
                Kampüsümüz
              </Link>

              <Link
                href="/iletisim"
                className={`px-3 py-2 whitespace-nowrap text-sm font-medium rounded-lg transition-colors ${navItemTone}`}
              >
                İletişim
              </Link>
            </nav>

            {/* Desktop Single Distinct CTA */}
            <div className="hidden xl:flex ml-5 items-center gap-2">
              <a
                href={whatsappHref("Merhaba, BCN Eğitim Kurumları hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp ile yazın"
                title="WhatsApp ile yazın"
                className="size-10 inline-flex items-center justify-center rounded-xl border border-white/25 text-white hover:bg-white/10 hover:border-white/50 transition-colors focus-ring-light"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </a>
              <button
                type="button"
                onClick={() => openAdmission()}
                className="inline-flex items-center h-10 px-5 whitespace-nowrap rounded-xl bg-white text-[#17263D] text-xs font-bold tracking-wide hover:bg-slate-100 transition-colors cursor-pointer focus-ring-light"
              >
                Randevu Alın
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={whatsappHref("Merhaba, BCN Eğitim Kurumları hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp ile yazın"
                title="WhatsApp ile yazın"
                className="hidden sm:inline-flex size-11 items-center justify-center rounded-xl border border-white/25 text-white hover:bg-white/10 hover:border-white/50 transition-colors focus-ring-light"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </a>
              <button
                type="button"
                onClick={() => openAdmission()}
                className="min-h-11 px-3.5 whitespace-nowrap rounded-xl bg-white text-[#17263D] text-xs font-bold transition-colors focus-ring-light"
              >
                Randevu Al
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="size-11 inline-flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors focus-ring-light"
                aria-label="Menü"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[58px] md:top-[89px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-100 p-5 space-y-4 animate-fadeIn">
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
              <a
                href={whatsappHref("Merhaba, BCN Eğitim Kurumları hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noreferrer"
                className="w-full min-h-11 rounded-xl border border-slate-200 text-[#17263D] font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-slate-50"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp ile yazın
              </a>
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
