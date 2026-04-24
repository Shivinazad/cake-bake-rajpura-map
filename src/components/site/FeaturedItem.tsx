import featured from "@/assets/featured-item.jpg";
import nutella from "@/assets/nutella-cake-small.jpg";

export function FeaturedItem() {
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

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--brand-cocoa-deep)]/70">Featured Item —</p>

          <div className="mt-3 flex items-center gap-4">
            <img src={nutella} alt="Nutella cake" loading="lazy" width={80} height={80} className="h-16 w-16 rounded-xl object-cover" />
            <div className="flex-1">
              <p className="font-display text-2xl font-bold text-[var(--brand-cocoa-deep)]">Nutella Cake</p>
              <p className="text-sm text-[var(--brand-cocoa-deep)]/60">Eggless available</p>
            </div>
            <p className="font-display text-2xl font-extrabold text-[var(--brand-orange)]">₹450</p>
          </div>

          <p className="mt-6 max-w-md text-sm text-[var(--brand-cocoa-deep)]/70 leading-relaxed">
            Every cake should have a show-stopping moment in their repertoire — and this one is one of our absolute favourites, soft, rich, and pure indulgence.
          </p>
        </div>
      </div>
    </section>
  );
}