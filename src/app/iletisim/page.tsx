"use client";

import React, { useState } from "react";
import SubpageHero from "@/components/SubpageHero";
import LeadFormAlert from "@/components/LeadFormAlert";
import { INSTITUTION_INFO } from "@/data/bcnData";
import { isLeadFormConfigured, submitLead, type LeadFormStatus } from "@/lib/submitLead";
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_HREF, whatsappHref } from "@/lib/contact";
import { fieldClass, selectClass, textareaClass, labelClass, Optional, SelectChevron } from "@/components/form/fields";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const [status, setStatus] = useState<LeadFormStatus>(isLeadFormConfigured ? "idle" : "unconfigured");
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Genel Bilgi Talebi",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLeadFormConfigured) return;
    setStatus("sending");
    try {
      await submitLead(e.currentTarget, `İletişim Formu: ${contactData.subject}`);
      setIsSent(true);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SubpageHero
        badge="İletişim & Ulaşım"
        title="Bize Ulaşın"
        subtitle="Madenler / Çekmeköy Kampüsümüz hakkında sorularınız, randevu ve kayıt talepleriniz için buradayız."
        bgImage="/images/bcn/campus-gate-exterior.jpg"
        breadcrumbs={[{ label: "İletişim" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Quick contact: three plain columns, one action each */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            <div className="border-t-2 border-[#0B1524] pt-5 space-y-2">
              <Phone className="w-5 h-5 text-slate-500" aria-hidden="true" />
              <h2 className="text-lg font-bold text-[#17263D]">Telefon</h2>
              <p className="text-sm text-slate-600">Pazartesi - Cumartesi mesai saatleri içinde bize doğrudan ulaşabilirsiniz.</p>
              <div className="flex flex-wrap gap-x-5">
                <a href={PHONE_HREF} className="inline-flex items-center min-h-11 text-base font-bold text-[#1E3A8A] hover:underline">
                  {INSTITUTION_INFO.phone}
                </a>
                <a
                  href={whatsappHref("Merhaba, BCN Eğitim Kurumları hakkında bilgi almak istiyorum.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-11 text-sm font-semibold text-[#1E3A8A] hover:underline"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="border-t-2 border-[#0B1524] pt-5 space-y-2">
              <Mail className="w-5 h-5 text-slate-500" aria-hidden="true" />
              <h2 className="text-lg font-bold text-[#17263D]">E-posta</h2>
              <p className="text-sm text-slate-600">Resmi kurumsal yazışmalar ve bilgi talepleriniz için yazabilirsiniz.</p>
              <a href={`mailto:${INSTITUTION_INFO.email}`} className="inline-flex items-center min-h-11 text-base font-bold text-[#1E3A8A] hover:underline break-all">
                {INSTITUTION_INFO.email}
              </a>
            </div>

            <div className="border-t-2 border-[#0B1524] pt-5 space-y-2">
              <MapPin className="w-5 h-5 text-slate-500" aria-hidden="true" />
              <h2 className="text-lg font-bold text-[#17263D]">Kampüs adresi</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{INSTITUTION_INFO.address}</p>
              <a
                href={INSTITUTION_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center min-h-11 gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:underline"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Google Maps&apos;te yol tarifi
              </a>
            </div>
          </div>

          {/* Contact form and how to get here */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="space-y-2 mb-8">
                <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Bize mesaj gönderin</p>
                <h2 className="text-2xl font-extrabold text-[#17263D]">İletişim Formu</h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Sorularınızı ve görüşlerinizi iletin, uzman ekibimiz en kısa sürede dönüş yapsın.
                </p>
              </div>

              {isSent ? (
                <div className="py-8 text-center space-y-3" role="status">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#17263D]">Mesajınız iletildi</h3>
                  <p className="text-sm text-slate-600">En kısa sürede e-posta veya telefon yoluyla yanıt verilecektir.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <LeadFormAlert status={status} />
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>Adınız soyadınız *</label>
                    <input id="contact-name" name="name" autoComplete="name" type="text" required
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="Adınız ve soyadınız"
                      className={fieldClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>E-posta *</label>
                      <input id="contact-email" name="email" autoComplete="email" type="email" required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="ornek@email.com"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className={labelClass}>Telefon<Optional /></label>
                      <input id="contact-phone" name="phone" autoComplete="tel" inputMode="tel" type="tel"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className={labelClass}>Konu</label>
                    <div className="relative">
                      <select id="contact-subject" name="subject"
                        value={contactData.subject}
                        onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                        className={selectClass}
                      >
                        <option value="Genel Bilgi Talebi">Genel bilgi talebi</option>
                        <option value="Kayıt & Bursluluk">Kayıt ve bursluluk</option>
                        <option value="Kampüs Ziyareti">Kampüs ziyareti</option>
                        <option value="İnsan Kaynakları & Kariyer">İnsan kaynakları ve kariyer</option>
                      </select>
                      <SelectChevron />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>Mesajınız *</label>
                    <textarea id="contact-message" name="message" required rows={4}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Mesajınızı buraya yazabilirsiniz"
                      className={textareaClass}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending" || status === "unconfigured"}
                    className="w-full h-12 rounded-xl bg-[#0B1524] hover:bg-[#1E3A8A] text-white font-semibold text-[15px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Gönderiliyor…" : "Mesajı Gönder"}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0B1524] text-white p-8 rounded-3xl space-y-4">
                <p className="text-sm font-semibold text-[#C59B27]">Ulaşım ve lokasyon</p>
                <h2 className="text-xl font-bold">Nasıl ulaşabilirsiniz?</h2>
                <ul className="space-y-3 text-sm text-slate-300 leading-relaxed list-disc pl-5 marker:text-slate-500">
                  <li><strong className="text-white">Metro:</strong> M5 Üsküdar-Çekmeköy Metro Hattı Madenler / Çekmeköy istasyonuna kısa yürüme mesafesinde.</li>
                  <li><strong className="text-white">Özel araç:</strong> Şile Otoyolu Madenler kavşağından İdealist Kent Caddesi çıkışı ile kolay erişim.</li>
                  <li><strong className="text-white">Okul servisi:</strong> İstanbul Anadolu yakasındaki tüm semtlere güvenli, GPS takipli servis filomuz mevcuttur.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 text-slate-500" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-[#17263D]">Ziyaret saatleri</div>
                    <div className="text-slate-600">{INSTITUTION_INFO.workingHours}</div>
                  </div>
                </div>
                <a href={PHONE_HREF} className="inline-flex items-center h-11 px-4 rounded-xl bg-[#0B1524] hover:bg-[#1E3A8A] text-white font-semibold text-sm transition-colors">
                  Hemen ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
