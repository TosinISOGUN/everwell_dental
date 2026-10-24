import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/cta-band";
import { Img } from "@/components/img";
import { TeamGrid } from "@/components/team-grid";
import { photoNote, practiceValues } from "@/data/content";
import { seo } from "@/lib/seo";
import { delay } from "@/lib/style";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "Our Practice | Everwell Dental",
      description:
        "Modern dentistry, a more human approach. Meet the fictional Everwell Dental team and read how a patient-first practice in Charlotte, North Carolina might care for you.",
      image: "about",
    }),
  component: About,
});

function About() {
  return (
    <>
      <section className="pb-4 pt-8 md:pt-14">
        <div className="wrap grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h1 className="display-xl rise max-w-[12ch]">
              Modern dentistry. A&nbsp;more human approach.
            </h1>
            <p className="lead rise mt-6" style={delay(1)}>
              Everwell Dental is a fictional practice built around one idea: people take better care
              of their teeth when they understand what's happening and feel welcome asking about it.
            </p>
          </div>
          <div className="media settle">
            <Img
              id="consultation"
              alt="A dentist pointing at images on a monitor while talking with a seated patient"
              sizes="(min-width: 1024px) 42vw, 92vw"
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="display-md reveal max-w-[14ch] lg:sticky lg:top-28 lg:self-start">
            How the practice thinks about care
          </h2>
          <div className="prose-flow reveal text-[1.1rem]">
            <p>
              A visit should start with a conversation, not a form. We ask what has changed, what is
              bothering you, and what you want from your dental care, and then we explain what we
              find as we find it.
            </p>
            <p>
              Recommendations come with reasons. Treatment is planned in stages, so you know what is
              needed now, what can wait, and why. You decide, and you can take your time.
            </p>
            <p>
              The space is built to feel calm: daylight, clear signage, and equipment that is
              explained before it is used. Practical information, like hours, what to bring, and how
              to ask about payment, is easy to find without calling.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <h2 className="display-lg reveal max-w-[14ch]">Four principles</h2>
          <ul className="reveal mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {practiceValues.map((v) => (
              <li key={v.title} className="border-t-2 border-accent pt-5">
                <h3 className="text-[1.3rem] font-semibold tracking-[-0.02em]">{v.title}</h3>
                <p className="mt-2 text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display-lg reveal">The team</h2>
          <p className="lead reveal mt-4">
            Three fictional professionals with different voices and one shared approach.
          </p>
          <div className="mt-14">
            <TeamGrid />
          </div>
        </div>
      </section>

      <section className="section bg-bg-2">
        <div className="wrap">
          <h2 className="display-lg reveal max-w-[14ch]">The space</h2>
          <p className="lead reveal mt-4">
            Bright rooms, natural light, and a calm path from the door to the chair.
          </p>
          <ul className="mt-12 grid grid-cols-6 gap-3 md:gap-4">
            <li className="media reveal col-span-6 md:col-span-4">
              <Img
                id="clinicWide"
                alt="A modern dental treatment room with a reclined chair, a desk, and a large window"
                sizes="(min-width: 768px) 60vw, 92vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </li>
            <li className="media reveal col-span-6 md:col-span-2 md:row-span-2">
              <Img
                id="clinicChair"
                alt="A bright treatment room with a dental chair and instruments"
                sizes="(min-width: 768px) 30vw, 92vw"
                className="aspect-[4/3] h-full w-full object-cover md:aspect-auto"
              />
            </li>
            <li className="media reveal col-span-6 md:col-span-4">
              <Img
                id="heroMain"
                alt="A patient in a treatment chair listening while a dentist explains her exam"
                sizes="(min-width: 768px) 60vw, 92vw"
                className="aspect-[16/10] w-full object-cover"
                style={{ objectPosition: "50% 34%" }}
              />
            </li>
          </ul>
          <p className="mt-6 max-w-[60ch] text-sm text-muted">{photoNote}</p>
        </div>
      </section>

      <div className="h-[clamp(64px,9vw,128px)]" aria-hidden />
      <CtaBand />
    </>
  );
}
