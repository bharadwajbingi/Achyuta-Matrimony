import jali from "@/assets/jali-texture.jpg";
import { useLanguage } from "@/config/language";
import { Brand } from "./Brand";
import { RegisterButton, WhatsAppButton } from "./Actions";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden">
      <img
        src={jali}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1200}
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 object-cover opacity-25 [mask-image:linear-gradient(to_left,black,transparent)] md:block"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24">
        <div className="fade-up max-w-2xl">
          <p className="eyebrow text-muted-foreground">{t.hero.eyebrow}</p>

          <h1 className="mt-6">
            <span className="sr-only">{t.hero.srTitle}</span>
            <span aria-hidden="true">
              <Brand size="xl" mark={false} />
            </span>
          </h1>

          <div className="mt-9 h-px w-16 bg-primary/40" />

          <p className="mt-7 text-2xl leading-snug text-foreground sm:text-3xl">
            {t.hero.line1}
            <br className="hidden sm:block" /> {t.hero.line2}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.hero.sub}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <RegisterButton />
            <WhatsAppButton />
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{t.hero.region}</p>
        </div>
      </div>
    </section>
  );
}
