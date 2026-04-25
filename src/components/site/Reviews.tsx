import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Rajpura",
    initials: "PS",
    color: "var(--brand-orange)",
    text: "Ordered the Biscoff cheesecake for my sister's birthday — it was gone in fifteen minutes. The texture is ridiculously smooth and not overly sweet. Easily the best bakery in town.",
    item: "Biscoff Cheesecake",
  },
  {
    name: "Aman Verma",
    location: "Patiala",
    initials: "AV",
    color: "var(--brand-mint)",
    text: "Drive down from Patiala just for their KitKat waffles. Crispy outside, soft inside, and the chocolate sauce is real — not that store-bought stuff. Worth every kilometre.",
    item: "KitKat Waffle",
  },
  {
    name: "Simran Kaur",
    location: "Rajpura",
    initials: "SK",
    color: "var(--brand-pink)",
    text: "Their eggless Nutella cake genuinely tastes better than the regular one. My kids ask for it every weekend now. Divesh and the team are super warm too.",
    item: "Nutella Cake",
  },
];

export function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Track which review is centred while user swipes
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector<HTMLElement>("[data-review]");
      if (!card) return;
      const step = card.offsetWidth + 16;
      const idx = Math.round(el.scrollLeft / step);
      setActive(Math.min(testimonials.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    const card = el?.querySelector<HTMLElement>("[data-review]");
    if (!el || !card) return;
    el.scrollTo({ left: (card.offsetWidth + 16) * i, behavior: "smooth" });
  };

  return (
    <section id="order" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[var(--brand-blue)] p-6 md:p-16 grid md:grid-cols-2 gap-10 md:gap-16 md:items-center relative overflow-hidden">
        {/* Left column: heading + rating */}
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[var(--brand-cocoa-deep)] leading-tight">
            <span className="text-[var(--brand-yellow)] text-stroke-cream">WITH</span> <br /> ENOUGH SUGAR, <br /> ANYTHING <br /> IS GOOD!
          </h2>

          <div className="mt-6 flex items-center gap-3">
            <p className="font-display text-5xl font-extrabold text-[var(--brand-cocoa-deep)]">4.8</p>
            <div>
              <div className="flex gap-0.5 text-[var(--brand-orange)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-xs text-[var(--brand-cocoa-deep)]/70 mt-1">Based on 2,150+ reviews</p>
            </div>
          </div>
        </div>

        {/* Right column: compact swipeable reviews with breathing room */}
        <div className="md:px-6">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-review
                className="flex-none w-full snap-center"
              >
                <div className="rounded-2xl bg-[var(--brand-cream)] border-2 border-[var(--brand-cocoa-deep)] shadow-[3px_3px_0_var(--brand-cocoa-deep)] p-5 relative max-w-sm mx-auto">
                  <Quote className="absolute -top-3 -left-2 h-6 w-6 text-[var(--brand-orange)] fill-current" />
                  <p className="text-sm text-[var(--brand-cocoa-deep)]/85 leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center font-display font-extrabold text-[var(--brand-cocoa-deep)] border-2 border-[var(--brand-cocoa-deep)] text-sm shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-extrabold text-[var(--brand-cocoa-deep)] text-sm leading-tight truncate">{t.name}</p>
                      <p className="text-[11px] text-[var(--brand-cocoa-deep)]/60 uppercase tracking-wider truncate">{t.location} · loved the {t.item}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clickable dots */}
          <div className="mt-5 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[var(--brand-cocoa-deep)]" : "w-2 bg-[var(--brand-cocoa-deep)]/30 hover:bg-[var(--brand-cocoa-deep)]/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
