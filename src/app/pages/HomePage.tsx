import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../utils/gsapSetup";
import {
  ArrowRight,
  Shield,
  Clock,
  Zap,
  MapPin,
  Search,
  Star,
  Car,
  Filter,
  Phone,
  MessageSquare,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router";
import { VEHICLES } from "../data/vehicles";
import { DESTINATIONS } from "../data/destinations";
import VehicleCard from "../components/VehicleCard";
import Calculator from "../components/Calculator";
import FleetComparison from "../components/FleetComparison";
import PopularRoutesMatrix from "../components/PopularRoutesMatrix";

export default function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = [
    "All",
    "Hill Station",
    "Heritage & Forts",
    "Beach Escapes",
    "Wildlife & Nature",
    "Pilgrimage",
    "Lakes & Waterfalls",
  ];
  const defaultFallbackImg =
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop";

  const filteredDestinations = DESTINATIONS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || d.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).slice(0, 12);

  const faqs = [
    {
      q: "How is outstation pricing calculated at Coffee Cabs?",
      a: "Outstation pricing is calculated transparently on a per-kilometer basis (₹19/km for Innova Crysta, ₹35/km for 7+1 TT Recliner, ₹38-₹50/km for Force Urbania variants, and ₹50/km for Buses) with a standard 300 km/day minimum billing rule plus driver daily allowance. Tolls, parking, and state permit taxes are charged extra as per actual receipts.",
    },
    {
      q: "What makes the Force Urbania and Tempo Traveller Maharaja seats special?",
      a: "Our Force Urbania and 7+1 Luxury Tempo Travellers feature ultra-wide, plush leather Maharaja-style recliners with individual armrests, leg support, individual AC blowers, ambient LED lighting, and individual USB charging ports for private-jet level comfort.",
    },
    {
      q: "How do I book a vehicle with Coffee Cabs?",
      a: "Booking takes under 60 seconds! Simply choose your vehicle or destination, click 'Book via WhatsApp' or call us directly at +91 76767 26209. We provide instant availability, fixed quotes, and driver confirmation.",
    },
    {
      q: "Do you offer custom multi-stop trip itineraries?",
      a: "Yes! Use our dedicated Custom Trip Planner to build any multi-stop itinerary across India. You can add start/end locations, custom waypoints, get dynamic route distance calculations, and generate direct Google Maps directions links.",
    },
    {
      q: "Does Coffee Cabs own its fleet?",
      a: "Yes, 100% of our fleet is fully owned, commercial-permit registered, insured, and maintained in-house to guarantee top cleanliness, mechanical safety, and dual-AC performance.",
    },
    {
      q: "Are airport transfers and local Bangalore sightseeing available?",
      a: "Absolutely. We offer local Bangalore packages (8 hours / 80 km) as well as pickup and drop services to Kempegowda International Airport (BLR) with 24/7 driver availability.",
    },
  ];

  // GSAP Animations
  useGSAP(
    () => {
      if (!homeRef.current) return;

      // Hero Elements Reveal
      gsap.from(".gsap-hero-badge", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.1,
      });

      gsap.from(".gsap-hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".gsap-hero-cta", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.4,
      });

      // Section Fade Reveals on Scroll
      gsap.utils.toArray<HTMLElement>(".gsap-section-reveal").forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });
    },
    { scope: homeRef }
  );

  return (
    <div ref={homeRef} className="bg-white text-[#09090b]">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative min-h-[92dvh] sm:min-h-dvh flex flex-col justify-between bg-[#09090b] text-white pt-16 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero.png"
            alt="Coffee Cabs Luxury Fleet Vehicles"
            className="w-full h-full object-cover object-bottom opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        </div>

        {/* Center Content / Badge / Welcome */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center pt-8 sm:pt-14 flex flex-col items-center">
          {/* Rating Badge */}
          <div className="gsap-hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold mb-5 shadow-lg">
            <div className="flex gap-0.5 text-white">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-white text-white" />
              ))}
            </div>
            <span>4.9★ (100+ Verified Traveler Reviews)</span>
          </div>

          {/* Center Circular Logo Badge */}
          <div className="gsap-hero-badge w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center p-2.5 mb-3 shadow-2xl">
            <img
              src="/images/logo.png"
              alt="Coffee Cabs Logo Badge"
              className="w-full h-full object-contain filter invert"
            />
          </div>

          <div className="gsap-hero-title inline-block tracking-widest text-[11px] uppercase font-extrabold text-neutral-300 mb-1">
            COFFEE CABS BANGALORE
          </div>
          <p className="gsap-hero-title text-[11px] text-neutral-400 uppercase tracking-widest font-semibold mb-4">
            Bangalore's Premier Luxury Car & Traveller Service
          </p>

          <h1
            className="gsap-hero-title text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            WELCOME
          </h1>

          <p className="gsap-hero-title text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mb-5 font-medium leading-relaxed">
            Find your next ride, feel the power.
            <br />
            <span className="text-neutral-400">Where luxury meets performance & precision.</span>
          </p>

          {/* Key Quick Stats */}
          <div className="gsap-hero-title grid grid-cols-3 gap-3 w-full max-w-sm mb-6 bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/15 shadow-xl">
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-white">8+ Years</div>
              <div className="text-[10px] text-neutral-400 font-semibold">Excellence</div>
            </div>
            <div className="border-x border-white/15 px-1">
              <div className="text-xs sm:text-sm font-extrabold text-white">5000+ Groups</div>
              <div className="text-[10px] text-neutral-400 font-semibold">Served</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-white">&lt; 5 Mins</div>
              <div className="text-[10px] text-neutral-400 font-semibold">Reply Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto mb-6">
            <a
              href="https://wa.me/917676726209?text=Hi%20Coffee%20Cabs!%20I%20want%20to%20book%20a%20luxury%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="gsap-hero-cta w-full py-3 px-6 bg-[#25D366] text-white text-xs font-extrabold rounded-full hover:bg-[#1da851] hover:scale-105 transition-all duration-300 text-center shadow-xl flex items-center justify-center gap-2"
            >
              <MessageSquare size={15} /> Book via WhatsApp
            </a>
            <a
              href="tel:+917676726209"
              className="gsap-hero-cta w-full py-3 px-6 bg-white text-[#09090b] text-xs font-extrabold rounded-full hover:bg-neutral-200 hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <Phone size={15} /> Call +91 76767 26209
            </a>
          </div>
        </div>

        {/* Curved White Arc Overlay */}
        <div className="relative z-10 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-10 sm:h-16 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* ── 2. INTRO / ABOUT BLURB & 3 FEATURE ICONS ── */}
      <section className="gsap-section-reveal py-16 sm:py-20 bg-[#fafafa] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3">
            About Coffee Cabs
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#09090b] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bangalore's Premier Luxury Chauffeur & Traveller Service
          </h2>
          <p className="text-sm text-[#71717a] leading-relaxed mb-12">
            Coffee Cabs is Bangalore’s trusted ground transportation provider. We specialize in Toyota Innova Crysta rentals, Force Urbania Luxury, Tempo Travellers, and Luxury Buses for outstation trips, family holidays, pilgrimages, and corporate travel.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-black/10 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#09090b] text-white flex items-center justify-center mx-auto mb-4 font-bold">
                <Car size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#09090b] mb-2">100% Owned Fleet</h3>
              <p className="text-xs text-[#71717a]">Fully owned commercial vehicles, sanitized & maintained to peak safety standards.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-black/10 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#09090b] text-white flex items-center justify-center mx-auto mb-4 font-bold">
                <MessageSquare size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#09090b] mb-2">24/7 WhatsApp Support</h3>
              <p className="text-xs text-[#71717a]">Instant quotes, rapid booking confirmation, and active trip assistance.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-black/10 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#09090b] text-white flex items-center justify-center mx-auto mb-4 font-bold">
                <Award size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#09090b] mb-2">Maharaja Recliner Seating</h3>
              <p className="text-xs text-[#71717a]">Ultra-wide plush recliners with individual AC vents & charging ports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FLEET SECTION ── */}
      <section id="fleet" className="gsap-section-reveal py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-block text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3 bg-[#fafafa] border border-black/10 px-4 py-1.5 rounded-full">
                Elite Collection
              </div>
              <h2
                className="text-3xl sm:text-5xl font-bold text-[#09090b]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Featured Fleet Categories
              </h2>
            </div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#09090b] text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-colors shrink-0"
            >
              View All Fleet Models <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VEHICLES.slice(0, 3).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FLEET COMPARISON TABLE ── */}
      <FleetComparison />

      {/* ── 5. POPULAR ROUTES FLEET FARE ESTIMATE MATRIX ── */}
      <PopularRoutesMatrix />

      {/* ── 6. HOW IT WORKS ── */}
      <section className="gsap-section-reveal py-16 sm:py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3">
              Simple & Fast
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#09090b]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How It Works — 4 Easy Steps
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Choose Vehicle", desc: "Select from Innova Crysta, Force Urbania, Tempo Traveller, or Buses." },
              { step: "02", title: "WhatsApp Us", desc: "Share your travel dates, trip type, and destination details via WhatsApp or call." },
              { step: "03", title: "Get Instant Quote", desc: "Receive transparent per-km breakdown with driver allowance & 300km/day rule calculations." },
              { step: "04", title: "Confirm & Ride", desc: "Get driver details & vehicle confirmation. Enjoy a comfortable luxury journey!" },
            ].map((s) => (
              <div key={s.step} className="bg-[#fafafa] p-8 rounded-3xl border border-black/10 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-extrabold text-[#09090b] mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#09090b] mb-2">{s.title}</h3>
                <p className="text-xs text-[#71717a] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CALCULATOR ── */}
      <Calculator />

      {/* ── 8. DESTINATIONS EXPLORER ── */}
      <section className="gsap-section-reveal py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3">
                Weekend Getaways & Outstation Packages
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#09090b]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Explore Destinations Across India
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

      {/* ── 9. FAQ SECTION ── */}
      <section className="gsap-section-reveal py-16 sm:py-24 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3">
              Got Questions?
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#09090b]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#09090b]"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp size={18} className="text-[#09090b] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-[#71717a] shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-xs text-[#71717a] leading-relaxed border-t border-black/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA BANNER ── */}
      <section className="gsap-section-reveal py-16 sm:py-20 bg-[#09090b] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Hit the Road?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
            Book your luxury Innova Crysta, Force Urbania, or Tempo Traveller in under 60 seconds. Connect with us on WhatsApp or call us directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/917676726209?text=Hi%20Coffee%20Cabs!%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-xs font-bold rounded-full hover:bg-[#1da851] hover:scale-105 transition-all shadow-xl w-full sm:w-auto"
            >
              <MessageSquare size={16} /> Book via WhatsApp
            </a>
            <a
              href="tel:+917676726209"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#09090b] text-xs font-bold rounded-full hover:bg-neutral-200 hover:scale-105 transition-all w-full sm:w-auto"
            >
              <Phone size={16} /> Call +91 76767 26209
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
