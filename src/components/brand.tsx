const LOGO = { w: 416, h: 406 };

/** The tooth mark (supplied logo). Two files are swapped by theme so the artwork stays legible. */
export function LogoMark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <>
      <img
        src="/brand/logo-light.png"
        alt=""
        width={LOGO.w}
        height={LOGO.h}
        className={`logo-light ${className}`}
      />
      <img
        src="/brand/logo-dark.png"
        alt=""
        width={LOGO.w}
        height={LOGO.h}
        className={`logo-dark ${className}`}
      />
    </>
  );
}

/** Mark plus the typographic name, used in the header, mobile menu and footer. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.45rem] font-semibold tracking-[-0.03em] text-ink">
          Everwell
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-muted">
          Dental
        </span>
      </span>
    </span>
  );
}
