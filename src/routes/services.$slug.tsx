import { ArrowRight, Check, Phone, Warning } from "@phosphor-icons/react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { Img } from "@/components/img";
import { serviceBySlug, services } from "@/data/services";
import { APPOINTMENT_CTA, site } from "@/data/site";
import { seo } from "@/lib/seo";
import { delay } from "@/lib/style";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo({
          title: `${loaderData.name} | Everwell Dental`,
          description: `${loaderData.blurb} Everwell Dental is a fictional concept practice in Charlotte, North Carolina.`,
          image: loaderData.slug,
        })
      : {},
  component: ServicePage,
});

function ServicePage() {
  const s = Route.useLoaderData();
  const others = services.filter((x) => x.slug !== s.slug);
  const urgent = s.slug === "emergency-dentistry";
  return (
    <>
      <section className="pb-4 pt-8 md:pt-14">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h1
              className="display-xl rise max-w-[12ch]"
              style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.6rem)" }}
            >
              {s.name}
            </h1>
            <p className="lead rise mt-6" style={delay(1)}>
              {s.intro}
            </p>
            <div className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3" style={delay(2)}>
              <Link to="/contact" className="btn btn-primary">
                {APPOINTMENT_CTA}
              </Link>
              <a href={site.phoneHref} className="btn-text">
                <Phone size={20} aria-hidden /> Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="media settle shadow-[var(--shadow)]">
            <Img
              id={s.image}
              alt={s.imageAlt}
              sizes="(min-width: 1024px) 44vw, 92vw"
              priority
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              style={{ objectPosition: s.imageFocus }}
            />
          </div>
        </div>
      </section>

      {urgent && (
        <section className="pt-12">
          <div className="wrap">
            <div className="card reveal flex gap-4 p-6 sm:p-8" role="note">
              <Warning size={32} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <div>
                <h2 className="text-[1.4rem] font-semibold tracking-[-0.02em]">
                  Life-threatening symptoms
                </h2>
                <p className="mt-2 max-w-[60ch] text-muted">
                  If you have difficulty breathing or swallowing, severe bleeding that won't stop,
                  or a serious injury to the head or face, call 911 or go to an emergency
                  department. This website is not an emergency service.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <h2 className="display-lg reveal max-w-[14ch]">What's included</h2>
          <ul className="reveal mt-12 grid gap-4 sm:grid-cols-2">
            {s.includes.map((item, i) => (
              <li
                key={item.title}
                className={`rounded-[var(--radius-ui)] p-7 lg:p-9 ${
                  i % 3 === 0 ? "bg-accent text-on-accent" : "card"
                }`}
              >
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className={`mt-2 ${i % 3 === 0 ? "opacity-85" : "text-muted"}`}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="display-lg reveal max-w-[13ch] lg:sticky lg:top-28 lg:self-start">
            {s.visit.title}
          </h2>
          <ol className="reveal border-t border-line">
            {s.visit.items.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-line py-6"
              >
                <Check size={24} weight="bold" className="mt-0.5 text-accent" aria-hidden />
                <span className="text-[1.1rem] font-medium leading-snug">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="display-lg reveal max-w-[10ch] lg:sticky lg:top-28 lg:self-start">
            Common questions
          </h2>
          <Faq items={s.faqs} className="reveal" />
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="wrap">
          <h2 className="font-display text-[1.4rem] font-semibold tracking-[-0.02em]">
            Other services
          </h2>
          <ul className="mt-6 grid gap-x-10 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug} className="border-b border-line sm:border-b-0">
                <Link
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="group flex min-h-16 items-center justify-between gap-3 font-medium"
                >
                  {o.name}
                  <ArrowRight
                    size={20}
                    className="text-muted transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={
          urgent
            ? "Have an urgent concern? Call the office."
            : `Ready to talk about ${s.navName.toLowerCase()} care?`
        }
        text="Send a short appointment request or call the office. No health details needed to get started."
      />
    </>
  );
}
