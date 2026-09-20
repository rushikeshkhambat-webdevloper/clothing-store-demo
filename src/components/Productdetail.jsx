import { useState } from "react";

/**
 * NOTE: assumes each product may optionally provide `sizes` (array of strings)
 * and `colors` (array of hex strings, or objects like { name, hex }).
 * Sensible defaults are used when a product doesn't define them.
 */

const DEFAULT_SIZES = ["XS", "S", "M", "L", "XL"];
const DEFAULT_COLORS = [
  { name: "Ink", hex: "#1A1A1A" },
  { name: "Sage", hex: "#6B705C" },
  { name: "Mist", hex: "#E5E3E0" },
];

function normalizeColors(colors) {
  if (!colors || colors.length === 0) return DEFAULT_COLORS;
  return colors.map((c) =>
    typeof c === "string" ? { name: c, hex: c } : { name: c.name ?? c.hex, hex: c.hex ?? "#1A1A1A" }
  );
}

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 8h12l-1 12H7z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export default function ProductDetail({ product, onBack, onAddToCart, onOpenCart, cartCount = 0 }) {
  const sizes = product.sizes && product.sizes.length > 0 ? product.sizes : DEFAULT_SIZES;
  const colors = normalizeColors(product.colors);

  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0].name);
  const [added, setAdded] = useState(false);

  const buildMessage = () =>
    `Hi! I'm interested in: ${product.name} (Size: ${size}, Color: ${color}) - \u20B9${product.price}`;

  const handleWhatsAppOrder = () => {
    const link = `https://wa.me/919999999999?text=${encodeURIComponent(buildMessage())}`;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleAddToBag = () => {
    onAddToCart?.(product, size, color, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="min-h-screen bg-cream">
      <button
        onClick={onBack}
        className="fixed top-5 left-5 md:top-8 md:left-8 z-30 flex items-center gap-2 text-xs uppercase tracking-widest bg-cream/90 backdrop-blur-sm px-3 py-2 hover:opacity-70 transition-opacity"
      >
        <BackArrow /> Back
      </button>

      <button
        onClick={onOpenCart}
        aria-label="Open bag"
        className="fixed top-5 right-5 md:top-8 md:right-8 z-30 flex items-center gap-2 bg-cream/90 backdrop-blur-sm px-3 py-2 hover:opacity-70 transition-opacity"
      >
        <span className="relative">
          <BagIcon />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-[10px] leading-none font-medium w-4 h-4 rounded-full bg-sage text-white flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </span>
      </button>

      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Image - sticky on desktop */}
        <div className="lg:sticky lg:top-0 lg:h-screen">
          <div className="aspect-[3/4] lg:h-full lg:aspect-auto bg-mist overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Details - sticky on desktop */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center px-6 py-10 lg:px-4 lg:py-0">
          {product.category && (
            <p className="text-xs uppercase tracking-widest text-ink/50 mb-3">{product.category}</p>
          )}
          <h1 className="font-serif text-3xl">{product.name}</h1>
          <p className="text-lg text-ink/60 mt-2">
            {"\u20B9"}{product.price}
          </p>

          {product.description && (
            <p className="text-sm text-ink/50 leading-relaxed mt-5 max-w-md">{product.description}</p>
          )}

          {/* Size selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-ink/50 mb-3">Size</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[3rem] px-4 py-2 rounded-sm text-xs uppercase tracking-widest border transition-colors ${
                    size === s ? "bg-ink text-cream border-ink" : "border-mist text-ink/70 hover:border-ink/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Color selector */}
          <div className="mt-7">
            <p className="text-xs uppercase tracking-widest text-ink/50 mb-3">
              Color <span className="normal-case text-ink/35">— {color}</span>
            </p>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  aria-label={c.name}
                  className={`w-7 h-7 rounded-full transition-all ${
                    color === c.name ? "ring-1 ring-ink ring-offset-2 ring-offset-cream" : ""
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-3">
            <button
              onClick={handleAddToBag}
              className="w-full bg-ink text-cream text-xs uppercase tracking-widest py-4 hover:opacity-90 transition-opacity"
            >
              {added ? "Added to Bag" : "Add to Bag"}
            </button>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full border border-ink text-ink text-xs uppercase tracking-widest py-4 hover:bg-ink hover:text-cream transition-colors"
            >
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
