import ProductCard from "./ProductCard";

export default function ProductGrid({ id, title, products, onSelectProduct, onAddToCart }) {
  const items = products || [];

  if (items.length === 0) return null;

  return (
    <section id={id} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 scroll-mt-16">
      <h2 className="font-serif text-3xl text-center mb-12">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} onClick={onSelectProduct} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
