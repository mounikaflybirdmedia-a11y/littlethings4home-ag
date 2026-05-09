import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Heart, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — littlethings4home" },
      { name: "description", content: "littlethings4home is curated by Chandan — bringing joyful little items to every home across India." },
      { property: "og:title", content: "About littlethings4home" },
      { property: "og:description", content: "Our story, our values and the maker behind the brand." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our story</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Tiny products. <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">Big smiles.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          littlethings4home began with a simple idea — that the smallest objects in our
          homes can spark the biggest joys. Founded by <b className="text-foreground">Chandan</b>,
          we curate playful toys, handy gadgets and thoughtful home essentials that
          families across India love.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          From colorful keychains and football fan series to rechargeable fans, mosquito
          bats, massagers, kitchen helpers and car accessories — every product is chosen
          for quality, value and a little bit of magic.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Heart, t: "Made with love", d: "Each item is hand-picked and quality-checked." },
            { icon: Sparkles, t: "Joyful design", d: "Bright, playful and built to delight." },
            { icon: Users, t: "Trusted by 1000+", d: "Happy families across India." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-3 font-semibold">{t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
