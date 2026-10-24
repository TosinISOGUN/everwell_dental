/**
 * Local demonstration data for the Everwell Dental concept. Everything here is fictional demo
 * content for a portfolio concept: not a real practice, team, phone number, address or availability.
 */

/** Injected at build time from the deployment domain (see scripts/site-origin.mjs). */
export const SITE_URL: string = import.meta.env.VITE_SITE_URL;

/** The practice is fictional, so no page asks search engines to index it. Flip to allow indexing. */
export const INDEXABLE = false;

export const site = {
  name: "Everwell Dental",
  tagline: "A healthier smile starts here.",
  city: "Charlotte, North Carolina",
  phoneDisplay: "(704) 555-0142",
  phoneHref: "tel:+17045550142",
  email: "hello@everwelldental.example",
  hours: [
    { days: "Monday to Thursday", time: "8:00 AM to 5:00 PM" },
    { days: "Friday", time: "8:00 AM to 2:00 PM" },
    { days: "Saturday and Sunday", time: "Closed" },
  ],
} as const;

export type NavItem = { label: string; to: "/services" | "/about" | "/new-patients" | "/contact" };

export const nav: NavItem[] = [
  { label: "Services", to: "/services" },
  { label: "Our Practice", to: "/about" },
  { label: "New Patients", to: "/new-patients" },
  { label: "Contact", to: "/contact" },
];

/** The one label used for the primary appointment action everywhere. */
export const APPOINTMENT_CTA = "Request an Appointment";
