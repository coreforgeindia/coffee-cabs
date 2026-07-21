import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";
import { VEHICLES, PRICING_TERMS } from "../data/vehicles";
import Calculator from "../components/Calculator";

export default function PricingPage() {
  return (
    <div className="pt-20 bg-white text-[#09090b] min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#fafafa] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
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

      {/* Pricing Matrix Table */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl overflow-hidden border border-black/10 bg-white shadow-xl">
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
                    <ChevronRight size={12} className="text-[#09090b] shrink-0" /> {item}
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
