import { Star, Quote } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Rajpura",
    initials: "PS",
    color: "var(--brand-orange)",
    text: "Biscoff cheesecake was gone in minutes. Smooth, balanced, and easily the best in town.",
    item: "Biscoff Cheesecake",
  },
  {
    name: "Aman Verma",
    location: "Patiala",
    initials: "AV",
    color: "var(--brand-mint)",
    text: "I drive from Patiala for the KitKat waffles. Crisp edges, soft center, and real chocolate every time.",
    item: "KitKat Waffle",
  },
  {
    name: "Simran Kaur",
    location: "Rajpura",
    initials: "SK",
    color: "var(--brand-pink)",
    text: "The eggless Nutella cake is rich, airy, and never too sweet. My kids ask for it every weekend.",
    item: "Nutella Cake",
  },
];

export function Reviews() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goTo = (i: number) => setActive(i);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < 40) return;

    if (distance > 0) {
      setActive((current) => Math.min(current + 1, testimonials.length - 1));
    } else {
      setActive((current) => Math.max(current - 1, 0));
    }

    touchStartX.current = null;
    touchEndX.current = null;
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

        {/* Right column: one compact review at a time with dots */}
        <div className="flex flex-col items-center md:items-stretch">
          <div
            className="mx-auto w-full max-w-[19rem] overflow-hidden px-2 py-2"
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
            onTouchStart={onTouchStart}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  data-review
                  className="w-full shrink-0"
                >
                  <div className="relative flex h-[11.75rem] flex-col justify-between rounded-2xl border-2 border-[var(--brand-cocoa-deep)] bg-[var(--brand-cream)] p-4 shadow-[3px_3px_0_var(--brand-cocoa-deep)]">
                    <Quote className="absolute -top-3 -left-2 h-6 w-6 text-[var(--brand-orange)] fill-current" />
                    <p className="pr-1 text-[13px] leading-6 text-[var(--brand-cocoa-deep)]/85 italic">
                      "{t.text}"
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-cocoa-deep)] font-display text-sm font-extrabold text-[var(--brand-cocoa-deep)]"
                        style={{ background: t.color }}
                      >
                        {t.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display text-sm font-extrabold leading-tight text-[var(--brand-cocoa-deep)]">{t.name}</p>
                        <p className="truncate text-[10px] uppercase tracking-wider text-[var(--brand-cocoa-deep)]/60">{t.location} · loved the {t.item}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clickable dots */}
          <div className="mx-auto mt-4 flex w-full justify-center gap-2">
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
