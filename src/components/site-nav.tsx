import { List, Phone, X } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

import { APPOINTMENT_CTA, nav, site } from "@/data/site";

import { Wordmark } from "./brand";
import { ThemeToggle } from "./theme-toggle";

const linkBase =
  "inline-flex min-h-12 items-center rounded-[var(--radius-ui)] px-3 text-[0.95rem] font-medium text-muted transition-colors hover:text-ink";

/** Slim notice above the header. It scrolls away; only the header stays. */
function UtilityBar() {
  return (
    <div className="bg-accent text-on-accent">
      <div className="wrap flex h-9 items-center justify-between gap-4 text-[0.8rem]">
        <p className="truncate">{site.tagline}</p>
        <p className="shrink-0 opacity-80">Fictional design concept</p>
      </div>
    </div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const solid = scrolled || open;

  const close = useCallback(() => {
    setOpen(false);
    button.current?.focus();
  }, []);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry?.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    const focusables = () =>
      Array.from(panel.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      const items = [button.current, ...focusables()].filter((el): el is HTMLElement => !!el);
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = previous;
    };
  }, [open, close]);

  return (
    <>
      <UtilityBar />
      {/* Sits at the very top of the page; once it scrolls out of view the header takes shape. */}
      <div
        ref={sentinel}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-12 w-px"
      />
      <header
        data-solid={solid}
        className="sticky top-0 z-40 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-300 data-[solid=true]:border-line data-[solid=true]:backdrop-blur-md"
        style={{
          height: "var(--nav-h)",
          background: solid ? "color-mix(in oklab, var(--bg) 86%, transparent)" : "transparent",
        }}
      >
        <div className="wrap flex h-full items-center justify-between gap-4">
          <Link
            to="/"
            aria-label={`${site.name}, home`}
            className="inline-flex min-h-12 items-center"
          >
            <Wordmark />
          </Link>
          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={linkBase}
                activeProps={{
                  className:
                    "!text-ink underline decoration-accent decoration-2 underline-offset-[10px]",
                  "aria-current": "page",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden min-h-12 items-center gap-2 rounded-[var(--radius-ui)] px-3 font-semibold text-ink hover:text-accent xl:inline-flex"
            >
              <Phone size={20} aria-hidden />
              {site.phoneDisplay}
              <span className="sr-only"> (fictional demo number)</span>
            </a>
            <Link to="/contact" className="btn btn-primary hidden sm:inline-flex">
              {APPOINTMENT_CTA}
            </Link>
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phoneDisplay} (fictional demo number)`}
              className="inline-grid size-12 place-items-center rounded-[var(--radius-ui)] border border-line text-ink sm:hidden"
            >
              <Phone size={22} aria-hidden />
            </a>
            <ThemeToggle />
            <button
              ref={button}
              type="button"
              className="inline-grid size-12 place-items-center rounded-[var(--radius-ui)] border border-line text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => (open ? close() : setOpen(true))}
            >
              {open ? <X size={22} aria-hidden /> : <List size={22} aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of the header, not a child: the header's blur would otherwise trap this fixed panel. */}
      <div
        id="mobile-menu"
        ref={panel}
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 z-30 overflow-y-auto bg-bg transition-[opacity,transform] duration-300 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
        style={{ top: "var(--nav-h)" }}
      >
        <nav
          aria-label="Mobile"
          className="wrap flex min-h-full flex-col justify-between gap-10 py-6"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-line">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-accent", "aria-current": "page" }}
                  className="flex min-h-16 items-center font-display text-[1.9rem] font-semibold tracking-[-0.03em] text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              {APPOINTMENT_CTA}
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost w-full">
              <Phone size={20} aria-hidden />
              Call {site.phoneDisplay}
            </a>
            <p className="text-sm text-muted">Fictional demo number. This is a design concept.</p>
          </div>
        </nav>
      </div>
    </>
  );
}
