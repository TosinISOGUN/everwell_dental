import { ArrowRight } from "@phosphor-icons/react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/cta-band";
import { Img } from "@/components/img";
import { services } from "@/data/services";
import { seo } from "@/lib/seo";
import { delay } from "@/lib/style";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo({
      title: "Dental Services | Everwell Dental",
      description:
        "General and preventive, cosmetic, restorative, and emergency dentistry at Everwell Dental, a fictional concept practice in Charlotte, North Carolina.",
      image: "services",
    }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="pb-4 pt-8 md:pt-14">
        <div className="wrap">
          <h1 className="display-xl rise max-w-[13ch]">
            Dental care, explained in plain language.
          </h1>
          <p className="lead rise mt-6" style={delay(1)}>
            Four areas of care, each with clear explanations of what a visit involves and what to
            ask.
          </p>
        </div>
      </section>

      <section className="section">
        <ul className="wrap grid gap-x-6 gap-y-16 md:grid-cols-12 lg:gap-y-24">
          {services.map((s, i) => {
            const wide = i % 4 === 0 || i % 4 === 3;
            return (
              <li
                key={s.slug}
                className={`reveal ${wide ? "md:col-span-7" : "md:col-span-5"} ${
                  i % 2 === 1 ? "md:mt-24" : ""
                }`}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="media group block"
                  tabIndex={-1}
                  aria-hidden
                >
                  <Img
                    id={s.image}
                    alt=""
                    sizes="(min-width: 768px) 58vw, 92vw"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                      wide ? "aspect-[4/3]" : "aspect-[4/5]"
                    }`}
                    style={{ objectPosition: s.imageFocus }}
                  />
                </Link>
                <h2 className="display-md mt-6">{s.name}</h2>
                <p className="mt-3 max-w-[52ch] text-muted">{s.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-sm font-medium">
                  {s.includes.map((item) => (
                    <li key={item.title} className="rounded-[var(--radius-ui)] bg-bg-2 px-3 py-1.5">
                      {item.title}
                    </li>
                  ))}
                </ul>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="btn-text mt-3">
                  Learn about {s.navName.toLowerCase()} care <ArrowRight size={20} aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <CtaBand
        title="Not sure where to start?"
        text="Send a short request and say what's on your mind. The practice would suggest the right kind of visit."
      />
    </>
  );
}
