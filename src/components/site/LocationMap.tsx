import { MapPin, Phone, Clock } from "lucide-react";

export function LocationMap() {
  return (
    <section id="contact" className="px-4 py-12">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[var(--brand-cocoa-deep)] text-[var(--brand-cream)] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative overflow-hidden">
        {/* Decorative wheat illustration — hidden on mobile, smaller on desktop */}
        <div className="hidden lg:block absolute right-6 top-6 text-[var(--brand-cream)]/[0.07] text-[120px] leading-none select-none pointer-events-none">🌾</div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden border-4 border-[var(--brand-cream)] aspect-[4/3]">
          <iframe
            title="Cake Bake By Divesh location in Rajpura"
            src="https://www.google.com/maps?q=Rajpura,+Punjab,+India&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Text */}
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
            VISIT OUR <br /> BAKERY IN <br /> RAJPURA
            <span className="text-[var(--brand-orange)]"> !</span>
          </h2>

          <p className="mt-5 max-w-md text-sm text-[var(--brand-cream)]/75 leading-relaxed">
            Step into the warmth of fresh-baked aromas. We're nestled in the heart of Rajpura — come say hi, taste a sample, and pick your favourite cake straight from our display.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--brand-yellow)]" /> Main Bazaar, Rajpura, Punjab 140401</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--brand-yellow)]" /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-[var(--brand-yellow)]" /> Open Daily • 10:00 AM – 11:00 PM</li>
          </ul>

          <a href="https://www.google.com/maps?q=Rajpura,+Punjab" target="_blank" rel="noreferrer" className="mt-7 inline-block pill-btn">Get Directions</a>
        </div>
      </div>
    </section>
  );
}