import { Link } from "@tanstack/react-router";

import { services } from "@/data/services";
import { nav, site } from "@/data/site";

import { Wordmark } from "./brand";

const item = "inline-flex min-h-11 items-center text-muted transition-colors hover:text-ink";
const heading = "mb-2 text-base font-semibold tracking-normal";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.5fr]">
        <div>
          <Link
            to="/"
            aria-label={`${site.name}, home`}
            className="inline-flex min-h-12 items-center"
          >
            <Wordmark />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A modern family and cosmetic dental practice concept for {site.city}, built to show what
            thoughtful, patient-first healthcare web design can look like.
          </p>
        </div>
        <nav aria-label="Services" className="flex flex-col">
          <h2 className={heading}>Services</h2>
          <Link to="/services" className={item}>
            All services
          </Link>
          {services.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className={item}>
              {s.navName}
            </Link>
          ))}
        </nav>
        <nav aria-label="Practice" className="flex flex-col">
          <h2 className={heading}>Practice</h2>
          {nav
            .filter((n) => n.to !== "/services")
            .map((n) => (
              <Link key={n.to} to={n.to} className={item}>
                {n.label}
              </Link>
            ))}
          <Link to="/privacy" className={item}>
            Privacy notice
          </Link>
        </nav>
        <div>
          <h2 className={heading}>Contact (demo)</h2>
          <ul className="space-y-1 text-sm text-muted">
            <li>
              <a href={site.phoneHref} className="inline-flex min-h-11 items-center hover:text-ink">
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.email}</li>
            <li>{site.city} (sample location)</li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold">Sample office hours</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="whitespace-nowrap text-right">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-muted">Fictional demonstration content.</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-6 text-xs leading-relaxed text-muted sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl">
            © {new Date().getFullYear()} Everwell Dental. Everwell Dental is a fictional concept,
            not an operating practice. The phone number, email, hours and team are demonstration
            content.
          </p>
          <p className="max-w-xs">
            Accessibility: to ask for this concept in another format, use the demonstration email
            above.
          </p>
        </div>
      </div>
    </footer>
  );
}
