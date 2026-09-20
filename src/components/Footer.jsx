export default function Footer() {
  return (
    <footer className="border-t border-mist">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-xl tracking-[0.15em]">AURA</p>
          <p className="text-sm text-ink/50 mt-3 max-w-xs">
            Essential pieces for the modern wardrobe.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink/40 mb-4">Links</p>
          <ul className="space-y-2.5 text-sm text-ink/70">
            <li><a href="#product-grid" className="hover:text-ink transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-ink transition-colors">About</a></li>
            <li><a href="#" className="hover:text-ink transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-ink transition-colors">Journal</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink/40 mb-4">Social</p>
          <ul className="space-y-2.5 text-sm text-ink/70">
            <li><a href="#" className="hover:text-ink transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-ink transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-ink transition-colors">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mist px-5 md:px-8 py-5">
        <p className="text-xs text-ink/40 max-w-7xl mx-auto">
          © {new Date().getFullYear()} AURA Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
