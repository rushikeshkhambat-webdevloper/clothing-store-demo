function BagPlusIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 8h12l-1 12H7z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

export default function ProductCard({ product, onClick, onAddToCart }) {
  const handleQuickAdd = (e) => {
    e.stopPropagation();
    const size = product.sizes?.[0] ?? "M";
    const color = product.colors?.[0] ?? "#1A1A1A";
    onAddToCart?.(product, size, color, 1);
  };

  return (
    <div className="text-left group relative">
      <button onClick={() => onClick(product)} className="block w-full text-left focus:outline-none">
        <div className="relative aspect-[3/4] overflow-hidden bg-mist">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="mt-3">
          <p className="text-xs font-medium text-ink truncate">{product.name}</p>
          <p className="text-xs text-ink/50 mt-1">
            {"\u20B9"}{product.price}
          </p>
        </div>
      </button>

      {onAddToCart && (
        <button
          onClick={handleQuickAdd}
          aria-label="Add to bag"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center text-ink opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 shadow-sm hover:bg-cream"
        >
          <BagPlusIcon />
        </button>
      )}
    </div>
  );
}
