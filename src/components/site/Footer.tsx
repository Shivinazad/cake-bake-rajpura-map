import { Instagram } from "lucide-react";
import zomatoLogo from "@/assets/social/zomato.png";
import swiggyLogo from "@/assets/social/swiggy.png";

export function Footer() {
  return (
    <footer className="bg-[var(--brand-cocoa-deep)] text-[var(--brand-cream)]">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--brand-cream)]/60">© 2026 Cake Bake By Divesh • Rajpura</p>
        <p className="font-display text-2xl font-extrabold tracking-tight">CAKE BAKE<span className="text-[var(--brand-orange)]">.</span></p>
        <div className="flex items-center gap-3 text-xs">
          <a href="#" aria-label="Instagram" className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-[var(--brand-cream)] text-[var(--brand-cocoa-deep)]"><Instagram className="h-4 w-4" /></a>
          <a href="#" aria-label="Zomato" className="h-8 w-8 inline-flex items-center justify-center rounded-md overflow-hidden bg-[var(--brand-cream)]">
            <img src={zomatoLogo} alt="Zomato" width={512} height={512} loading="lazy" className="h-full w-full object-cover" />
          </a>
          <a href="#" aria-label="Swiggy" className="h-8 w-8 inline-flex items-center justify-center rounded-md overflow-hidden bg-[var(--brand-cream)]">
            <img src={swiggyLogo} alt="Swiggy" width={512} height={512} loading="lazy" className="h-full w-full object-cover" />
          </a>
        </div>
      </div>
    </footer>
  );
}