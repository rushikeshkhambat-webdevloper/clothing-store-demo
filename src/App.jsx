import { useState } from "react";
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryRow from "./components/CategoryRow";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./components/ProductDetail";
import InstagramStrip from "./components/InstagramStrip";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const addToCart = (product, size, color, qty = 1) => {
    const key = `${product.id}-${size}-${color}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) => (item.key === key ? { ...item, qty: item.qty + qty } : item));
      }
      return [...prev, { key, product, size, color, qty }];
    });
    setCartOpen(true);
  };

  const updateQty = (key, qty) => {
    setCart((prev) =>
      prev
        .map((item) => (item.key === key ? { ...item, qty: Math.max(1, qty) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (key) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.qty * item.product.price, 0);

  const womenProducts = products.filter((p) => p.gender === "Women");
  const menProducts = products.filter((p) => p.gender === "Men");

  return (
    <>
      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onBack={handleBack}
          onAddToCart={addToCart}
          onOpenCart={() => setCartOpen(true)}
          cartCount={cartCount}
        />
      ) : (
        <div className="min-h-screen bg-cream">
          <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
          <Hero />
          <CategoryRow />
          <ProductGrid
            id="product-grid"
            title="New Arrivals"
            products={products.slice(0, 8)}
            onSelectProduct={handleSelectProduct}
            onAddToCart={addToCart}
          />
          <ProductGrid
            id="women"
            title="Women's Edit"
            products={womenProducts}
            onSelectProduct={handleSelectProduct}
            onAddToCart={addToCart}
          />
          <ProductGrid
            id="men"
            title="Men's Edit"
            products={menProducts}
            onSelectProduct={handleSelectProduct}
            onAddToCart={addToCart}
          />
          <InstagramStrip />
          <Footer />
        </div>
      )}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQty={updateQty}
        removeFromCart={removeFromCart}
        total={cartTotal}
      />
    </>
  );
}
