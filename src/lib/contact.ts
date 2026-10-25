import { INSTITUTION_INFO } from "@/data/bcnData";

// "+90 552 051 23 36" -> "905520512336"
const WHATSAPP_NUMBER = INSTITUTION_INFO.phoneFormatted.replace(/\D/g, "");

export const PHONE_HREF = `tel:${INSTITUTION_INFO.phoneFormatted.replace(/\s+/g, "")}`;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
