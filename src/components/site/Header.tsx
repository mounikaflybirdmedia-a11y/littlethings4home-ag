import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Header() {
  const linkProps = {
    activeProps: { className: "text-primary" },
    className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors",
  };
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight">littlethings4home</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              joy in every detail
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <Link to="/" {...linkProps}>Home</Link>
          <Link to="/products" {...linkProps}>Products</Link>
          <Link to="/about" {...linkProps}>About</Link>
          <Link to="/contact" {...linkProps}>Contact</Link>
        </nav>
        <Link
          to="/contact"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
