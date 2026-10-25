"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { X, CheckCircle2, Calendar, Phone, Mail, User, School, ArrowRight, ChevronDown } from "lucide-react";
import LeadFormAlert from "@/components/LeadFormAlert";
import { whatsappHref } from "@/lib/contact";
import { isLeadFormConfigured, submitLead, type LeadFormStatus } from "@/lib/submitLead";

const fieldClass =
  "w-full h-12 px-3.5 text-[15px] text-[#17263D] bg-white border border-slate-300 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow";
const selectClass = `${fieldClass} appearance-none pr-10 cursor-pointer`;
const labelClass = "block text-sm font-medium text-slate-800 mb-1.5";
const fieldIconClass = "w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none";

function Optional() {
  return <span className="font-normal text-slate-500"> (isteğe bağlı)</span>;
}

function SelectChevron() {
  return (
    <ChevronDown
      className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function AdmissionModal() {
  const { isAdmissionOpen, closeAdmission, selectedLevel } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState<LeadFormStatus>(isLeadFormConfigured ? "idle" : "unconfigured");
  const dialogRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    parentName: "",
    relationship: "Anne",
    phone: "",
    email: "",
    district: "",
    level: "Aurelia Preschool",
    gradeLevel: "",
    currentSchool: "",
    meetingPreference: "Kampüsü ziyaret etmek istiyorum",
    kvkkConsent: false,
    notificationConsent: false,
  });

  useEffect(() => {
    if (selectedLevel) {
      setFormData((prev) => ({ ...prev, level: selectedLevel }));
    }
  }, [selectedLevel]);

  // Lock body scroll, close on Escape, and move focus into the dialog while open
  useEffect(() => {
    if (!isAdmissionOpen) {
      setIsSubmitted(false);
      setStatus(isLeadFormConfigured ? "idle" : "unconfigured");
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("input, select, button")?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAdmission();
      // Keep Tab inside the dialog while it is open
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isAdmissionOpen, closeAdmission]);

  if (!isAdmissionOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLeadFormConfigured) return;
    setStatus("sending");
    try {
      await submitLead(e.currentTarget, `Randevu Talebi: ${formData.level}`);
      setIsSubmitted(true);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="t-modal-scrim fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0B1524]/70 backdrop-blur-sm"
      onClick={closeAdmission}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="admission-title"
        className="t-modal relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#0B1524] text-white px-6 py-6 sm:px-8 relative">
          <button
            type="button"
            onClick={closeAdmission}
            className="absolute top-4 right-4 size-11 inline-flex items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-ring-light"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
          <p className="text-sm text-slate-300 mb-1">2026–2027 kayıt dönemi</p>
          <h2 id="admission-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Ön Kayıt ve Kampüs Ziyaret Randevusu
          </h2>
          <p className="text-slate-300 text-sm mt-1 pr-10">
            Çocuğunuzun eğitim yolculuğunu birlikte planlayalım. Eğitim danışmanlarımız 24 saat içinde sizinle iletişime geçecektir.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-5" role="status">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#17263D]">
                  Başvurunuz Başarıyla Alındı
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Sayın <span className="font-semibold text-slate-800">{formData.parentName || "Velimiz"}</span>, ön kayıt ve randevu talebiniz kayıt kabul ofisimize iletilmiştir.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Seçilen Kademe:</span>
                  <span className="font-medium text-[#17263D]">{formData.level}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Görüşme Tercihi:</span>
                  <span className="font-medium text-[#17263D]">{formData.meetingPreference}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappHref("Merhaba, BCN Eğitim Kurumları için ön kayıt başvurusu yaptım. Bilgi almak istiyorum.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  WhatsApp&apos;tan Hızlı İletişim
                </a>
                <button
                  type="button"
                  onClick={closeAdmission}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors"
                >
                  Pencereyi Kapat
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <LeadFormAlert status={status} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                <div>
                  <label htmlFor="modal-parent" className={labelClass}>Veli adı soyadı *</label>
                  <div className="relative">
                    <User className={fieldIconClass} aria-hidden="true" />
                    <input id="modal-parent" name="parentName" autoComplete="name" type="text" required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Adınız ve soyadınız"
                      className={`${fieldClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-relationship" className={labelClass}>Yakınlık derecesi</label>
                  <div className="relative">
                    <select id="modal-relationship" name="relationship"
                      value={formData.relationship}
                      onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                      className={selectClass}
                    >
                      <option value="Anne">Anne</option>
                      <option value="Baba">Baba</option>
                      <option value="Vasi">Vasi</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                    <SelectChevron />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-phone" className={labelClass}>Telefon numarası *</label>
                  <div className="relative">
                    <Phone className={fieldIconClass} aria-hidden="true" />
                    <input id="modal-phone" name="phone" autoComplete="tel" inputMode="tel" type="tel" required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className={`${fieldClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-email" className={labelClass}>E-posta<Optional /></label>
                  <div className="relative">
                    <Mail className={fieldIconClass} aria-hidden="true" />
                    <input id="modal-email" name="email" autoComplete="email" type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ornek@email.com"
                      className={`${fieldClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-level" className={labelClass}>Başvurulan kademe *</label>
                  <div className="relative">
                    <School className={fieldIconClass} aria-hidden="true" />
                    <select id="modal-level" name="level"
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className={`${selectClass} pl-10`}
                    >
                      <option value="Aurelia Preschool">Aurelia Preschool (3-6 Yaş)</option>
                      <option value="İlkokul">İlkokul</option>
                      <option value="Ortaokul">Ortaokul</option>
                      <option value="Anadolu Lisesi">Anadolu Lisesi</option>
                      <option value="Fen Lisesi">Fen Lisesi</option>
                    </select>
                    <SelectChevron />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-grade" className={labelClass}>Sınıf veya yaş<Optional /></label>
                  <input id="modal-grade" name="gradeLevel" type="text"
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                    placeholder="Örn: 5 yaş, 1. sınıf, 9. sınıf"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="modal-district" className={labelClass}>İkamet ilçesi<Optional /></label>
                  <input id="modal-district" name="district" autoComplete="address-level2" type="text"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="Örn: Çekmeköy, Ümraniye"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="modal-meeting" className={labelClass}>Görüşme tercihi</label>
                  <div className="relative">
                    <Calendar className={fieldIconClass} aria-hidden="true" />
                    <select id="modal-meeting" name="meetingPreference"
                      value={formData.meetingPreference}
                      onChange={(e) => setFormData({ ...formData, meetingPreference: e.target.value })}
                      className={`${selectClass} pl-10`}
                    >
                      <option value="Kampüsü ziyaret etmek istiyorum">Kampüs ziyareti</option>
                      <option value="Tanışma randevusu talep ediyorum">Tanışma randevusu</option>
                      <option value="Online görüşme talep ediyorum">Online görüşme</option>
                    </select>
                    <SelectChevron />
                  </div>
                </div>
              </div>

              {/* Consents */}
              <div className="pt-4 space-y-1 border-t border-slate-200">
                <label className="flex items-start gap-3 min-h-11 py-1 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="kvkkConsent"
                    required
                    checked={formData.kvkkConsent}
                    onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                    className="mt-0.5 size-5 shrink-0 rounded border-slate-400 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span>
                    Paylaştığım bilgilerin kayıt ve kabul süreci kapsamında{" "}
                    <a href="/kayit-ve-kabul#kvkk" target="_blank" rel="noreferrer" className="font-semibold text-[#1E3A8A] underline underline-offset-2">
                      KVKK Aydınlatma Metni
                    </a>{" "}
                    uyarınca işlenmesini kabul ediyorum. *
                  </span>
                </label>
                <label className="flex items-start gap-3 min-h-11 py-1 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="notificationConsent"
                    checked={formData.notificationConsent}
                    onChange={(e) => setFormData({ ...formData, notificationConsent: e.target.checked })}
                    className="mt-0.5 size-5 shrink-0 rounded border-slate-400 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span>BCN Eğitim Kurumları&apos;nın beni bilgilendirmesine onay veriyorum.</span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={status === "sending" || status === "unconfigured"}
                  className="disabled:opacity-50 disabled:cursor-not-allowed w-full h-12 px-6 rounded-xl bg-[#0B1524] hover:bg-[#1E3A8A] text-white font-semibold text-[15px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{status === "sending" ? "Gönderiliyor…" : "Ön Kayıt Talebini Gönder"}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
