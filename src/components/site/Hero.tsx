import heroCake from "@/assets/hero-cake.jpg";

export function Hero() {
  return (
    <section className="px-4 pt-6">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[var(--brand-cream)] border-2 border-[var(--brand-cocoa-deep)]/10 shadow-[var(--shadow-soft)] overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 p-6 md:p-12 items-center">
          {/* Left text */}
          <div className="relative">
            <h1 className="font-display font-extrabold text-[var(--brand-cocoa-deep)] leading-[0.9] text-5xl sm:text-6xl md:text-7xl">
              <span className="inline-flex items-center gap-3 flex-wrap">
                BAKE
                <span className="chip bg-[var(--brand-mint)] -rotate-3 text-sm">🍰 Tasty</span>
              </span>
              <br />
              THE CAKES
              <span className="chip ml-2 bg-[var(--brand-orange)] text-[var(--brand-cream)] rotate-3 text-sm align-middle">🔥 Fresh</span>
            </h1>

            <p className="mt-8 font-display text-2xl md:text-3xl font-bold text-[var(--brand-cocoa-deep)] leading-tight">
              PREMIUM CAKES <br />
              AND DESSERTS MADE <br />
              FROM SCRATCH
              <span className="chip ml-2 bg-[var(--brand-blue)] text-sm align-middle">✨ Daily</span>
            </p>

            <p className="mt-5 max-w-md text-sm text-[var(--brand-cocoa-deep)]/70">
              We're literally obsessed with giving more of what you love — soft, rich, and unforgettable bakes from our oven in Rajpura.
            </p>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <a href="#order" className="pill-btn">Order Now →</a>
              <a href="#products" className="pill-btn pill-btn-ghost underline-offset-4 hover:underline">Our Menu ›</a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute inset-4 rounded-3xl bg-[var(--brand-yellow)] -z-0" />
            <img
              src={heroCake}
              alt="Stack of fresh chocolate cakes by Cake Bake By Divesh"
              width={1024}
              height={1024}
              className="relative z-10 w-full h-auto rounded-3xl object-cover aspect-square"
            />
            <span className="absolute -top-2 right-6 chip bg-[var(--brand-cream)] z-20 rotate-6">🥐 Fresh Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
}