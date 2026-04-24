import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedItem } from "@/components/site/FeaturedItem";
import { Products } from "@/components/site/Products";
import { LocationMap } from "@/components/site/LocationMap";
import { WhySpecial } from "@/components/site/WhySpecial";
import { Reviews } from "@/components/site/Reviews";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--brand-cocoa-deep)]">
      <Navbar />
      <main className="bg-[var(--brand-cream)]">
        <Hero />
        <FeaturedItem />
        <Products />
        <LocationMap />
        <WhySpecial />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
