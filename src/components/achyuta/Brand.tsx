import markAsset from "@/assets/achyuta-mark-trimmed.png.asset.json";

export function Brand({
  size = "sm",
  tone = "ink",
  mark = true,
  script = "telugu",
}: {
  size?: "sm" | "lg" | "xl";
  tone?: "ink" | "light";
  mark?: boolean;
  script?: "telugu" | "latin";
}) {
  const markSize =
    size === "xl"
      ? "w-44 sm:w-52 md:w-60"
      : size === "lg"
        ? "w-20 sm:w-24"
        : "h-10 w-auto";
  const wordSize =
    size === "xl"
      ? mark
        ? "text-[2.75rem] sm:text-6xl md:text-7xl"
        : "text-[3.25rem] sm:text-7xl md:text-8xl"
      : size === "lg"
        ? "text-3xl"
        : script === "latin"
          ? "text-[1.4rem] sm:text-[1.65rem]"
          : "text-[1.65rem]";
  const subSize =
    size === "xl"
      ? mark
        ? "text-[0.75rem] sm:text-[0.85rem] tracking-[0.42em]"
        : "text-[0.82rem] sm:text-[0.95rem] tracking-[0.44em]"
      : size === "lg"
        ? "text-[0.65rem] tracking-[0.38em]"
        : "text-[0.55rem] tracking-[0.3em]";

  return (
    <span
      className={`inline-flex ${mark ? "flex-row items-center gap-2.5 sm:gap-3" : "flex-col items-center"} ${tone === "light" ? "text-primary-foreground" : "text-primary"}`}
      aria-label="Achyuta Matrimony"
    >
      {mark && (
        <img
          src={markAsset.url}
          alt=""
          aria-hidden="true"
          className={`${markSize} shrink-0 object-contain`}
          loading={size === "sm" ? "eager" : "lazy"}
        />
      )}
      <span
        className={`flex flex-col items-center leading-none ${mark && script === "telugu" ? "hidden sm:flex" : ""}`}
      >
        {script === "telugu" ? (
          <span className={`${wordSize} font-display font-semibold`}>అచ్యుత</span>
        ) : (
          <span className={`${wordSize} latin font-semibold`}>Achyuta</span>
        )}
        <span className={`latin mt-1.5 font-medium uppercase ${subSize}`}>
          Matrimony
        </span>
      </span>
    </span>
  );
}
