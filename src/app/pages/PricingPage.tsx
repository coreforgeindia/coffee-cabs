import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/gsapSetup";
import { ArrowRight, ChevronRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { VEHICLES, PRICING_TERMS } from "../data/vehicles";
import Calculator from "../components/Calculator";

export default function PricingPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedMobileVehicle, setSelectedMobileVehicle] = useState(0);

  useGSAP(
    () => {
      if (!pageRef.current) return;
      gsap.from(".gsap-pricing-fade", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: pageRef }
  );

  const activeVehicle = VEHICLES[selectedMobileVehicle];

  return (
    <div ref={pageRef} className="pt-20 bg-white text-[#09090b] min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#fafafa] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center gsap-pricing-fade">
          <div className="text-xs tracking-widest uppercase text-[#52525b] mb-3 font-extrabold bg-white border border-black/10 px-4 py-1.5 rounded-full inline-block shadow-sm">
            Transparent Tariff
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Official Per-Km Pricing & Allowance
          </h1>
          <p className="text-[#71717a] text-sm sm:text-base max-w-lg mx-auto">
            Zero hidden charges. Complete clarity on per-km rates, driver allowance, minimum billing distance, and outstation rules.
          </p>
        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 gsap-pricing-fade">
          {/* ── MOBILE / IPHONE FRIENDLY CARD VIEW (Visible on Mobile) ── */}
          <div className="block sm:hidden mb-8">
            <label className="block text-[11px] font-extrabold text-[#71717a] uppercase tracking-wider mb-2">
              Select Vehicle (iPhone Friendly View)
            </label>

            <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-4">
              {VEHICLES.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedMobileVehicle(idx)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedMobileVehicle === idx
                      ? "bg-[#09090b] text-white shadow-md"
                      : "bg-[#fafafa] text-[#71717a] border border-black/10 hover:bg-neutral-200"
                  }`}
                >
                  {v.shortName}
                </button>
              ))}
            </div>

            {/* Mobile Active Vehicle Rate Card */}
            <div className="bg-[#fafafa] rounded-3xl p-6 border border-black/10 shadow-lg">
              <div className="flex justify-between items-start pb-4 border-b border-black/10 mb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#71717a]">{activeVehicle.category}</span>
                  <h3 className="text-xl font-extrabold text-[#09090b]">{activeVehicle.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-[#09090b]">₹{activeVehicle.pricePerKm}</div>
                  <div className="text-[10px] text-[#71717a]">per km</div>
                </div>
              </div>

              <div className="space-y-3 text-xs mb-6">
                <div className="bg-white p-3 rounded-2xl border border-black/5 flex justify-between items-center">
                  <span className="text-[#71717a] font-semibold">Seating Capacity</span>
                  <span className="font-extrabold text-[#09090b]">{activeVehicle.seats} Seats</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-black/5 flex justify-between items-center">
                  <span className="text-[#71717a] font-semibold">Driver Allowance</span>
                  <span className="font-extrabold text-[#09090b]">₹{activeVehicle.driverAllowance}/day</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-black/5 flex justify-between items-center">
                  <span className="text-[#71717a] font-semibold">Minimum Outstation</span>
                  <span className="font-extrabold text-[#09090b]">300 km / day</span>
                </div>
              </div>

              <a
                href={`https://wa.me/917676726209?text=${encodeURIComponent(
                  `Hi Coffee Cabs! I want to book the ${activeVehicle.name}. Please confirm availability.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#09090b] text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-colors shadow-md"
              >
                Book {activeVehicle.shortName} via WhatsApp <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* ── DESKTOP & TABLET TABLE VIEW ── */}
          <div className="hidden sm:block rounded-3xl overflow-hidden border border-black/10 bg-white shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-[#09090b] text-white">
                  <th className="text-left px-6 py-4 text-xs font-extrabold uppercase tracking-wider">Vehicle Model</th>
                  <th className="text-center px-4 py-4 text-xs font-extrabold uppercase tracking-wider">Seating</th>
                  <th className="text-center px-4 py-4 text-xs font-extrabold uppercase tracking-wider">Rate / Km</th>
                  <th className="text-center px-4 py-4 text-xs font-extrabold uppercase tracking-wider">Driver Allowance</th>
                  <th className="text-center px-4 py-4 text-xs font-extrabold uppercase tracking-wider">Book</th>
                </tr>
              </thead>
              <tbody>
                {VEHICLES.map((v, i) => (
                  <tr
                    key={v.id}
                    className={`border-b border-black/5 hover:bg-[#fafafa] transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                    }`}
                  >
                    <td className="px-6 py-5">
                      <div className="font-bold text-sm text-[#09090b]">{v.name}</div>
                      <div className="text-[11px] text-[#71717a]">{v.company}</div>
                    </td>
                    <td className="text-center px-4 py-5 text-xs text-[#71717a] font-semibold">{v.seats}</td>
                    <td className="text-center px-4 py-5">
                      <span className="font-extrabold text-[#09090b] text-sm">₹{v.pricePerKm}</span>
                      <span className="text-[#71717a] text-xs">/km</span>
                    </td>
                    <td className="text-center px-4 py-5">
                      <span className="font-extrabold text-[#09090b] text-sm">₹{v.driverAllowance}</span>
                      <span className="text-[#71717a] text-xs">/day</span>
                    </td>
                    <td className="text-center px-4 py-5">
                      <a
                        href={`https://wa.me/917676726209?text=${encodeURIComponent(
                          `Hi Coffee Cabs! I want to book the ${v.name}. Please confirm availability.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#09090b] text-white hover:bg-neutral-800 transition-colors"
                      >
                        <ArrowRight size={14} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Live Calculator */}
      <Calculator />

      {/* Terms & Policies Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#09090b] mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Outstation Terms & Operating Guidelines
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#fafafa] rounded-3xl p-6 border border-black/10">
              <h3 className="font-bold text-[#09090b] mb-3 text-sm flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#09090b]" /> Included in Per-Km Rate
              </h3>
              <ul className="space-y-2">
                {PRICING_TERMS.included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#71717a]">
                    <CheckCircle2 size={13} className="text-[#09090b] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fafafa] rounded-3xl p-6 border border-black/10">
              <h3 className="font-bold text-[#09090b] mb-3 text-sm flex items-center gap-2">
                <ChevronRight size={16} className="text-[#09090b]" /> Additional Charges (As per Actuals)
              </h3>
              <ul className="space-y-2">
                {PRICING_TERMS.extras.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#71717a]">
                    <ChevronRight size={12} className="text-[#09090b] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fafafa] rounded-3xl p-6 border border-black/10">
              <h3 className="font-bold text-[#09090b] mb-3 text-sm">📋 Billing Rules</h3>
              <ul className="space-y-2 text-xs text-[#71717a]">
                <li><strong>Minimum Outstation:</strong> {PRICING_TERMS.minimumBilling}</li>
                <li><strong>Local Package:</strong> {PRICING_TERMS.localPackage}</li>
                <li><strong>One-Way Trips:</strong> {PRICING_TERMS.oneWay}</li>
              </ul>
            </div>

            <div className="bg-[#fafafa] rounded-3xl p-6 border border-black/10">
              <h3 className="font-bold text-[#09090b] mb-3 text-sm">✕ Cancellation Terms</h3>
              <ul className="space-y-2">
                {PRICING_TERMS.cancellation.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#71717a]">
                    <ChevronRight size={12} className="text-[#09090b] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
