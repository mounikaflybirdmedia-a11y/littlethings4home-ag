import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — littlethings4home" },
      { name: "description", content: "Get in touch with Chandan at littlethings4home for orders, bulk gifting and collaborations." },
      { property: "og:title", content: "Contact littlethings4home" },
      { property: "og:description", content: "Call, WhatsApp or DM us on Instagram." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call us", value: "+91 99599 98780", href: "tel:+919959998780" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with Chandan", href: "https://wa.me/919959998780?text=Hello%20Little%20Things%2C%20I%20want%20to%20know%20more%20about%20your%20products!" },
    { icon: Instagram, label: "Instagram", value: "@little_things_4_home", href: "https://www.instagram.com/little_things_4_home/" },
    { icon: Mail, label: "Email", value: "hello@littlethings4home.com", href: "mailto:hello@littlethings4home.com" },
  ];
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let's talk</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Questions, custom orders or bulk gifting? Reach out — we'd love to help.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {cards.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="mt-0.5 font-semibold text-foreground group-hover:text-primary">{value}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[image:var(--gradient-warm)] p-8 sm:p-12">
          <h2 className="text-2xl font-bold">Owner</h2>
          <p className="mt-2 text-muted-foreground">
            <b className="text-foreground">Chandan</b> · Founder, littlethings4home
          </p>
          <p className="mt-1 text-muted-foreground">+91 99599 98780</p>
        </div>
      </section>
    </SiteLayout>
  );
}
