import { useState } from "react";
import { site } from "@/config/site";
import { LanguageToggle, useLanguage } from "@/config/language";
import { Brand } from "./Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5 md:px-8">
        <a href="#home" aria-label={`${site.brand.fullEn} — home`}>
          <Brand size="sm" script="latin" />
        </a>

        <nav aria-label={t.cta.menu} className="hidden items-center gap-7 lg:flex">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={site.registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-primary px-5 py-2.5 text-[0.95rem] font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            {t.cta.registerShort}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t.cta.menu}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-sm text-primary"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav aria-label={t.cta.menu} className="mx-auto max-w-6xl px-5 py-3">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3.5 text-lg text-foreground/90 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
