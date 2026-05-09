import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="text-lg font-bold">littlethings4home</div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Crafting delightful little things — toys, gadgets and home essentials
            that bring everyday joy.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-primary">All Products</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Get in touch</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+919959998780" className="hover:text-primary">+91 99599 98780</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:hello@littlethings4home.com" className="hover:text-primary">hello@littlethings4home.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-primary" />
              <a
                href="https://www.instagram.com/little_things_4_home/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >@little_things_4_home</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} littlethings4home — Curated by Chandan.
      </div>
    </footer>
  );
}
