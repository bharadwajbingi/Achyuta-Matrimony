import family from "@/assets/family.jpg";
import { site, whatsappHref } from "@/config/site";
import { useLanguage } from "@/config/language";
import { RegisterButton, WhatsAppButton, WhatsAppIcon } from "./Actions";
import { Brand } from "./Brand";

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-snug text-foreground sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function FamilyTrust() {
  const { t } = useLanguage();
  return (
    <section id="about" className="rule-soft bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16 md:px-8 md:py-24">
        <div>
          <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.about.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.about.p2}</p>
        </div>
        <figure className="relative">
          <img
            src={family}
            alt={t.about.imgAlt}
            loading="lazy"
            width={1200}
            height={1408}
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

export function WhoCanRegister() {
  const { t } = useLanguage();
  return (
    <section className="rule-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHead eyebrow={t.who.eyebrow} title={t.who.title} />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.who.items.map((item) => (
            <li key={item} className="bg-background p-6">
              <p className="text-lg text-foreground">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="how" className="rule-soft bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow text-primary-foreground/60">{t.how.eyebrow}</p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-snug sm:text-4xl">{t.how.title}</h2>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.how.steps.map((s) => (
            <li key={s.no} className="border-t border-primary-foreground/25 pt-5">
              <span className="latin text-sm tracking-widest text-primary-foreground/60">{s.no}</span>
              <h3 className="mt-3 text-xl text-primary-foreground">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-primary-foreground/75">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyAchyuta() {
  const { t } = useLanguage();
  return (
    <section className="rule-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHead eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {t.why.points.map((p) => (
            <article key={p.title} className="bg-background p-7">
              <h3 className="text-xl text-primary">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Membership() {
  const { t } = useLanguage();
  return (
    <section id="membership" className="rule-soft bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHead
          eyebrow={t.membership.eyebrow}
          title={t.membership.title}
          sub={t.membership.sub}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {t.membership.plans.map((plan) => (
            <article
              key={plan.tag}
              className={`rounded-sm border bg-background p-8 ${
                plan.highlight ? "border-primary" : "border-border"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl text-foreground">{plan.name}</h3>
                <span className="latin text-xs tracking-widest text-muted-foreground">{plan.tag}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{plan.duration}</p>
              <p className="latin mt-6 text-4xl font-medium text-primary">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-muted-foreground">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-3 shrink-0 bg-primary/50" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <RegisterButton className="mt-8 w-full">{t.cta.choosePlan}</RegisterButton>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{t.membership.note}</p>
      </div>
    </section>
  );
}

export function RegisterCta() {
  const { t } = useLanguage();
  return (
    <section id="register" className="rule-soft bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="text-3xl leading-snug sm:text-4xl">{t.register.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">{t.register.sub}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <RegisterButton variant="light" />
          <WhatsAppButton variant="light">{t.cta.whatsappAlt}</WhatsAppButton>
        </div>
        <p className="mt-7 text-sm text-primary-foreground/70">{t.register.privacy}</p>
      </div>
    </section>
  );
}

export function Stories() {
  const { t } = useLanguage();
  return (
    <section className="rule-soft">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="rounded-sm border border-dashed border-border p-10 text-center">
          <p className="eyebrow text-muted-foreground">{t.stories.eyebrow}</p>
          <p className="mt-4 text-2xl text-foreground">{t.stories.title}</p>
          <p className="mt-3 text-muted-foreground">{t.stories.sub}</p>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="rule-soft">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="mt-10 border-t border-border">
          {t.faq.items.map((f) => (
            <details key={f.q} className="group border-b border-border py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg text-foreground marker:hidden">
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-2 shrink-0 text-primary transition-transform group-open:rotate-45"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 pr-8 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="rule-soft bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHead eyebrow={t.contact.eyebrow} title={t.contact.title} sub={t.contact.sub} />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background p-6 transition-colors hover:bg-secondary"
          >
            <span className="eyebrow text-muted-foreground">WhatsApp</span>
            <span className="mt-3 flex items-center gap-2 text-lg text-primary">
              <WhatsAppIcon />
              {site.phone}
            </span>
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="bg-background p-6 transition-colors hover:bg-secondary"
          >
            <span className="eyebrow text-muted-foreground">{t.contact.phone}</span>
            <span className="latin mt-3 block text-lg text-primary">{site.phone}</span>
          </a>
          <a href={`mailto:${site.email}`} className="bg-background p-6 transition-colors hover:bg-secondary">
            <span className="eyebrow text-muted-foreground">{t.contact.email}</span>
            <span className="latin mt-3 block break-all text-lg text-primary">{site.email}</span>
          </a>
          <div className="bg-background p-6">
            <span className="eyebrow text-muted-foreground">{t.contact.social}</span>
            <span className="mt-3 flex gap-4">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="latin text-lg text-primary hover:underline"
              >
                Instagram
              </a>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="latin text-lg text-primary hover:underline"
              >
                Facebook
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="rule-soft bg-background pb-20 lg:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Brand size="lg" />
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <nav aria-label="Footer" className="grid gap-3">
            {t.footer.links.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="latin mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.brand.fullEn}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
