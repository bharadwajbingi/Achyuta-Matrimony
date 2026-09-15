import type { ReactNode } from "react";
import { site, whatsappHref } from "@/config/site";
import { useLanguage } from "@/config/language";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function RegisterButton({
  children,
  className = "",
  variant = "solid",
}: {
  children?: ReactNode;
  className?: string;
  variant?: "solid" | "light";
}) {
  const { t } = useLanguage();
  const look =
    variant === "light"
      ? "bg-primary-foreground text-primary hover:bg-secondary"
      : "bg-primary text-primary-foreground hover:bg-primary-deep";
  return (
    <a
      href={site.registrationFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${look} ${className}`}
    >
      {children ?? t.cta.register}
    </a>
  );
}

export function WhatsAppButton({
  children,
  className = "",
  variant = "outline",
}: {
  children?: ReactNode;
  className?: string;
  variant?: "outline" | "light";
}) {
  const { t } = useLanguage();
  const look =
    variant === "light"
      ? "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
      : "border border-primary/30 text-primary hover:bg-secondary";
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${look} ${className}`}
    >
      <WhatsAppIcon />
      {children ?? t.cta.whatsapp}
    </a>
  );
}

export function WhatsAppIcon({ className = "h-[1.1em] w-[1.1em]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.76 2.67 4.25 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
