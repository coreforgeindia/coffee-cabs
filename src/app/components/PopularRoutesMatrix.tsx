import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../utils/gsapSetup";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function PopularRoutesMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);

  const routesData = [
    { dest: "Mysore", slug: "mysore", dist: "150 km", tt9: "₹4,200", tt12: "₹4,500", tt16: "₹5,250", urbania: "₹5,250", innova: "₹2,850" },
    { dest: "Coorg", slug: "coorg", dist: "260 km", tt9: "₹7,280", tt12: "₹7,800", tt16: "₹9,100", urbania: "₹9,100", innova: "₹4,940" },
    { dest: "Ooty", slug: "ooty", dist: "270 km", tt9: "₹7,560", tt12: "₹8,100", tt16: "₹9,450", urbania: "₹9,450", innova: "₹5,130" },
    { dest: "Tirupati", slug: "tirupati", dist: "250 km", tt9: "₹7,000", tt12: "₹7,500", tt16: "₹8,750", urbania: "₹8,750", innova: "₹4,750" },
    { dest: "Wayanad", slug: "wayanad", dist: "290 km", tt9: "₹8,120", tt12: "₹8,700", tt16: "₹10,150", urbania: "₹10,150", innova: "₹5,510" },
    { dest: "Pondicherry", slug: "pondicherry", dist: "320 km", tt9: "₹8,960", tt12: "₹9,600", tt16: "₹11,200", urbania: "₹11,200", innova: "₹6,080" },
    { dest: "Chikmagalur", slug: "chikmagalur", dist: "240 km", tt9: "₹6,720", tt12: "₹7,200", tt16: "₹8,400", urbania: "₹8,400", innova: "₹4,560" },
    { dest: "Goa", slug: "goa", dist: "580 km", tt9: "₹16,240", tt12: "₹17,400", tt16: "₹20,300", urbania: "₹20,300", innova: "₹11,020" },
    { dest: "Mangalore", slug: "mangalore", dist: "360 km", tt9: "₹10,080", tt12: "₹10,800", tt16: "₹12,600", urbania: "₹12,600", innova: "₹6,840" },
    { dest: "Chennai", slug: "chennai", dist: "350 km", tt9: "₹9,800", tt12: "₹10,500", tt16: "₹12,250", urbania: "₹12,250", innova: "₹6,650" },
  ];

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(".gsap-route-fade", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  const activeMobileRoute = routesData[activeRouteIndex];

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-[#fafafa] border-y border-black/5 text-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 gsap-route-fade">
          <div className="inline-block text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-3 bg-white border border-black/10 px-4 py-1.5 rounded-full shadow-sm">
            Outstation Fare Guide
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Popular Routes – <span className="text-[#f59e0b]">Fleet Fare Estimate</span>
          </h2>
          <p className="text-[#71717a] text-xs sm:text-sm">
            Estimated one-way fares from Bangalore. Round trips get 15% discount on total fare.
          </p>
        </div>

        {/* ── MOBILE / IPHONE FRIENDLY ROUTE CARD SELECTOR (Visible on Mobile) ── */}
        <div className="block lg:hidden mb-8 gsap-route-fade">
          <label className="block text-[11px] font-extrabold text-[#71717a] uppercase tracking-wider mb-2">
            Select Destination (iPhone Friendly)
          </label>

          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-4">
            {routesData.map((r, idx) => (
              <button
                key={r.dest}
                onClick={() => setActiveRouteIndex(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeRouteIndex === idx
                    ? "bg-[#09090b] text-white shadow-md"
                    : "bg-white text-[#71717a] border border-black/10 hover:bg-neutral-200"
                }`}
              >
                {r.dest} ({r.dist})
              </button>
            ))}
          </div>

          {/* Active Route Fare Card */}
          <div className="bg-white rounded-3xl p-6 border border-black/10 shadow-lg">
            <div className="flex justify-between items-center pb-4 border-b border-black/10 mb-4">
              <div>
                <div className="text-[10px] uppercase font-bold text-[#71717a] flex items-center gap-1">
                  <MapPin size={12} /> From Bangalore
                </div>
                <h3 className="text-xl font-extrabold text-[#09090b]">{activeMobileRoute.dest}</h3>
              </div>
              <div className="bg-[#fafafa] px-3.5 py-1.5 rounded-xl border border-black/10 text-xs font-extrabold text-[#09090b]">
                {activeMobileRoute.dist}
              </div>
            </div>

            <div className="space-y-2.5 text-xs mb-6">
              <div className="bg-[#fafafa] p-3 rounded-2xl border border-black/5 flex justify-between items-center">
                <span className="font-bold text-[#09090b]">Innova Crysta (7 Seater)</span>
                <span className="font-extrabold text-lg text-[#09090b]">{activeMobileRoute.innova}</span>
              </div>
              <div className="bg-[#fafafa] p-3 rounded-2xl border border-black/5 flex justify-between items-center">
                <span className="font-bold text-[#09090b]">9 Seater Tempo Traveller</span>
                <span className="font-extrabold text-lg text-[#09090b]">{activeMobileRoute.tt9}</span>
              </div>
              <div className="bg-[#fafafa] p-3 rounded-2xl border border-black/5 flex justify-between items-center">
                <span className="font-bold text-[#09090b]">12/14 Seater Tempo Traveller</span>
                <span className="font-extrabold text-lg text-[#09090b]">{activeMobileRoute.tt12}</span>
              </div>
              <div className="bg-[#fafafa] p-3 rounded-2xl border border-black/5 flex justify-between items-center">
                <span className="font-bold text-[#09090b]">16 Seater Tempo Traveller</span>
                <span className="font-extrabold text-lg text-[#09090b]">{activeMobileRoute.tt16}</span>
              </div>
              <div className="bg-[#fafafa] p-3 rounded-2xl border border-black/5 flex justify-between items-center">
                <span className="font-bold text-[#09090b]">Force Urbania Luxury</span>
                <span className="font-extrabold text-lg text-[#09090b]">{activeMobileRoute.urbania}</span>
              </div>
            </div>

            <Link
              to={`/packages/${activeMobileRoute.slug}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#09090b] text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
            >
              View Full {activeMobileRoute.dest} Package Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── DESKTOP FULL TABLE VIEW ── */}
        <div className="hidden lg:block gsap-route-fade">
          <div className="overflow-x-auto rounded-3xl border border-black/10 shadow-xl bg-white">
            <table className="w-full text-left text-xs min-w-[800px]">
              <thead>
                <tr className="bg-[#1e293b] text-white">
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px]">Destination</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] bg-[#f59e0b] text-black">Distance</th>
                  <th className="p-4 font-bold text-center">9 Seater (₹28/km)</th>
                  <th className="p-4 font-bold text-center">12/14 Seater (₹30/km)</th>
                  <th className="p-4 font-bold text-center">16 Seater (₹35/km)</th>
                  <th className="p-4 font-bold text-center">Urbania (₹35/km)</th>
                  <th className="p-4 font-bold text-center">Innova (₹19/km)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-[#09090b]">
                {routesData.map((r) => (
                  <tr key={r.dest} className="hover:bg-[#fafafa]">
                    <td className="p-4 font-bold">{r.dest}</td>
                    <td className="p-4 font-extrabold bg-[#fafafa]">{r.dist}</td>
                    <td className="p-4 text-center font-bold">{r.tt9}</td>
                    <td className="p-4 text-center font-bold">{r.tt12}</td>
                    <td className="p-4 text-center font-bold">{r.tt16}</td>
                    <td className="p-4 text-center font-bold">{r.urbania}</td>
                    <td className="p-4 text-center font-bold text-[#09090b]">{r.innova}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-xs text-[#71717a] mt-4 font-medium italic">
          * Fares are estimates. Actual fare depends on route, duration, and vehicle availability. Round trip: 15% discount.
        </p>
      </div>
    </section>
  );
}
