import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { copy, type Lang } from "./site";

const STORAGE_KEY = "achyuta-lang";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof copy)["te"];
}>({ lang: "te", setLang: () => {}, t: copy.te });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("te");

  // Read the saved preference after hydration to avoid a server/client mismatch.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "te") setLangState(saved);
    } catch {
      // Ignore storage access errors (e.g. Incognito or blocked storage)
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "te" ? "te" : "en";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // Ignore storage write errors
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: copy[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageToggle({ tone = "ink" }: { tone?: "ink" | "light" }) {
  const { lang, setLang } = useLanguage();
  const border = tone === "light" ? "border-primary-foreground/40" : "border-border";

  const item = (value: Lang, label: string, shortLabel: string) => {
    const active = lang === value;
    const activeLook =
      tone === "light"
        ? "bg-primary-foreground text-primary"
        : "bg-primary text-primary-foreground";
    const idleLook =
      tone === "light" ? "text-primary-foreground/80" : "text-muted-foreground hover:text-primary";
    return (
      <button
        type="button"
        onClick={() => setLang(value)}
        aria-pressed={active}
        aria-label={label}
        className={`px-3 py-1.5 text-sm transition-colors ${active ? activeLook : idleLook}`}
      >
        <span className="hidden sm:inline">{label}</span>
        <span className="sm:hidden" aria-hidden="true">
          {shortLabel}
        </span>
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label="Language / భాష"
      className={`inline-flex shrink-0 overflow-hidden rounded-sm border ${border}`}
    >
      {item("te", "తెలుగు", "తె")}
      {item("en", "English", "E")}
    </div>
  );
}
