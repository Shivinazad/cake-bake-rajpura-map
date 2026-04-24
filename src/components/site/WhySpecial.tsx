import baker from "@/assets/baker-portrait.jpg";
import brownies from "@/assets/brownies-stack.jpg";
import nutella from "@/assets/nutella-cake-small.jpg";
import fruitcake from "@/assets/fruitcake-stack.jpg";

export function WhySpecial() {
  return (
    <section id="about" className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[var(--brand-cocoa-deep)] leading-tight">
            WHY OUR BAKERY <span className="inline-block text-2xl">🥨</span> <br />
            IS SO SPECIAL <span className="inline-block text-[var(--brand-blue)]">~</span> <br />
            TO CUSTOMERS?
          </h2>
          <div className="flex md:justify-end items-center gap-4">
            <span className="hidden md:block w-24 h-[2px] bg-[var(--brand-cocoa-deep)]/30" />
            <a href="#order" className="pill-btn">Shop Now →</a>
          </div>
        </div>

        {/* Composition grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
          <div className="rounded-3xl overflow-hidden aspect-square">
            <img src={brownies} alt="Stack of brownies" loading="lazy" width={700} height={700} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-square bg-[var(--brand-mint)]">
              <img src={nutella} alt="Nutella dessert" loading="lazy" width={400} height={400} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl bg-[var(--brand-cocoa)] text-[var(--brand-cream)] p-5">
              <p className="font-display text-lg font-extrabold leading-tight uppercase">Taste the real <br /> bakery <br /> bliss.</p>
              <p className="mt-3 inline-block bg-[var(--brand-orange)] text-[var(--brand-cocoa-deep)] font-display font-extrabold px-3 py-1 rounded-full text-sm">₹250</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-[var(--brand-yellow)] md:row-span-1 md:col-span-1">
            <img src={baker} alt="Cake Bake By Divesh head baker" loading="lazy" width={800} height={900} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4">
            <span className="chip bg-[var(--brand-mint)] inline-block">★ Combo</span>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src={fruitcake} alt="Fruit cake stack" loading="lazy" width={700} height={700} className="w-full h-full object-cover" />
            </div>
            <blockquote className="text-sm text-[var(--brand-cocoa-deep)]/75 italic">
              <span className="text-3xl text-[var(--brand-orange)] leading-none">"</span> Baking is a craft of love — and we put love into every slice we serve.
              <p className="mt-2 not-italic font-display font-extrabold text-[var(--brand-cocoa-deep)]">— Divesh</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}