import { categories } from "../data/products";

/**
 * NOTE: `categories` from src/data/products.js is assumed to be either
 * an array of strings, e.g. ["Women", "Men", "Accessories"],
 * or an array of objects like { name, image }.
 * This normalizes both shapes and falls back to a curated Unsplash
 * image per category name if none is provided. Only the first 2 are
 * shown for the editorial split treatment.
 */

const fallbackImages = {
  women: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  men: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop",
  tops: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  bottoms: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
  outerwear: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
  accessories: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
  default: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
};

function normalize(category) {
  if (typeof category === "string") return { name: category, image: null };
  return { name: category?.name ?? "Category", image: category?.image ?? null };
}

function getImage(name) {
  const key = name?.toLowerCase().trim();
  return fallbackImages[key] || fallbackImages.default;
}

export default function CategoryRow() {
  const items = (categories || []).slice(0, 2).map(normalize);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {items.map((cat) => (
          <a
            key={cat.name}
            href="#product-grid"
            className="relative h-[420px] md:h-[560px] overflow-hidden group block"
          >
            <img
              src={cat.image || getImage(cat.name)}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8">
              <p className="font-serif text-white text-3xl mb-2">{cat.name}</p>
              <span className="text-white text-xs uppercase tracking-widest border-b border-white/60 pb-0.5">
                Shop Now
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
