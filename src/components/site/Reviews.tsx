import { Star } from "lucide-react";
import truffle from "@/assets/product-truffle-cake.jpg";

const tags = ["Choco Truffle", "Biscoff Cheesecake", "Nutella Cake", "KitKat Waffle", "Brownies", "Rasmalai Cake"];

export function Reviews() {
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

          <div className="mt-5 flex items-start gap-3">
            <img src={truffle} alt="" loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover border-2 border-[var(--brand-cocoa-deep)]" />
            <p className="text-sm text-[var(--brand-cocoa-deep)]/80">
              "Our master plan to freshen up your day starts with a slice of pure bakery magic — try them all."
              <br />
              <span className="font-bold">— What we are dishing out ›</span>
            </p>
          </div>
        </div>

        <div className="md:col-span-1 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="chip bg-[var(--brand-cream)]">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}