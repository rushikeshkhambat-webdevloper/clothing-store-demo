export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("product-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop"
        alt="Editorial fashion photograph of the new collection"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-white/85 text-xs uppercase tracking-[0.3em] mb-5">The New Collection</p>
        <h1 className="font-serif text-white text-5xl md:text-7xl font-medium leading-[1.05] max-w-3xl">
          Everyday Rituals
        </h1>
        <p className="text-white/85 text-sm mt-5 max-w-sm">
          Essential pieces for the modern wardrobe.
        </p>
        <button
          onClick={scrollToProducts}
          className="mt-9 border border-white text-white text-xs uppercase tracking-widest px-10 py-3.5 hover:bg-white hover:text-ink transition-colors duration-300"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
