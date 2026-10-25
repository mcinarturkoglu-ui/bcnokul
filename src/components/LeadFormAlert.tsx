import { AlertCircle, Phone } from "lucide-react";
import { INSTITUTION_INFO } from "@/data/bcnData";
import { PHONE_HREF, whatsappHref } from "@/lib/contact";
import type { LeadFormStatus } from "@/lib/submitLead";

// Shown when a form could not be delivered, so the parent can still reach the school.
export default function LeadFormAlert({ status }: { status: LeadFormStatus }) {
  if (status !== "error" && status !== "unconfigured") return null;

  return (
    <div
      role="alert"
      className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
    >
      <AlertCircle className="w-5 h-5 shrink-0 text-amber-700" aria-hidden="true" />
      <div className="space-y-2">
        <p>
          {status === "error"
            ? "Mesajınız şu anda iletilemedi. Lütfen tekrar deneyin ya da bize doğrudan ulaşın."
            : "Çevrim içi form şu anda kullanılamıyor. Lütfen bize doğrudan ulaşın."}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-semibold">
          <a href={PHONE_HREF} className="inline-flex items-center gap-1.5 min-h-11 underline underline-offset-2">
            <Phone className="w-4 h-4" aria-hidden="true" />
            {INSTITUTION_INFO.phone}
          </a>
          <a
            href={whatsappHref("Merhaba, BCN Eğitim Kurumları hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center min-h-11 underline underline-offset-2"
          >
            WhatsApp ile yazın
          </a>
        </div>
      </div>
    </div>
  );
}
