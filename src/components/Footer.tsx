import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { INSTITUTION_INFO } from "@/data/bcnData";
import { PHONE_HREF, whatsappHref } from "@/lib/contact";

const LEVEL_LINKS = [
  { href: "/kademeler/aurelia-preschool", label: "Aurelia Preschool (3-6 Yaş)" },
  { href: "/kademeler/ilkokul", label: "İlkokul" },
  { href: "/kademeler/ortaokul", label: "Ortaokul" },
  { href: "/kademeler/anadolu-lisesi", label: "Anadolu Lisesi" },
  { href: "/kademeler/fen-lisesi", label: "Fen Lisesi" },
];

// Same four programmes as the home page cards
const PROGRAM_LINKS = [
  "IB Primary Years (PYP)",
  "Kanada Çift Diploma (OSSD)",
  "Advanced Placement (AP)",
  "Model United Nations & Erasmus+",
];

const CORPORATE_LINKS = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/lider-ekibimiz", label: "Lider Ekibimiz" },
  { href: "/misyon-ve-vizyon", label: "Misyon ve Vizyon" },
  { href: "/egitim-modelimiz", label: "Eğitim Modelimiz" },
  { href: "/kampusumuz", label: "Kampüsümüz" },
  { href: "/basarilarimiz", label: "Başarılarımız" },
  { href: "/kayit-ve-kabul", label: "Kayıt ve Kabul" },
  { href: "/haberler-ve-duyurular", label: "Haberler ve Duyurular" },
];

const SOCIALS = [
  { href: INSTITUTION_INFO.socials.instagram, label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { href: INSTITUTION_INFO.socials.facebook, label: "Facebook", d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
  { href: INSTITUTION_INFO.socials.linkedin, label: "LinkedIn", d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" },
];

const linkClass = "block py-1.5 text-sm text-slate-300 hover:text-white transition-colors";
const headingClass = "text-sm font-semibold text-white";

export default function Footer() {
  return (
    <footer className="bg-[#0B1524] text-white pt-16 sm:pt-20 pb-28 sm:pb-32 lg:pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
          {/* Identity & contact */}
          <div className="col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <Image src="/images/bcn/logo-crest.png" alt="" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <span className="font-brand font-semibold text-xl tracking-[0.06em] text-white block">BCN COLLEGE</span>
                <span className="text-sm text-slate-400 block">BCN Eğitim Kurumları, Madenler kampüsü</span>
              </div>
            </div>

            <div className="text-sm text-slate-300 leading-relaxed max-w-sm">
              <p>{INSTITUTION_INFO.address}</p>
              <a
                href={INSTITUTION_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 min-h-11 font-semibold text-white hover:text-slate-300 transition-colors"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Yol tarifi al
              </a>
            </div>

            <ul className="text-sm text-slate-300">
              <li>
                <a href={PHONE_HREF} className="inline-flex items-center gap-3 min-h-11 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  {INSTITUTION_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref("Merhaba, BCN Eğitim Kurumları hakkında bilgi almak istiyorum.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 min-h-11 hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-slate-400 shrink-0" />
                  WhatsApp ile yazın
                </a>
              </li>
              <li>
                <a href={`mailto:${INSTITUTION_INFO.email}`} className="inline-flex items-center gap-3 min-h-11 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  {INSTITUTION_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 py-3">
                <Clock className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" aria-hidden="true" />
                <span>{INSTITUTION_INFO.workingHours}</span>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Eğitim kademeleri" className="space-y-3">
            <h2 className={headingClass}>Eğitim Kademeleri</h2>
            <ul>
              {LEVEL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/kademeler" className="inline-flex items-center gap-1.5 min-h-11 text-sm font-semibold text-white hover:text-slate-300 transition-colors">
                  Tüm kademeler <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Uluslararası programlar" className="space-y-3">
            <h2 className={headingClass}>Uluslararası Programlar</h2>
            <ul>
              {PROGRAM_LINKS.map((label) => (
                <li key={label}>
                  <Link href="/uluslararasi-programlar" className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Kurumsal" className="col-span-2 lg:col-span-1 space-y-3">
            <h2 className={headingClass}>Kurumsal</h2>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-6">
              {CORPORATE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal & copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-slate-400">
          <p>© 2026 BCN Eğitim Kurumları. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-x-6">
            <Link href="/kayit-ve-kabul#kvkk" className="inline-flex items-center min-h-11 hover:text-slate-200 transition-colors">Aydınlatma Metni (KVKK)</Link>
            <Link href="/kayit-ve-kabul#kvkk" className="inline-flex items-center min-h-11 hover:text-slate-200 transition-colors">Açık Rıza Metni</Link>
            <Link href="/kayit-ve-kabul#kvkk" className="inline-flex items-center min-h-11 hover:text-slate-200 transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
