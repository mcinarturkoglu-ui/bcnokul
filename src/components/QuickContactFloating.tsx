import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappHref } from "@/lib/contact";

// On phones the header has no room for WhatsApp, so it floats bottom-right in the header's navy.
// From the sm breakpoint up it lives next to the "Randevu Al" button in the header instead.
export default function QuickContactFloating() {
  return (
    <a
      href={whatsappHref("Merhaba, BCN Eğitim Kurumları hakkında bilgi almak istiyorum.")}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile yazın"
      className="sm:hidden in-data-[ai-open=true]:hidden fixed bottom-6 right-4 z-40 size-13 inline-flex items-center justify-center rounded-full bg-[#17263D] border border-white/15 text-white shadow-xl focus-ring-light"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
}
