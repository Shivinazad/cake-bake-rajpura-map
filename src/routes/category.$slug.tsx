import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { categories, getCategory, getItemsByCategory } from "@/data/menu";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    const items = getItemsByCategory(params.slug);
    return { category, items };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.category.name ?? "Menu";
    const desc = loaderData?.category.description ?? "Fresh handcrafted bakery items in Rajpura.";
    return {
      meta: [
        { title: `${name} — Cake Bake By Divesh` },
        { name: "description", content: desc },
        { property: "og:title", content: `${name} — Cake Bake By Divesh` },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: CategoryPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-[var(--brand-cream)]">
        <div className="text-center">
          <p className="font-display text-2xl text-[var(--brand-cocoa-deep)]">Something went wrong: {error.message}</p>
          <button onClick={() => { router.invalidate(); reset(); }} className="pill-btn mt-6">Retry</button>
        </div>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-8 bg-[var(--brand-cream)]">
      <div className="text-center">
        <h1 className="font-display text-5xl font-extrabold text-[var(--brand-cocoa-deep)]">Category not found</h1>
        <Link to="/" className="pill-btn mt-6 inline-block">Back to Home</Link>
      </div>
    </div>
  ),
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-[var(--brand-cocoa-deep)]">
      <Navbar />
      <main className="bg-[var(--brand-cream)]">
        <section className="px-4 pt-10 pb-6">
          <div className="mx-auto max-w-7xl">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--brand-cocoa-deep)]/70 hover:text-[var(--brand-orange)] transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <div className="mt-6 grid md:grid-cols-2 gap-8 items-end">
              <div>
                <span className="chip" style={{ background: category.color }}>{category.name}</span>
                <h1 className="mt-4 font-display text-5xl md:text-6xl font-extrabold text-[var(--brand-cocoa-deep)] leading-[0.95] uppercase">
                  Our {category.name} <br />
                  <span className="text-[var(--brand-orange)]">menu —</span>
                </h1>
              </div>
              <p className="text-base text-[var(--brand-cocoa-deep)]/75 max-w-md md:justify-self-end">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-10">
          <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article key={p.id} className="group">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center" style={{ background: p.bg }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-extrabold uppercase tracking-wider text-[var(--brand-cocoa-deep)]">{p.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-[var(--brand-cocoa-deep)]/60 mt-1">{p.tagline}</p>
                  </div>
                  {p.eggless && <span className="chip bg-[var(--brand-mint)] text-[10px]">Eggless</span>}
                </div>
                <p className="mt-2 text-sm text-[var(--brand-cocoa-deep)]/75 leading-relaxed">{p.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-wider text-[var(--brand-cocoa-deep)]/60">Explore more —</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {categories.filter((c) => c.slug !== category.slug).map((c) => (
                <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="chip" style={{ background: c.color }}>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
