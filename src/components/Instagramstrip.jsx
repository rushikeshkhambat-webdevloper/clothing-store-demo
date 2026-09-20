const images = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=500&auto=format&fit=crop",
];

export default function InstagramStrip() {
  return (
    <section id="editorial" className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 scroll-mt-16">
      <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">Follow @aura.studio</h2>

      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide">
        {images.map((src, i) => (
          <a
            key={i}
            href="#"
            className="shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 overflow-hidden"
          >
            <img
              src={src}
              alt={`Instagram post ${i + 1}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
