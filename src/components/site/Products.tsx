import kitkat from "@/assets/product-kitkat-waffle.jpg";
import biscoff from "@/assets/product-biscoff-cheesecake.jpg";
import truffle from "@/assets/product-truffle-cake.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "Cakes", count: 12, color: "var(--brand-pink)" },
  { name: "Waffles", count: 9, color: "var(--brand-mint)" },
  { name: "Cheesecake", count: 7, color: "var(--brand-purple)" },
  { name: "Brownies", count: 6, color: "var(--brand-orange)" },
  { name: "Pastries", count: 14, color: "var(--brand-blue)" },
  { name: "Combo", count: 5, color: "var(--brand-yellow)" },
];

const products = [
  { name: "KitKat Waffle", img: kitkat, bg: "var(--brand-orange)" },
  { name: "Biscoff Cheesecake", img: biscoff, bg: "var(--brand-cream)" },
  { name: "Choco Truffle Cake", img: truffle, bg: "var(--brand-yellow)" },
];

export function Products() {
  return (
    <section id="products" className="px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[var(--brand-cocoa-deep)] leading-tight">
            PRODUCTS WE BAKE <br /> HERE DAILY —
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <span key={c.name} className="chip" style={{ background: c.color }}>
                {c.name} <span className="ml-1 inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full bg-[var(--brand-cocoa-deep)] text-[var(--brand-cream)] text-[10px]">{c.count}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.name} className="group">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center" style={{ background: p.bg }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-extrabold uppercase tracking-wider text-[var(--brand-cocoa-deep)]">
                  {p.name}
                </h3>
              </article>
            ))}
          </div>

          <button aria-label="Previous" className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-cream)] border-2 border-[var(--brand-cocoa-deep)] shadow-[3px_3px_0_var(--brand-cocoa-deep)] text-[var(--brand-cocoa-deep)]">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button aria-label="Next" className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-cream)] border-2 border-[var(--brand-cocoa-deep)] shadow-[3px_3px_0_var(--brand-cocoa-deep)] text-[var(--brand-cocoa-deep)]">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}