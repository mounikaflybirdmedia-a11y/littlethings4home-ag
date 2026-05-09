import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import hero from "@/assets/hero.jpg";
import { ShieldCheck, Truck, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "littlethings4home — Toys, Gadgets & Home Essentials" },
      { name: "description", content: "Discover delightful kids toys, keychains, sport series, gadgets and home essentials handcrafted by littlethings4home." },
      { property: "og:title", content: "littlethings4home — Joy in every detail" },
      { property: "og:description", content: "Curated little things that make every home happier." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 6);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-warm)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-2 md:gap-12 md:pt-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Handpicked daily delights
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Little things that make <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">home happier</span>.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              From colorful kids toys and keychains to handy gadgets, kitchen helpers
              and car must-haves — discover our lovingly curated collection.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
              >
                Shop the collection
              </Link>
              <a
                href="https://www.instagram.com/little_things_4_home/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                See on Instagram
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Quality checked</span>
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Pan-India delivery</span>
              <span className="flex items-center gap-2"><Heart className="h-4 w-4 text-primary" /> Made with love</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />
            <img
              src={hero}
              alt="Curated collection of little things for home"
              width={1600}
              height={1024}
              className="relative w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured collection</h2>
            <p className="mt-2 text-muted-foreground">A peek at our most-loved little things.</p>
          </div>
          <Link to="/products" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-[image:var(--gradient-hero)] p-10 text-center text-primary-foreground shadow-[var(--shadow-soft)] sm:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Bulk orders & gifting</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            Planning a return-gift, corporate hamper or store stock? We've got you covered.
          </p>
          <a
            href="https://wa.me/919959998780?text=Hello%20Little%20Things%2C%20I%20want%20to%20know%20about%20bulk%20orders%20and%20gifting!"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
