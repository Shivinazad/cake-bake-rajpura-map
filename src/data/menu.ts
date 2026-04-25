import kitkat from "@/assets/product-kitkat-waffle.jpg";
import biscoff from "@/assets/product-biscoff-cheesecake.jpg";
import truffle from "@/assets/product-truffle-cake.jpg";
import nutella from "@/assets/nutella-cake-small.jpg";
import brownies from "@/assets/brownies-stack.jpg";
import fruitcake from "@/assets/fruitcake-stack.jpg";
import featured from "@/assets/featured-item.jpg";

export type Category = {
  slug: string;
  name: string;
  color: string;
  description: string;
};

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  img: string;
  bg: string;
  tagline: string;
  description: string;
  eggless?: boolean;
};

export const categories: Category[] = [
  { slug: "cakes", name: "Cakes", color: "var(--brand-pink)", description: "Soft, rich, celebration-ready cakes baked from scratch every morning." },
  { slug: "waffles", name: "Waffles", color: "var(--brand-mint)", description: "Crispy on the edges, fluffy inside — loaded with all your favourite toppings." },
  { slug: "cheesecake", name: "Cheesecake", color: "var(--brand-purple)", description: "Creamy, dreamy and slow-set — a slice of pure indulgence." },
  { slug: "brownies", name: "Brownies", color: "var(--brand-orange)", description: "Fudgy, gooey, chocolate-packed squares of happiness." },
  { slug: "pastries", name: "Pastries", color: "var(--brand-blue)", description: "Bite-sized bakery joy — perfect with your evening chai or coffee." },
  { slug: "combo", name: "Combo", color: "var(--brand-yellow)", description: "Mix-and-match boxes built to share (or not — we won't tell)." },
];

export const menu: MenuItem[] = [
  { id: "nutella-cake", name: "Nutella Cake", category: "cakes", img: nutella, bg: "var(--brand-orange)", tagline: "Eggless available", description: "A pillowy chocolate sponge layered with silky Nutella ganache and roasted hazelnuts.", eggless: true },
  { id: "choco-truffle", name: "Choco Truffle Cake", category: "cakes", img: truffle, bg: "var(--brand-yellow)", tagline: "Bestseller", description: "Triple-layer dark chocolate sponge soaked in ganache, finished with rich truffle cream." },
  { id: "rasmalai-cake", name: "Rasmalai Cake", category: "cakes", img: fruitcake, bg: "var(--brand-pink)", tagline: "Fusion favourite", description: "Saffron-soaked sponge, cardamom cream and a generous crown of rasmalai shavings." },
  { id: "fruit-gateau", name: "Fresh Fruit Gateau", category: "cakes", img: fruitcake, bg: "var(--brand-mint)", tagline: "Light & fresh", description: "Vanilla chiffon layered with whipped cream and seasonal hand-cut fruit." },

  { id: "kitkat-waffle", name: "KitKat Waffle", category: "waffles", img: kitkat, bg: "var(--brand-orange)", tagline: "Crowd favourite", description: "Belgian waffle drowned in chocolate sauce, crushed KitKat and a scoop of vanilla." },
  { id: "biscoff-waffle", name: "Biscoff Waffle", category: "waffles", img: kitkat, bg: "var(--brand-yellow)", tagline: "Caramel heaven", description: "Warm waffle topped with melted Biscoff spread, biscuit crumbs and cream." },
  { id: "nutella-waffle", name: "Nutella Banana Waffle", category: "waffles", img: kitkat, bg: "var(--brand-pink)", tagline: "Classic combo", description: "Toasted waffle, warm Nutella drizzle, fresh banana slices and powdered sugar." },

  { id: "biscoff-cheesecake", name: "Biscoff Cheesecake", category: "cheesecake", img: biscoff, bg: "var(--brand-cream)", tagline: "Bestseller", description: "Buttery biscuit base, cloud-like cream cheese filling and a Biscoff caramel top." },
  { id: "blueberry-cheesecake", name: "Blueberry Cheesecake", category: "cheesecake", img: biscoff, bg: "var(--brand-blue)", tagline: "Tangy & sweet", description: "Classic baked cheesecake topped with a glossy homemade blueberry compote." },
  { id: "newyork-cheesecake", name: "New York Cheesecake", category: "cheesecake", img: biscoff, bg: "var(--brand-purple)", tagline: "Original recipe", description: "Dense, creamy and rich — the way New York intended. Served with berry coulis." },

  { id: "fudge-brownie", name: "Classic Fudge Brownie", category: "brownies", img: brownies, bg: "var(--brand-cocoa)", tagline: "Warm & gooey", description: "Dense, fudgy chocolate brownie with a crackly top — best served warm." },
  { id: "walnut-brownie", name: "Walnut Brownie", category: "brownies", img: brownies, bg: "var(--brand-orange)", tagline: "Crunch lovers", description: "Fudge brownie loaded with toasted walnuts in every bite." },
  { id: "choco-chip-brownie", name: "Choco Chip Brownie", category: "brownies", img: brownies, bg: "var(--brand-yellow)", tagline: "Double choc", description: "Brownie batter studded with melty dark and white chocolate chips." },

  { id: "choco-pastry", name: "Choco Truffle Pastry", category: "pastries", img: featured, bg: "var(--brand-pink)", tagline: "Tea-time staple", description: "A single-serve slice of our bestselling choco truffle, perfectly portioned." },
  { id: "red-velvet-pastry", name: "Red Velvet Pastry", category: "pastries", img: featured, bg: "var(--brand-orange)", tagline: "Cream cheese frosting", description: "Velvety cocoa sponge layered with tangy cream cheese frosting." },
  { id: "pineapple-pastry", name: "Pineapple Pastry", category: "pastries", img: featured, bg: "var(--brand-yellow)", tagline: "Old-school love", description: "Light vanilla sponge, pineapple compote and fresh whipped cream." },

  { id: "tea-time-box", name: "Tea-Time Box", category: "combo", img: brownies, bg: "var(--brand-mint)", tagline: "Serves 2-3", description: "A curated mix of brownies, pastries and a small jar of cookies." },
  { id: "celebration-box", name: "Celebration Box", category: "combo", img: truffle, bg: "var(--brand-purple)", tagline: "Serves 4-6", description: "Mini cake, assorted pastries and a brownie tower for your special day." },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getItemsByCategory(slug: string) {
  return menu.filter((m) => m.category === slug);
}

/** Deterministic featured item that rotates every calendar day. */
export function getFeaturedOfTheDay(): MenuItem {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const diff = Date.now() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return menu[dayOfYear % menu.length];
}
