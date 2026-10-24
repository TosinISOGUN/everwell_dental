import { CalendarCheck, Check, ClipboardText, Handshake } from "@phosphor-icons/react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/cta-band";
import { Img } from "@/components/img";
import { bringToList, newPatientSteps } from "@/data/content";
import { seo } from "@/lib/seo";
import { delay } from "@/lib/style";

const stepIcons = [CalendarCheck, ClipboardText, Handshake];

export const Route = createFileRoute("/new-patients")({
  head: () =>
    seo({
      title: "New Patients | Everwell Dental",
      description:
        "What to expect at a first visit to Everwell Dental, a fictional concept practice: the steps, what to bring, and how to ask about insurance and payment.",
      image: "new-patients",
    }),
  component: NewPatients,
});

function NewPatients() {
  return (
    <>
      <section className="pb-4 pt-8 md:pt-14">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h1 className="display-xl rise max-w-[11ch]">Welcome. Here's what to expect.</h1>
            <p className="lead rise mt-6" style={delay(1)}>
              A first visit should reduce uncertainty, not add to it. This page walks through the
              whole journey so nothing about your appointment is a surprise.
            </p>
          </div>
          <div className="media settle">
            <Img
              id="heroXray"
              alt="A dentist showing a patient an x-ray on a tablet"
              sizes="(min-width: 1024px) 42vw, 92vw"
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="display-lg reveal max-w-[10ch] lg:sticky lg:top-28 lg:self-start">
            Your first visit
          </h2>
          <ol className="reveal border-t border-line">
            {newPatientSteps.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length]!;
              return (
                <li
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-6 border-b border-line py-8 sm:gap-10"
                >
                  <Icon size={44} className="text-accent" aria-hidden />
                  <div>
                    <h3 className="text-[1.6rem] font-semibold tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-2 max-w-[52ch] text-muted">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <h2 className="display-md max-w-[14ch]">What to bring</h2>
            <ul className="mt-8 space-y-4">
              {bringToList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[1.1rem]">
                  <Check size={22} className="mt-1 shrink-0 text-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h2 className="display-md max-w-[16ch]">Insurance and payment</h2>
            <div className="prose-flow mt-8 text-[1.1rem]">
              <p>
                This concept does not name accepted insurance plans, fees, or financing offers. A
                real practice would talk through your options with you directly and put them in
                writing before any treatment.
              </p>
              <p>
                If you have a question about coverage or cost, mention it when you request an
                appointment and the practice would follow up. You never need to share insurance
                numbers through this form.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap reveal">
          <h2 className="display-md max-w-[20ch]">Keep exploring</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/services" className="btn btn-ghost">
              Our services
            </Link>
            <Link to="/about" className="btn btn-ghost">
              Meet the team
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact details
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
