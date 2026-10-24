import {
  ArrowRight,
  CalendarCheck,
  ChatCircleText,
  ClipboardText,
  Handshake,
  Info,
  ListChecks,
  Sparkle,
} from "@phosphor-icons/react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Fragment, type CSSProperties } from "react";

import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { Img } from "@/components/img";
import { TeamGrid } from "@/components/team-grid";
import { homeFaqs, newPatientSteps, practiceValues } from "@/data/content";
import { services } from "@/data/services";
import { APPOINTMENT_CTA } from "@/data/site";
import { seo } from "@/lib/seo";
import { delay } from "@/lib/style";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Everwell Dental | A Calmer Dental Visit in Charlotte",
      description:
        "Care that puts you at ease: general, family, and cosmetic dentistry. A fictional concept website for a modern dental practice in Charlotte, North Carolina.",
      image: "home",
    }),
  component: Home,
});

const statement = "We would rather answer five questions than leave one unasked.";
const words = statement.split(" ");

const stepIcons = [CalendarCheck, ClipboardText, Handshake];
const stepDrops = ["0rem", "3.5rem", "7rem"];

const valueIcons = [ChatCircleText, ListChecks, Sparkle, Info];

function Home() {
  return (
    <>
      {/* Hero: oversized type beside a two-photograph collage */}
      <section className="-mt-[var(--nav-h)] flex min-h-[calc(100dvh-2.25rem)] items-center pb-14 pt-[calc(var(--nav-h)+2.5rem)] lg:pb-16">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <div>
            <h1 className="display-2xl rise max-w-[8.5ch] lg:max-w-none">
              Care that puts you at ease.
            </h1>
            <p className="lead rise mt-7 max-w-[34ch]" style={delay(1)}>
              Modern dentistry, thoughtful guidance, and a welcoming team to help you care for your
              smile with confidence.
            </p>
            <div className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3" style={delay(2)}>
              <Link to="/contact" className="btn btn-primary">
                {APPOINTMENT_CTA}
              </Link>
              <Link to="/services" className="btn-text">
                Explore Our Services <ArrowRight size={20} aria-hidden />
              </Link>
            </div>
          </div>

          <div className="settle relative mx-auto w-full max-w-[30rem] pb-16 lg:mx-0 lg:max-w-none lg:pb-20">
            <div
              className="media drift shadow-[var(--shadow)]"
              style={{ "--drift": "-26px" } as CSSProperties}
            >
              <Img
                id="heroMain"
                alt="A patient in a treatment chair listening while a dentist explains her exam"
                sizes="(min-width: 1024px) 30vw, 88vw"
                priority
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: "50% 28%" }}
              />
            </div>
            <div
              className="media drift absolute -bottom-0 -left-5 w-[54%] border-[6px] border-bg shadow-[var(--shadow)] lg:-left-14"
              style={{ "--drift": "-84px" } as CSSProperties}
            >
              <Img
                id="heroXray"
                alt="A dentist showing a patient an x-ray on a tablet"
                sizes="(min-width: 1024px) 18vw, 46vw"
                priority
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statement: the words light up as you read down the page */}
      <section className="section">
        <div className="wrap">
          <p
            className="display-xl max-w-[20ch] lg:max-w-[18ch]"
            style={{ fontSize: "clamp(2.2rem, 6.6vw, 6rem)" }}
          >
            <span className="sr-only">{statement}</span>
            <span aria-hidden>
              {words.map((word, i) => (
                <Fragment key={i}>
                  <span className="stmt-word">{word}</span>{" "}
                </Fragment>
              ))}
            </span>
          </p>
          <p className="lead mt-10">
            Visits here start with a conversation: what's changed, what's bothering you, and what
            you want from your dental care. Findings are explained as they happen, and every
            recommendation comes with a reason.
          </p>
          <Link to="/about" className="btn-text mt-3">
            Get to Know Our Practice <ArrowRight size={20} aria-hidden />
          </Link>
        </div>
      </section>

      {/* Services: an accordion of photographs */}
      <section className="pb-[clamp(64px,9vw,128px)]">
        <div className="wrap">
          <div className="reveal max-w-[44rem]">
            <h2 className="display-lg">The care your smile needs, all in one place.</h2>
            <p className="lead mt-4">
              From routine checkups to cosmetic consultations, each service is explained in plain
              language. No dental dictionary required.
            </p>
          </div>
          <ul className="panels reveal mt-12">
            {services.map((s) => (
              <li key={s.slug} className="contents">
                <Link to="/services/$slug" params={{ slug: s.slug }} className="panel">
                  <Img
                    id={s.image}
                    alt={s.imageAlt}
                    sizes="(min-width: 1024px) 60vw, 92vw"
                    style={{ objectPosition: s.imageFocus }}
                  />
                  <span className="panel-body">
                    <span className="block font-display text-[1.45rem] font-semibold leading-[1.1] tracking-[-0.03em]">
                      {s.name}
                    </span>
                    <span className="panel-more block">{s.blurb}</span>
                    <span className="panel-go">
                      Learn more <ArrowRight size={20} aria-hidden />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Practice: a bento of two photographs and four commitments */}
      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="reveal max-w-[44rem]">
            <h2 className="display-lg">Trust is built with clarity, not claims.</h2>
            <p className="lead mt-4">
              You won't find review counts or five-star badges on this site. It's a concept without
              real patients. What a practice like this can promise is how it treats people.
            </p>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-12 md:gap-4">
            <div className="media reveal md:col-span-4 md:row-span-2">
              <Img
                id="clinicChair"
                alt="A bright treatment room with a dental chair and instruments"
                sizes="(min-width: 768px) 30vw, 92vw"
                className="aspect-[4/3] h-full w-full object-cover md:aspect-auto"
              />
            </div>
            {practiceValues.slice(0, 2).map((v, i) => {
              const Icon = valueIcons[i]!;
              return (
                <div
                  key={v.title}
                  className={`reveal rounded-[var(--radius-ui)] p-7 md:col-span-4 lg:p-8 ${
                    i === 0 ? "bg-accent text-on-accent" : "card"
                  }`}
                >
                  <Icon size={32} aria-hidden />
                  <h3 className="mt-6 text-[1.4rem] font-semibold tracking-[-0.025em]">
                    {v.title}
                  </h3>
                  <p className={`mt-2 ${i === 0 ? "opacity-85" : "text-muted"}`}>{v.text}</p>
                </div>
              );
            })}
            <div className="media reveal md:col-span-8">
              <Img
                id="clinicWide"
                alt="A modern dental treatment room with a reclined chair, a desk, and a large window"
                sizes="(min-width: 768px) 62vw, 92vw"
                className="aspect-[16/9] w-full object-cover"
                style={{ objectPosition: "50% 60%" }}
              />
            </div>
            {practiceValues.slice(2).map((v, i) => {
              const Icon = valueIcons[i + 2]!;
              return (
                <div
                  key={v.title}
                  className={`reveal rounded-[var(--radius-ui)] p-7 md:col-span-6 lg:p-8 ${
                    i === 0 ? "card" : "border border-line bg-bg"
                  }`}
                >
                  <Icon size={32} className="text-accent" aria-hidden />
                  <h3 className="mt-6 text-[1.4rem] font-semibold tracking-[-0.025em]">
                    {v.title}
                  </h3>
                  <p className="mt-2 max-w-[44ch] text-muted">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="wrap">
          <div className="reveal max-w-[44rem]">
            <p className="eyebrow">The team (fictional)</p>
            <h2 className="display-lg mt-3">People you'll actually enjoy visiting.</h2>
            <p className="lead mt-4">
              Three fictional professionals, one shared idea: patients do better when they
              understand their own care.
            </p>
          </div>
          <div className="mt-14">
            <TeamGrid />
          </div>
        </div>
      </section>

      {/* First visit: a timeline that draws itself */}
      <section className="section bg-bg-2">
        <div className="wrap">
          <div className="reveal max-w-[44rem]">
            <h2 className="display-lg">Your first visit, made simpler.</h2>
            <p className="lead mt-4">
              Starting with a new dental practice shouldn't feel like paperwork. Here's the whole
              journey, at a glance.
            </p>
          </div>
          <ol className="steps mt-14 lg:mt-16">
            {newPatientSteps.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length]!;
              return (
                <li
                  key={step.title}
                  className="step reveal"
                  style={{ "--drop": stepDrops[i] ?? "0rem" } as CSSProperties}
                >
                  <Icon size={30} className="text-accent" aria-hidden />
                  <h3 className="mt-4 text-[1.55rem] font-semibold tracking-[-0.025em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[40ch] text-muted">{step.text}</p>
                </li>
              );
            })}
          </ol>
          <Link to="/new-patients" className="btn btn-primary mt-14">
            What to Expect
          </Link>
        </div>
      </section>

      {/* Smile band: colour block beside a photograph that settles into place */}
      <section className="section overflow-hidden">
        <div className="wrap">
          <div className="zoom-frame grid overflow-hidden rounded-[var(--radius-ui)] bg-accent text-on-accent lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-14 lg:py-20">
              <h2 className="display-lg max-w-[12ch]">A smile that feels like yours.</h2>
              <p className="mt-6 max-w-[46ch] text-[1.1rem] opacity-85">
                Whitening, veneers, and honest cosmetic consultations. The goal is never a template
                smile. It's the version of your smile you feel best about, with realistic
                expectations set from the first conversation.
              </p>
              <div className="mt-9">
                <Link
                  to="/services/$slug"
                  params={{ slug: "cosmetic-dentistry" }}
                  className="btn btn-on-accent"
                >
                  Explore Cosmetic Dentistry
                </Link>
              </div>
            </div>
            <div className="relative min-h-[26rem] overflow-hidden lg:min-h-[34rem]">
              <Img
                id="smileBand"
                alt="A woman with her hands under her chin, smiling warmly at the camera"
                sizes="(min-width: 1024px) 52vw, 92vw"
                className="zoom-photo absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "50% 22%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-line">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <h2 className="display-lg max-w-[12ch]">Practical answers, before you ask.</h2>
            <p className="mt-5 max-w-[40ch] text-sm text-muted">
              Answers reflect this fictional concept. A real practice would confirm details directly
              with patients.
            </p>
          </div>
          <Faq items={homeFaqs} className="reveal" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
