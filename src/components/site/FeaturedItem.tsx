import featured from "@/assets/featured-item.jpg";
import { getFeaturedOfTheDay } from "@/data/menu";

export function FeaturedItem() {
  const item = getFeaturedOfTheDay();
  const today = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: image with circular text */}
        <div className="relative max-w-md">
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full border-2 border-[var(--brand-cocoa-deep)] flex items-center justify-center bg-[var(--brand-cream)] z-20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--brand-cocoa-deep)] text-center leading-tight">
              Fun for<br />the whole<br />family
            </span>
          </div>
          <div className="rounded-3xl bg-[var(--brand-blue)] p-6">
            <img
              src={featured}
              alt="Cheesecake slice and mini cupcakes"
              loading="lazy"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl object-cover aspect-[4/5]"
            />
          </div>
        </div>

        {/* Right: text */}
        <div>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold text-[var(--brand-cocoa-deep)] leading-tight">
            YOUR ONLY <br />
            DOSE OF <span className="inline-flex items-center gap-2">DELIGHT <span className="text-3xl">🍪</span></span>
          </h2>

          <div className="mt-6 flex items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-cocoa-deep)]/70">Featured Item —</p>
            <span className="chip bg-[var(--brand-yellow)] text-[10px]">★ Today's Pick</span>
          </div>
          <p className="text-xs uppercase tracking-widest text-[var(--brand-cocoa-deep)]/50 mt-1">{today}</p>

          <div className="mt-3 flex items-center gap-4">
            <img src={item.img} alt={item.name} loading="lazy" width={80} height={80} className="h-16 w-16 rounded-xl object-cover" />
            <div className="flex-1">
              <p className="font-display text-2xl font-bold text-[var(--brand-cocoa-deep)]">{item.name}</p>
              <p className="text-sm text-[var(--brand-cocoa-deep)]/60">{item.eggless ? "Eggless available" : item.tagline}</p>
            </div>
          </div>

          <p className="mt-6 max-w-md text-sm text-[var(--brand-cocoa-deep)]/70 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </section>
  );
}
