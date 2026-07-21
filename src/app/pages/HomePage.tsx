import { useState } from "react";
import { ArrowRight, Shield, Clock, Zap, MapPin, Search, Star, Car, Filter } from "lucide-react";
import { Link } from "react-router";
import { VEHICLES } from "../data/vehicles";
import { DESTINATIONS } from "../data/destinations";
import VehicleCard from "../components/VehicleCard";
import Calculator from "../components/Calculator";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Hill Station", "Heritage & Forts", "Beach Escapes", "Wildlife & Nature", "Pilgrimage", "Lakes & Waterfalls"];
  const defaultFallbackImg = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop";

  const filteredDestinations = DESTINATIONS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || d.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).slice(0, 12);

  return (
    <div className="bg-white text-[#09090b]">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-dvh flex flex-col justify-between bg-[#09090b] text-white pt-16 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Coffee Cabs Fleet"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
        </div>

        {/* Center Content / Badge / Welcome */}
        <div className="relative z-10 max-w-xl mx-auto px-4 text-center pt-12 sm:pt-20 flex flex-col items-center">
          {/* Center Circular Logo Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center p-3 mb-6 shadow-2xl">
            <img
              src="/images/logo.png"
              alt="Coffee Cabs Logo Badge"
              className="w-full h-full object-contain filter invert"
            />
          </div>

          <div className="inline-block tracking-widest text-xs uppercase font-extrabold text-neutral-300 mb-2">
            COFFEE CABS
          </div>
          <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-6">
            Drive Luxury · Premium Ground Transport
          </p>

          <h1
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            WELCOME
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto mb-8 font-medium leading-relaxed">
            Find your next ride, feel the power.
            <br />
            <span className="text-neutral-400">Where luxury meets performance & precision.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto mb-10">
            <a
              href="#fleet"
              className="w-full py-4 px-8 bg-white text-[#09090b] text-sm font-bold rounded-full hover:bg-neutral-200 transition-all duration-300 text-center shadow-xl flex items-center justify-center gap-2"
            >
              <Car size={16} />
              View Our Fleet
            </a>
            <a
              href="#calculator"
              className="w-full py-4 px-8 bg-white/10 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              Get Fare Estimate
            </a>
          </div>
        </div>

        {/* Curved White Arc Overlay */}
        <div className="relative z-10 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 sm:h-20 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* ── METRICS STRIP ── */}
      <section className="bg-[#fafafa] border-b border-black/5 text-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "Coffee Cabs Destination Packages" },
              { value: "₹19", label: "Starting Per Km Fare" },
              { value: "4.9★", label: "Google Rated Service" },
              { value: "100%", label: "Verified Luxury Vehicles" },
            ].map((m) => (
              <div key={m.label}>
                <div
                  className="text-3xl sm:text-4xl font-extrabold text-[#09090b] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-xs tracking-widest uppercase text-[#71717a] font-semibold">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET SECTION ── */}
      <section id="fleet" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3 bg-[#fafafa] border border-black/10 px-4 py-1.5 rounded-full">
              Official Fleet
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-[#09090b] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our 3 Dedicated Luxury Vehicles
            </h2>
            <p className="text-sm text-[#71717a]">
              Toyota Innova Crysta & Force Luxury Tempo Travellers. Use the slideshow controls to explore interior layouts and seating details.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VEHICLES.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 sm:py-24 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3">
              Why Coffee Cabs
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#09090b]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Gold Standard in Chauffeur Service
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "100% Transparent Billing",
                desc: "Per-km rates with zero hidden surge charges. Driver allowance and minimum 300km/day rules calculated clearly.",
              },
              {
                icon: Clock,
                title: "Punctual Doorstep Pickup",
                desc: "Guaranteed on-time pickups across Bangalore for outstation trips, pilgrimages, and hill station vacations.",
              },
              {
                icon: Zap,
                title: "Sanitized & Maintained Fleet",
                desc: "Strict multi-point safety checks, dual-AC performance testing, and deep interior cleaning before every tour.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-3xl border border-black/10 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#09090b] text-white flex items-center justify-center mb-6 font-bold">
                  <feature.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#09090b] mb-3">{feature.title}</h3>
                <p className="text-xs text-[#71717a] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <Calculator />

      {/* ── 200 DESTINATIONS EXPLORER ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3">
                Dedicated Outstation Catalog
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#09090b]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Explore Packages Across India
              </h2>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#09090b] text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-colors shrink-0"
            >
              Browse All Packages Catalog <ArrowRight size={14} />
            </Link>
          </div>

          {/* Search & Select Dropdown Filter */}
          <div className="bg-[#fafafa] p-4 rounded-3xl border border-black/5 mb-10">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717a]" />
                <input
                  type="text"
                  placeholder="Search destination name or state (e.g., Mysore, Coorg, Ooty, Goa, Tirupati)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-[#09090b] placeholder:text-[#a1a1aa] pl-12 pr-4 py-3.5 rounded-2xl border border-black/10 text-sm focus:outline-none focus:border-[#09090b] transition-colors shadow-sm font-medium"
                />
              </div>

              {/* Category Select Dropdown */}
              <div className="relative w-full sm:w-64">
                <Filter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717a] pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white text-[#09090b] font-bold pl-11 pr-8 py-3.5 rounded-2xl border border-black/10 text-sm focus:outline-none focus:border-[#09090b] transition-colors shadow-sm appearance-none cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === "All" ? "Filter by Category: All" : cat}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#71717a]">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredDestinations.map((d) => (
              <Link
                key={d.slug}
                to={`/packages/${d.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-black/10 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
                    <img
                      src={d.image}
                      alt={`${d.name} Coffee Cabs Package`}
                      onError={(e) => {
                        e.currentTarget.src = defaultFallbackImg;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {d.distance} km
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] uppercase tracking-wider text-[#71717a] font-bold mb-1">
                      {d.state} · {d.category}
                    </div>
                    <h3 className="text-base font-bold text-[#09090b] mb-1 group-hover:text-neutral-600 transition-colors">
                      {d.name}
                    </h3>
                    <p className="text-[11px] text-[#71717a] flex items-center gap-1">
                      <MapPin size={11} /> {d.time} travel time
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#09090b] group-hover:translate-x-0.5 transition-transform">
                    <span>Calculate Fare</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 sm:py-24 bg-[#fafafa] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3">
              Reviews
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#09090b]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Coffee Cabs Travelers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Booked the Toyota Innova Crysta for a family trip to Coorg. Driver was punctual, car was clean, and billing was 100% transparent.",
                name: "Vikram R.",
                details: "Bangalore to Coorg",
              },
              {
                quote: "The 7+1 Recliner TT was incredible! We traveled to Tirupati with family and the Maharaja recliner seats made the journey super comfortable.",
                name: "Suresh K.",
                details: "Tirupati Pilgrimage",
              },
              {
                quote: "Awesome experience with 9+1 Tempo Traveller for our corporate retreat to Ooty. Easy fare calculation and instant booking via WhatsApp.",
                name: "Pooja M.",
                details: "Corporate Trip to Ooty",
              },
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-black/10 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex gap-1 mb-4 text-[#09090b]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-[#09090b] text-[#09090b]" />
                    ))}
                  </div>
                  <blockquote className="text-xs text-[#52525b] leading-relaxed mb-6">
                    "{t.quote}"
                  </blockquote>
                </div>
                <div className="border-t border-black/5 pt-4">
                  <div className="text-sm font-bold text-[#09090b]">{t.name}</div>
                  <div className="text-[11px] text-[#71717a]">{t.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
