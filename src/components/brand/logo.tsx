/**
 * Achyuta Matrimony — the logo.
 *
 * Typography-first. The Telugu word అచ్యుత IS the identity: set heavy and
 * open, with tightened optical spacing and a fixed lockup.
 *
 * Below it runs a single hairline — the auspicious thread — broken at the
 * centre by a small knot. Looked at closely, that knot is drawn as a
 * one-line Ganesha: dome of the head, ear, curling trunk. Micro scale,
 * discovered second, never the hero. One colour throughout.
 */

/** The thread-and-knot rule. Inherits currentColor; one stroke weight. */
export function AchyutaThread({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 26"
      role="presentation"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      {/* thread */}
      <path d="M2 9 H84" />
      <path d="M116 9 H198" />
      {/* knot — one-line Ganesha */}
      <path d="M84 9 C84 2.5 89.5 1 94 1 C101 1 106 5 106 10.5" />
      <path d="M106 10.5 C106 16 102.5 20 98.5 20 C95 20 93 17.5 93.5 14.8 C94 12.4 97 11.8 98 13.6" />
      <path d="M116 9 C116 3.5 111.5 1.6 108 3.2 C105.4 4.4 104.6 7 105.6 9.2" />
    </svg>
  );
}

export function AchyutaLogo({
  size = "lg",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const word = { sm: "text-3xl", md: "text-5xl", lg: "text-[5.5rem]" }[size];
  const thread = { sm: "w-20", md: "w-32", lg: "w-52" }[size];
  const desc = { sm: "text-[0.5rem]", md: "text-[0.66rem]", lg: "text-[0.95rem]" }[size];
  const gap = { sm: "mt-1.5", md: "mt-2.5", lg: "mt-4" }[size];

  return (
    <div className={`inline-flex flex-col items-center ${className ?? ""}`}>
      <span
        className={`font-display font-semibold leading-[0.95] ${word}`}
        style={{ letterSpacing: "0.004em" }}
      >
        అచ్యుత
      </span>
      <AchyutaThread className={`${gap} ${thread} opacity-80`} />
      <span
        className={`mt-2 uppercase leading-none ${desc}`}
        style={{ fontFamily: "var(--font-serif-latin)", letterSpacing: "0.52em", textIndent: "0.52em" }}
      >
        Matrimony
      </span>
    </div>
  );
}
