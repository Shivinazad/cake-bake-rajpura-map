import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top promo bar */}
      <div className="bg-[var(--brand-cocoa-deep)] text-[var(--brand-cream)] text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <span className="hidden sm:flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-yellow)]" />
            15% Off on ₹500+ Orders
          </span>
          <span className="text-center flex-1 sm:flex-none">Freshly baked every morning • Order on Zomato & Swiggy</span>
          <span className="hidden sm:flex items-center gap-2">
            Subscribe & Save 10%
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-[var(--brand-cream)] border-b-2 border-[var(--brand-cocoa-deep)]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <Link to="/" className="font-display text-2xl font-extrabold tracking-tight text-[var(--brand-cocoa-deep)]">
            CAKE BAKE<span className="text-[var(--brand-orange)]">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-[var(--brand-cocoa-deep)]">
            <li><a href="https://www.zomato.com" target="_blank" rel="noreferrer" className="hover:text-[var(--brand-orange)] transition-colors">Zomato</a></li>
            <li><a href="https://www.swiggy.com" target="_blank" rel="noreferrer" className="hover:text-[var(--brand-orange)] transition-colors">Swiggy</a></li>
            <li><a href="#about" className="hover:text-[var(--brand-orange)] transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-[var(--brand-orange)] transition-colors">Contact</a></li>
          </ul>

          <div className="flex items-center gap-3">
            <a href="#order" className="pill-btn">Place Order</a>
            <button aria-label="Cart" className="hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--brand-cocoa-deep)] bg-[var(--brand-yellow)] text-[var(--brand-cocoa-deep)] shadow-[3px_3px_0_var(--brand-cocoa-deep)]">
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}