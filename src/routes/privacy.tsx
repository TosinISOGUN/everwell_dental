import { Link, createFileRoute } from "@tanstack/react-router";

import { site } from "@/data/site";
import { seo } from "@/lib/seo";
import { delay } from "@/lib/style";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seo({
      title: "Privacy Notice (Demonstration) | Everwell Dental",
      description:
        "A demonstration privacy notice for the Everwell Dental concept website: what the demo form does and does not do with the information you type.",
      image: "privacy",
    }),
  component: Privacy,
});

const sections = [
  {
    title: "What this site is",
    body: [
      "Everwell Dental is a fictional design concept. It is not an operating dental practice, and no real clinician, office or patient record sits behind it.",
    ],
  },
  {
    title: "The appointment request form",
    body: [
      "The form is a demonstration. When you submit it, nothing is sent to a server, emailed, or stored. The information you type stays in your browser and is gone when you leave or reset the form.",
      "Please do not enter health details, insurance numbers, or other sensitive information. The form does not ask for them and is not a secure clinical intake system.",
    ],
  },
  {
    title: "Cookies, tracking and third parties",
    body: [
      "This site uses no analytics, advertising or tracking scripts, and it loads no fonts or content from third-party servers. The only thing it remembers is your light or dark theme choice, saved in your browser's local storage.",
    ],
  },
  {
    title: "If this were a real practice",
    body: [
      "A real practice would need a properly configured booking and intake system, a privacy review, and any agreements required for handling protected health information. This concept does not claim to be compliant with any of those standards.",
    ],
  },
];

function Privacy() {
  return (
    <>
      <section className="pb-4 pt-8 md:pt-14">
        <div className="wrap">
          <h1
            className="display-xl rise max-w-[12ch]"
            style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.6rem)" }}
          >
            Privacy notice (demonstration)
          </h1>
          <p className="lead rise mt-6" style={delay(1)}>
            A plain-language note about what this concept website does, and does not do, with your
            information.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-[52rem]">
          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.title} className="reveal border-t border-line pt-6">
                <h2 className="display-md">{s.title}</h2>
                <div className="prose-flow mt-4 text-[1.1rem]">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-14 text-muted">
            Questions about this concept? Use the demonstration email {site.email}, or go back to
            the{" "}
            <Link to="/contact" className="link-inline">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
