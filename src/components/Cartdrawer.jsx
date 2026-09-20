function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export default function CartDrawer({ open, onClose, cart, updateQty, removeFromCart, total }) {
  const handleCheckout = () => {
    if (cart.length === 0) return;
    const lines = cart
      .map(
        (item) =>
          `- ${item.product.name} (Size: ${item.size}, Color: ${item.color}) x${item.qty} - \u20B9${
            item.product.price * item.qty
          }`
      )
      .join("\n");
    const msg = `Hi! I'd like to order:\n${lines}\n\nTotal: \u20B9${total}`;
    const link = `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/30 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-cream shadow-xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-mist shrink-0">
          <p className="text-xs uppercase tracking-widest text-ink/70">
            Your Bag {cart.length > 0 && `(${cart.reduce((n, i) => n + i.qty, 0)})`}
          </p>
          <button aria-label="Close cart" onClick={onClose} className="hover:opacity-60 transition-opacity">
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <p className="text-sm text-ink/40 mt-10 text-center">Your bag is empty.</p>
          ) : (
            <ul className="flex flex-col gap-6">
              {cart.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-mist overflow-hidden shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{item.product.name}</p>
                    <p className="text-xs text-ink/50 mt-1">
                      Size: {item.size} &middot; Color: {item.color}
                    </p>
                    <p className="text-xs text-ink/60 mt-1">{"\u20B9"}{item.product.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-mist">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 text-sm hover:bg-mist transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-xs">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 text-sm hover:bg-mist transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.key)}
                        className="text-xs text-ink/40 uppercase tracking-widest hover:text-ink transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-mist px-6 py-5 shrink-0">
            <div className="flex items-center justify-between text-sm mb-4">
              <span className="text-ink/60">Total</span>
              <span className="font-medium">{"\u20B9"}{total}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-ink text-cream text-xs uppercase tracking-widest py-4 hover:opacity-90 transition-opacity"
            >
              Checkout on WhatsApp
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
