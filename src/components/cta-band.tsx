import { Phone } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

import { APPOINTMENT_CTA, site } from "@/data/site";

type Props = {
  title?: string;
  text?: string;
};

/**
 * Closing band on the accent colour: one primary action, one call link, and the sample hours.
 * The logo mark sits behind the type, enlarged and cropped; the variant follows the theme.
 */
export function CtaBand({
  title = "Let's make your next dental visit a better one.",
  text = "Send a short appointment request or call the office. No health details needed to get started.",
}: Props) {
  return (
    <section className="pb-[clamp(64px,9vw,128px)]">
      <div className="wrap">
        <div className="reveal relative overflow-hidden rounded-[var(--radius-ui)] bg-accent px-6 py-16 text-on-accent sm:px-12 sm:py-24 lg:px-20">
          <img
            src="/brand/logo-dark.png"
            alt=""
            width={416}
            height={406}
            className="mark-on-dark"
            aria-hidden
          />
          <img
            src="/brand/logo-light.png"
            alt=""
            width={416}
            height={406}
            className="mark-on-light"
            aria-hidden
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
            <div>
              <h2
                className="display-xl max-w-[15ch]"
                style={{ fontSize: "clamp(2.3rem, 5.2vw, 4.6rem)" }}
              >
                {title}
              </h2>
              <p className="mt-6 max-w-[52ch] text-[1.1rem] opacity-85">{text}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-on-accent">
                  {APPOINTMENT_CTA}
                </Link>
                <a href={site.phoneHref} className="btn btn-outline-on-accent">
                  <Phone size={20} aria-hidden />
                  Call the Office
                </a>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-display text-[1.7rem] font-semibold tracking-[-0.03em]">
                {site.phoneDisplay}
              </p>
              <ul className="mt-4 space-y-1.5 opacity-85">
                {site.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex justify-between gap-6 border-t border-current/20 pt-1.5"
                  >
                    <span>{h.days}</span>
                    <span className="whitespace-nowrap">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 opacity-70">
                Sample hours and a fictional demo number. This is a design concept.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
