import { useState, useEffect } from "react";
import { ArrowRight, Calculator as CalcIcon, ShieldCheck } from "lucide-react";
import { VEHICLES } from "../data/vehicles";

const TRIP_TYPES = [
  { label: "Outstation (One Way)", id: "one-way" },
  { label: "Outstation (Round Trip)", id: "round-trip" },
  { label: "Local Bangalore Package", id: "local" },
];

export default function Calculator({ initialDistance }: { initialDistance?: number }) {
  const [vehicleId, setVehicleId] = useState(VEHICLES[0].id);
  const [tripType, setTripType] = useState("one-way");
  const [distance, setDistance] = useState(initialDistance || 150);

  // Strictly enforce 300 km/day outstation rule: 1000 km => 4 days minimum
  const minRequiredDays = tripType === "local" ? 1 : Math.max(1, Math.ceil(distance / 300));
  const [userDays, setUserDays] = useState<number | null>(null);

  useEffect(() => {
    if (userDays !== null && userDays < minRequiredDays) {
      setUserDays(minRequiredDays);
    }
  }, [distance, tripType, minRequiredDays, userDays]);

  const activeDays = userDays && userDays >= minRequiredDays ? userDays : minRequiredDays;

  const vehicle = VEHICLES.find((v) => v.id === vehicleId) || VEHICLES[0];

  // Calculate fare accurately
  const effectiveDistance = tripType === "round-trip" ? distance * 2 : distance;
  const minKmPerDay = tripType === "local" ? 80 : 300;
  const minimumTotalKm = minKmPerDay * activeDays;
  const billedKm = Math.max(effectiveDistance, minimumTotalKm);
  const kmCost = billedKm * vehicle.pricePerKm;
  const driverCost = activeDays * vehicle.driverAllowance;
  const totalFare = kmCost + driverCost;

  const whatsappMsg = encodeURIComponent(
    `Hi Coffee Cabs! I'd like to book a ${vehicle.name} for a ${
      tripType === "one-way" ? "One-Way Outstation" : tripType === "round-trip" ? "Round Trip Outstation" : "Local Bangalore"
    } trip.\n\nDistance: ${distance} km\nDuration: ${activeDays} day(s)\nBilled Distance: ${billedKm} km\nEstimated Fare: ₹${totalFare.toLocaleString(
      "en-IN"
    )}\n\nPlease confirm booking.`
  );

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#fafafa] text-[#09090b] relative overflow-hidden border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#52525b] mb-3 font-extrabold bg-white border border-black/10 px-4 py-1.5 rounded-full shadow-sm">
            <CalcIcon size={14} className="text-[#09090b]" /> Outstation Trip Cost Estimator
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Calculate Your Exact Fare
          </h2>
          <p className="text-[#71717a] text-sm sm:text-base max-w-lg mx-auto">
            300 km/day outstation rule automatically calculates required minimum trip days (e.g. 1,000 km = 4 days).
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-xl">
          {/* Dropdowns */}
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div>
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#71717a] mb-2">
                Vehicle Type
              </label>
              <select
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                className="w-full bg-[#fafafa] border border-black/10 px-4 py-3.5 text-sm font-bold text-[#09090b] rounded-2xl focus:outline-none focus:border-[#09090b] transition-colors cursor-pointer shadow-sm"
              >
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} (₹{v.pricePerKm}/km)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#71717a] mb-2">
                Trip Category
              </label>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full bg-[#fafafa] border border-black/10 px-4 py-3.5 text-sm font-bold text-[#09090b] rounded-2xl focus:outline-none focus:border-[#09090b] transition-colors cursor-pointer shadow-sm"
              >
                {TRIP_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Distance Slider */}
          <div className="mb-8 bg-[#fafafa] p-5 rounded-2xl border border-black/5">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-bold text-[#09090b]">Distance (One Way)</label>
              <span className="text-lg font-extrabold text-[#09090b] bg-white px-4 py-1 rounded-xl border border-black/10 shadow-sm">
                {distance} km
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={1500}
              step={10}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full h-2 bg-[#e4e4e7] rounded-full appearance-none cursor-pointer accent-[#09090b]"
            />
            <div className="flex justify-between text-xs text-[#71717a] mt-2 font-semibold">
              <span>10 km</span>
              <span>500 km</span>
              <span>1000 km (4 days)</span>
              <span>1500 km</span>
            </div>
          </div>

          {/* Duration Slider */}
          <div className="mb-8 bg-[#fafafa] p-5 rounded-2xl border border-black/5">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-bold text-[#09090b]">Trip Duration (Days)</label>
              <span className="text-lg font-extrabold text-[#09090b] bg-white px-4 py-1 rounded-xl border border-black/10 shadow-sm">
                {activeDays} day{activeDays > 1 ? "s" : ""}
              </span>
            </div>
            <input
              type="range"
              min={minRequiredDays}
              max={Math.max(20, minRequiredDays + 5)}
              step={1}
              value={activeDays}
              onChange={(e) => setUserDays(Number(e.target.value))}
              className="w-full h-2 bg-[#e4e4e7] rounded-full appearance-none cursor-pointer accent-[#09090b]"
            />
            <div className="flex justify-between text-xs text-[#71717a] mt-2 font-semibold">
              <span>Required: {minRequiredDays} day(s) minimum</span>
              <span>Max 20 days</span>
            </div>
          </div>

          {/* Estimation Box */}
          <div className="bg-[#09090b] text-white rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
            <div className="text-xs uppercase tracking-widest text-[#a1a1aa] mb-2 font-semibold">
              Estimated Total Fare
            </div>
            <div
              className="text-4xl sm:text-6xl font-extrabold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ₹{totalFare.toLocaleString("en-IN")}
            </div>
            <div className="text-xs text-[#a1a1aa] mb-6 space-y-1">
              <div>
                Breakdown: ₹{vehicle.pricePerKm}/km × {billedKm} billed km + ₹{driverCost.toLocaleString("en-IN")} driver allowance ({activeDays} day{activeDays > 1 ? "s" : ""})
              </div>
              {billedKm > effectiveDistance && (
                <div className="text-[#a1a1aa] italic">
                  *Min. outstation rule applied ({minimumTotalKm} km for {activeDays} day{activeDays > 1 ? "s" : ""})
                </div>
              )}
            </div>

            <a
              href={`https://wa.me/917676726209?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-[#09090b] text-sm font-bold rounded-full hover:bg-neutral-200 transition-all duration-200 shadow-lg group"
            >
              Book at ₹{totalFare.toLocaleString("en-IN")} via WhatsApp
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#71717a]">
              <ShieldCheck size={14} className="text-white" /> Tolls, Parking & State Entry Permits charged extra as per actual receipts.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
