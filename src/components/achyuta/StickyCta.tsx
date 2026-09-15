import { site, whatsappHref } from "@/config/site";
import { useLanguage } from "@/config/language";
import { WhatsAppIcon } from "./Actions";

export function StickyCta() {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 text-[0.95rem] font-medium text-primary"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a
        href={site.registrationFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-primary py-4 text-[0.95rem] font-medium text-primary-foreground"
      >
        {t.cta.registerShort}
      </a>
    </div>
  );
}
