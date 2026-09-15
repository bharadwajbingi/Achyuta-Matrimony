import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/achyuta/Header";
import { Hero } from "@/components/achyuta/Hero";
import { StickyCta } from "@/components/achyuta/StickyCta";
import {
  Contact,
  Faq,
  FamilyTrust,
  Footer,
  HowItWorks,
  Membership,
  RegisterCta,
  Stories,
  WhoCanRegister,
  WhyAchyuta,
} from "@/components/achyuta/Sections";
import { LanguageProvider } from "@/config/language";
import { copy, site } from "@/config/site";

const title = "Achyuta Matrimony | Telugu Matrimony for Telugu Families";
const description =
  "అచ్యుత మ్యాట్రిమోనీ — తెలుగు కుటుంబాల కోసం వ్యక్తిగత శ్రద్ధతో అందించే వివాహ పరిచయ సేవ. ప్రొఫైల్ నమోదు చేసుకోండి లేదా వాట్సాప్‌లో మాట్లాడండి.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.brand.fullEn,
          alternateName: "అచ్యుత మ్యాట్రిమోనీ",
          description,
          areaServed: "Andhra Pradesh, Telangana",
          email: site.email,
          telephone: site.phone,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: copy.te.faq.items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <FamilyTrust />
          <WhoCanRegister />
          <HowItWorks />
          <WhyAchyuta />
          <RegisterCta />
          <Membership />
          <Stories />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <StickyCta />
      </div>
    </LanguageProvider>
  );
}
