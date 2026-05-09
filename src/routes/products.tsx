import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — littlethings4home" },
      { name: "description", content: "Browse all toys, keychains, gadgets, kitchen and car essentials from littlethings4home." },
      { property: "og:title", content: "All Products — littlethings4home" },
      { property: "og:description", content: "Explore the complete collection of little things." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Products</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Every piece is hand-picked for quality, joy and everyday usefulness.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </SiteLayout>
  );
}
