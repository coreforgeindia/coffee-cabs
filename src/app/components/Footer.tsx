import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/images/logo.png" alt="Coffee Cabs" className="h-9 w-auto filter invert" />
            </Link>
            <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4">
              Premium luxury chauffeur services from Bangalore. Toyota Innova Crysta & Force Tempo Traveller rentals for outstation travel across India.
            </p>
            <div className="space-y-2 text-xs text-[#a1a1aa]">
              <a href="tel:+917676726209" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={13} /> +91 76767 26209
              </a>
              <a href="mailto:info@coffeecabs.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={13} /> info@coffeecabs.in
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="shrink-0" /> Bangalore, Karnataka, India
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Our 3 Vehicles
            </h4>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors">
                  Innova Crysta Premium (₹19/km)
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors">
                  7+1 TT Recliner (₹35/km)
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors">
                  9+1 TT Luxury (₹32/km)
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Fare Matrix & Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Popular Trips
            </h4>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              <li>
                <Link to="/packages/mysore" className="hover:text-white transition-colors">
                  Bangalore to Mysore
                </Link>
              </li>
              <li>
                <Link to="/packages/coorg" className="hover:text-white transition-colors">
                  Bangalore to Coorg
                </Link>
              </li>
              <li>
                <Link to="/packages/ooty" className="hover:text-white transition-colors">
                  Bangalore to Ooty
                </Link>
              </li>
              <li>
                <Link to="/packages/goa" className="hover:text-white transition-colors">
                  Bangalore to Goa
                </Link>
              </li>
              <li>
                <Link to="/custom-trip" className="text-white font-bold hover:underline">
                  Custom Multi-Stop Trip →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Fare Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p>© {new Date().getFullYear()} Coffee Cabs. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917676726209"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
