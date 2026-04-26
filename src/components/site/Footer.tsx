import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--brand-cocoa-deep)] text-[var(--brand-cream)]">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--brand-cream)]/60">© 2026 Cake Bake By Divesh • Rajpura</p>
        <p className="font-display text-2xl font-extrabold tracking-tight">CAKE BAKE<span className="text-[var(--brand-orange)]">.</span></p>
        <div className="flex items-center gap-3 text-xs">
          <a href="#" aria-label="Instagram" className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-[var(--brand-cream)] text-[var(--brand-cocoa-deep)]"><Instagram className="h-4 w-4" /></a>
          <a href="#" aria-label="Zomato" className="h-8 px-2 inline-flex items-center justify-center rounded-md bg-[var(--brand-cream)] text-[var(--brand-cocoa-deep)] text-[11px] font-bold tracking-tight">
            zomato
          </a>
          <a href="#" aria-label="Swiggy" className="h-8 px-2 inline-flex items-center justify-center rounded-md bg-[var(--brand-cream)] text-[var(--brand-cocoa-deep)] text-[11px] font-bold tracking-tight">
            swiggy
          </a>
        </div>
      </div>
    </footer>
  );
}