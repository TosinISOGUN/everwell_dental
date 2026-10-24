import { Envelope, MapPin, Phone } from "@phosphor-icons/react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { AppointmentForm } from "@/components/appointment-form";
import { site } from "@/data/site";
import { seo } from "@/lib/seo";
import { delay } from "@/lib/style";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact and Appointment Requests | Everwell Dental",
      description:
        "Request an appointment or get in touch with Everwell Dental, a fictional concept practice in Charlotte, North Carolina. The phone number, email and hours are demonstration content.",
      image: "contact",
    }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="pb-4 pt-8 md:pt-14">
        <div className="wrap">
          <h1 className="display-xl rise max-w-[12ch]">Contact the practice.</h1>
          <p className="lead rise mt-6" style={delay(1)}>
            Request an appointment with a short form, or call. Everything on this page is
            demonstration content for a fictional practice.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="reveal">
            <h2 className="display-md mb-6">Request an appointment</h2>
            <AppointmentForm />
          </div>
          <aside className="reveal lg:sticky lg:top-28" aria-label="Contact details">
            <h2 className="display-md mb-6">Office details</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone size={26} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Phone (fictional demo number)</p>
                  <a
                    href={site.phoneHref}
                    className="inline-flex min-h-11 items-center text-[1.2rem] font-semibold hover:text-accent"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Envelope size={26} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Email (demo address)</p>
                  <p className="text-[1.1rem] font-medium break-all">{site.email}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin size={26} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="text-[1.1rem] font-medium">{site.city} (sample location)</p>
                </div>
              </li>
            </ul>

            <h3 className="mt-10 text-[1.2rem] font-semibold">Sample office hours</h3>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 py-3">
                  <span>{h.days}</span>
                  <span className="text-muted">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">Fictional demonstration content.</p>

            <p className="mt-8 text-muted">
              Looking for something specific? See our{" "}
              <Link to="/services" className="link-inline">
                services
              </Link>{" "}
              or what to expect as a{" "}
              <Link to="/new-patients" className="link-inline">
                new patient
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
