import { Star, Quote } from "lucide-react";
import { useState } from "react";

const tags = ["Choco Truffle", "Biscoff Cheesecake", "Nutella Cake", "KitKat Waffle", "Brownies", "Rasmalai Cake"];

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
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="order" className="px-4 py-16">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[var(--brand-blue)] p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center relative overflow-hidden">
        <div className="md:col-span-1">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[var(--brand-cocoa-deep)] leading-tight">
            <span className="text-[var(--brand-yellow)] text-stroke-cream">WITH</span> <br /> ENOUGH SUGAR, <br /> ANYTHING <br /> IS GOOD!
          </h2>
        </div>

        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <p className="font-display text-5xl font-extrabold text-[var(--brand-cocoa-deep)]">4.8</p>
            <div>
              <div className="flex gap-0.5 text-[var(--brand-orange)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-xs text-[var(--brand-cocoa-deep)]/70 mt-1">Based on 2,150+ reviews</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-[var(--brand-cream)] border-2 border-[var(--brand-cocoa-deep)] shadow-[3px_3px_0_var(--brand-cocoa-deep)] p-4 relative">
            <Quote className="absolute -top-3 -left-2 h-6 w-6 text-[var(--brand-orange)] fill-current" />
            <p className="text-sm text-[var(--brand-cocoa-deep)]/85 leading-relaxed italic">
              "{t.text}"
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center font-display font-extrabold text-[var(--brand-cocoa-deep)] border-2 border-[var(--brand-cocoa-deep)] text-sm"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div className="flex-1">
                <p className="font-display font-extrabold text-[var(--brand-cocoa-deep)] text-sm leading-tight">{t.name}</p>
                <p className="text-[11px] text-[var(--brand-cocoa-deep)]/60 uppercase tracking-wider">{t.location} · loved the {t.item}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-3 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show review ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all border border-[var(--brand-cocoa-deep)] ${i === active ? "w-8 bg-[var(--brand-cocoa-deep)]" : "w-2.5 bg-[var(--brand-cream)]"}`}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-1 flex flex-wrap gap-2">
          {tags.map((tg) => (
            <span key={tg} className="chip bg-[var(--brand-cream)]">{tg}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
