import { createFileRoute } from "@tanstack/react-router";

import { AchyutaLogo } from "@/components/brand/logo";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "అచ్యుత Matrimony — Logo" },
      {
        name: "description",
        content:
          "The అచ్యుత Matrimony logo: a custom Telugu wordmark in deep burgundy on warm ivory.",
      },
      { property: "og:title", content: "అచ్యుత Matrimony — Logo" },
      {
        property: "og:description",
        content: "A custom Telugu wordmark in deep burgundy on warm ivory.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LogoPage,
});

function LogoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <h1 className="sr-only">అచ్యుత Matrimony logo</h1>
      <AchyutaLogo size="lg" className="text-primary" />
    </main>
  );
}
