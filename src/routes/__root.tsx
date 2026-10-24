import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
  useRouter,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { themeInitScript } from "@/components/theme-toggle";
import { APPOINTMENT_CTA } from "@/data/site";

import appCss from "../styles.css?url";

function Message({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <section className="wrap grid min-h-[60dvh] content-center py-24">
      <h1 className="display-lg max-w-[14ch]">{title}</h1>
      <p className="lead mt-5">{text}</p>
      <div className="mt-8 flex flex-wrap gap-3">{children}</div>
    </section>
  );
}

function NotFound() {
  return (
    <Message
      title="That page isn't here."
      text="It may have moved. You can head back home, or send an appointment request."
    >
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
      <Link to="/contact" className="btn btn-ghost">
        {APPOINTMENT_CTA}
      </Link>
    </Message>
  );
}

function RouteError({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  return (
    <Message
      title="This page didn't load."
      text="Something went wrong. Try again, or head back home."
    >
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          void router.invalidate();
          reset();
        }}
      >
        Try again
      </button>
      <a href="/" className="btn btn-ghost">
        Back home
      </a>
    </Message>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f4f7f7" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/bricolage-var.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/geist-var.woff2",
        crossOrigin: "anonymous",
      },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [{ children: themeInitScript }],
  }),
  shellComponent: RootShell,
  component: RootLayout,
  notFoundComponent: NotFound,
  errorComponent: RouteError,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootLayout() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-[var(--radius-ui)] bg-accent px-5 py-3 font-semibold text-on-accent focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
