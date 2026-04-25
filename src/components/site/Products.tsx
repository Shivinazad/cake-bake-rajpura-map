import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { categories, menu } from "@/data/menu";

export function Products() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section id="products" className="px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[var(--brand-cocoa-deep)] leading-tight">
            PRODUCTS WE BAKE <br /> HERE DAILY —
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => {
              const count = menu.filter((m) => m.category === c.slug).length;
              return (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="chip hover:-translate-y-0.5 transition-transform"
                  style={{ background: c.color }}
                >
                  {c.name}{" "}
                  <span className="ml-1 inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full bg-[var(--brand-cocoa-deep)] text-[var(--brand-cream)] text-[10px]">
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Scrollable carousel */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: "none" }}
          >
            {menu.map((p) => (
              <Link
                key={p.id}
                to="/category/$slug"
                params={{ slug: p.category }}
                data-card
                className="group flex-none w-[80%] sm:w-[45%] lg:w-[31%] snap-start"
              >
                <div
                  className="rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center"
                  style={{ background: p.bg }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-wider text-[var(--brand-cocoa-deep)]">
                    {p.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--brand-cocoa-deep)]/60">
                    {p.tagline}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="hidden md:flex absolute -left-4 top-[42%] -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-cream)] border-2 border-[var(--brand-cocoa-deep)] shadow-[3px_3px_0_var(--brand-cocoa-deep)] text-[var(--brand-cocoa-deep)] hover:-translate-y-[55%] hover:translate-x-[-2px] transition-transform"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="hidden md:flex absolute -right-4 top-[42%] -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-cream)] border-2 border-[var(--brand-cocoa-deep)] shadow-[3px_3px_0_var(--brand-cocoa-deep)] text-[var(--brand-cocoa-deep)] hover:-translate-y-[55%] hover:translate-x-[2px] transition-transform"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
