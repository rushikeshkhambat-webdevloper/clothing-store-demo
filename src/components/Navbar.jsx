import { useEffect, useState } from "react";

const links = [
  { label: "New In", href: "#product-grid" },
  { label: "Women", href: "#women" },
  { label: "Men", href: "#men" },
  { label: "Editorial", href: "#editorial" },
];

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.5-4 4-5.5 7.5-5.5s6 1.5 7.5 5.5" />
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

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          solid ? "bg-cream text-ink shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-20">
          <a href="#" className="font-serif text-xl md:text-2xl tracking-[0.15em]">
            AURA
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-5">
            <button aria-label="Search" className="hidden sm:inline-flex hover:opacity-70 transition-opacity">
              <SearchIcon />
            </button>
            <button aria-label="Account" className="hidden sm:inline-flex hover:opacity-70 transition-opacity">
              <UserIcon />
            </button>
            <button
              aria-label="Open bag"
              onClick={onOpenCart}
              className="relative hover:opacity-70 transition-opacity"
            >
              <BagIcon />
              <span className="absolute -top-2 -right-2 text-[10px] leading-none font-medium w-4 h-4 rounded-full bg-sage text-white flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="md:hidden hover:opacity-70 transition-opacity"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay menu */}
      <div
        className={`fixed inset-0 z-50 bg-cream text-ink transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16">
          <span className="font-serif text-xl tracking-[0.15em]">AURA</span>
          <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <nav className="flex flex-col items-start px-8 pt-10 gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
