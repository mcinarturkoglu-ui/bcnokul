"use client";

import React, { useState } from "react";
import SubpageHero from "@/components/SubpageHero";
import { INSTITUTION_INFO } from "@/data/bcnData";
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Genel Bilgi Talebi",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <>
      <SubpageHero
        badge="İletişim & Ulaşım"
        title="Bize Ulaşın"
        subtitle="Madenler / Çekmeköy Kampüsümüz hakkında sorularınız, randevu ve kayıt talepleriniz için buradayız."
        bgImage="/images/bcn/campus-entrance.jpg"
        breadcrumbs={[{ label: "İletişim" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#17263D]">Telefon Hattımız</h3>
              <p className="text-xs text-slate-500">
                Pazartesi - Cumartesi mesai saatleri içinde bize doğrudan ulaşabilirsiniz.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-base font-extrabold text-[#1E3A8A] hover:underline"
                >
                  {INSTITUTION_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#17263D]">E-Posta Adresimiz</h3>
              <p className="text-xs text-slate-500">
                Resmi kurumsal yazışmalar ve bilgi talepleriniz için yazabilirsiniz.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${INSTITUTION_INFO.email}`}
                  className="text-sm font-bold text-[#1E3A8A] hover:underline truncate block"
                >
                  {INSTITUTION_INFO.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#17263D]">Kampüs Adresi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {INSTITUTION_INFO.address}
              </p>
              <div className="pt-2">
                <a
                  href={INSTITUTION_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps'te Yol Tarifi</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form and Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Side */}
            <div className="lg:col-span-6 bg-[#F7F8FA] p-8 sm:p-10 rounded-3xl border border-slate-200/80">
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  BİZE MESAJ GÖNDERİN
                </span>
                <h3 className="text-2xl font-extrabold text-[#17263D]">
                  İletişim Formu
                </h3>
                <p className="text-xs text-slate-500">
                  Sorularınızı ve görüşlerinizi iletin, uzman ekibimiz en kısa sürede dönüş yapsın.
                </p>
              </div>

              {isSent ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#17263D]">Mesajınız İletildi</h4>
                  <p className="text-xs text-slate-500">
                    En kısa sürede e-posta veya telefon yoluyla yanıt verilecektir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="Adınız Soyadınız"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        E-Posta *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="email@ornek.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Konu
                    </label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    >
                      <option value="Genel Bilgi Talebi">Genel Bilgi Talebi</option>
                      <option value="Kayıt & Bursluluk">Kayıt & Bursluluk</option>
                      <option value="Kampüs Ziyareti">Kampüs Ziyareti</option>
                      <option value="İnsan Kaynakları & Kariyer">İnsan Kaynakları & Kariyer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mesajınız *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Mesajınızı buraya yazabilirsiniz..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white font-bold text-sm transition-colors"
                  >
                    Mesajı Gönder
                  </button>
                </form>
              )}
            </div>

            {/* Map & Transit Guide */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#17263D] text-white p-8 rounded-3xl space-y-4">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                  ULAŞIM VE LOKASYON
                </span>
                <h3 className="text-xl font-bold">Nasıl Ulaşabilirsiniz?</h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span><strong>Metro:</strong> M5 Üsküdar-Çekmeköy Metro Hattı Madenler / Çekmeköy istasyonuna kısa yürüme mesafesinde.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span><strong>Özel Araç:</strong> Şile Otoyolu Madenler kavşağından İdealist Kent Caddesi çıkışı ile kolay erişim.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span><strong>Okul Servisi:</strong> İstanbul Anadolu yakasındaki tüm semtlere güvenli, GPS takipli servis filomuz mevcuttur.</span>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <div>
                    <div className="font-bold text-[#17263D]">Ziyaret Saatleri</div>
                    <div className="text-slate-500 text-xs">{INSTITUTION_INFO.workingHours}</div>
                  </div>
                </div>
                <a
                  href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
                  className="px-4 py-2 rounded-xl bg-[#17263D] text-white font-bold text-xs"
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
