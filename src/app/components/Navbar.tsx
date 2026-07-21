import { useState } from "react";
import { Menu, X, Phone, Compass } from "lucide-react";
import { Link, useLocation } from "react-router";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Fleet", to: "/fleet" },
  { label: "Packages", to: "/packages" },
  { label: "Custom Trip", to: "/custom-trip" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 text-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/logo.png"
              alt="Coffee Cabs Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs uppercase tracking-wider font-bold transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-[#09090b] border-b-2 border-[#09090b] pb-1"
                    : "text-[#71717a] hover:text-[#09090b]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/custom-trip"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#09090b] text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Compass size={13} /> Custom Trip
            </Link>

            <a
              href="https://wa.me/917676726209"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="tel:+917676726209"
              className="flex items-center gap-1.5 text-xs font-bold text-[#09090b] hover:text-[#52525b] transition-colors"
            >
              <Phone size={13} />
              +91 76767 26209
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden w-10 h-10 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[#09090b]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white text-[#09090b] flex flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-black/5">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img src="/images/logo.png" alt="Coffee Cabs" className="h-8 w-auto" />
              </Link>
              <button
                className="w-10 h-10 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[#09090b]"
                onClick={() => setMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="pt-8 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-2xl font-bold py-2 transition-colors ${
                    location.pathname === link.to ? "text-[#09090b]" : "text-[#a1a1aa]"
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-black/5">
            <Link
              to="/custom-trip"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#09090b] text-white text-sm font-bold rounded-full"
            >
              <Compass size={16} /> Build Custom Trip
            </Link>
            <a
              href="tel:+917676726209"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#f4f4f5] text-[#09090b] text-sm font-bold rounded-full"
            >
              <Phone size={16} /> Call +91 76767 26209
            </a>
          </div>
        </div>
      )}
    </>
  );
}
