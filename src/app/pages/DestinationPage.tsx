import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, MapPin, Clock, Calendar, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { DESTINATIONS } from "../data/destinations";
import { VEHICLES, PRICING_TERMS } from "../data/vehicles";

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const dest = DESTINATIONS.find((d) => d.slug === slug);

  const [selectedVehicleId, setSelectedVehicleId] = useState(VEHICLES[0].id);
  const [tripType, setTripType] = useState<"round-trip" | "one-way">("round-trip");
  const [durationDays, setDurationDays] = useState(1);

  if (!dest) {
    return (
      <div className="pt-24 min-h-screen bg-white text-[#09090b] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#09090b] mb-4">Destination Package Not Found</h1>
          <Link to="/packages" className="text-[#09090b] underline text-sm font-bold">
            ← Explore All Packages
          </Link>
        </div>
      </div>
    );
  }

  const selectedVehicle = VEHICLES.find((v) => v.id === selectedVehicleId) || VEHICLES[0];

  // Calculate fare for this destination
  const tripKm = tripType === "round-trip" ? dest.distance * 2 : dest.distance;
  const minRequiredKm = 300 * durationDays;
  const billedKm = Math.max(tripKm, minRequiredKm);
  const totalKmCost = billedKm * selectedVehicle.pricePerKm;
  const driverCost = durationDays * selectedVehicle.driverAllowance;
  const totalEstimate = totalKmCost + driverCost;

  const whatsappLink = `https://wa.me/917676726209?text=${encodeURIComponent(
    `Hi Coffee Cabs! I want to book a ${selectedVehicle.name} for ${dest.name} (${dest.distance} km from Bangalore).\n\nTrip Type: ${tripType === "round-trip" ? "Round Trip" : "One Way"}\nDuration: ${durationDays} day(s)\nEstimated Fare: ₹${totalEstimate.toLocaleString("en-IN")}\n\nPlease confirm availability.`
  )}`;

  return (
    <article className="pt-16 bg-white text-[#09090b] min-h-screen">
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={dest.image}
            alt={`${dest.name} Tour Package`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full pb-8 text-white">
          <Link
            to="/packages"
            className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors mb-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20"
          >
            <ArrowLeft size={12} /> Back to Outstation Packages
          </Link>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white text-black text-[10px] uppercase font-extrabold px-3 py-1 rounded-full">
              {dest.category}
            </span>
            <span className="text-white/80 text-xs font-semibold">
              {dest.state} · {dest.distance} km from Bangalore
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bangalore to {dest.name} Cab Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-10">
            {/* Left Main Details */}
            <div className="space-y-10">
              {/* Quick Trip Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#fafafa] p-4 rounded-2xl border border-black/10 text-center">
                  <MapPin size={18} className="mx-auto text-[#09090b] mb-1" />
                  <div className="text-lg font-bold text-[#09090b]">{dest.distance} km</div>
                  <div className="text-[10px] text-[#71717a] uppercase font-semibold">Distance</div>
                </div>
                <div className="bg-[#fafafa] p-4 rounded-2xl border border-black/10 text-center">
                  <Clock size={18} className="mx-auto text-[#09090b] mb-1" />
                  <div className="text-lg font-bold text-[#09090b]">{dest.time}</div>
                  <div className="text-[10px] text-[#71717a] uppercase font-semibold">Est. Time</div>
                </div>
                <div className="bg-[#fafafa] p-4 rounded-2xl border border-black/10 text-center">
                  <Calendar size={18} className="mx-auto text-[#09090b] mb-1" />
                  <div className="text-xs font-bold text-[#09090b] leading-tight">{dest.bestTime}</div>
                  <div className="text-[10px] text-[#71717a] uppercase font-semibold">Best Season</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2
                  className="text-2xl font-bold text-[#09090b] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Overview & Travel Guide
                </h2>
                <p className="text-sm text-[#71717a] leading-relaxed">{dest.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-bold text-[#09090b] mb-4">Top Attractions Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {dest.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="bg-[#fafafa] p-4 rounded-2xl border border-black/10 flex items-center gap-3 text-xs font-semibold text-[#09090b]"
                    >
                      <CheckCircle2 size={16} className="text-[#09090b] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle Rates Matrix */}
              <div>
                <h3
                  className="text-xl font-bold text-[#09090b] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Vehicle Rate Comparison for {dest.name}
                </h3>

                <div className="space-y-3">
                  {VEHICLES.map((vehicle) => {
                    const km = dest.distance * 2;
                    const bKm = Math.max(km, 300);
                    const fare = bKm * vehicle.pricePerKm + vehicle.driverAllowance;
                    return (
                      <div
                        key={vehicle.id}
                        onClick={() => setSelectedVehicleId(vehicle.id)}
                        className={`bg-[#fafafa] p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          selectedVehicleId === vehicle.id
                            ? "border-[#09090b] bg-white shadow-md"
                            : "border-black/10 hover:border-black/30"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-[#09090b] text-base">{vehicle.name}</h4>
                            {selectedVehicleId === vehicle.id && (
                              <span className="bg-[#09090b] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                                Selected
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#71717a] mt-1">
                            {vehicle.seats} seats · ₹{vehicle.pricePerKm}/km · ₹{vehicle.driverAllowance}/day driver
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-extrabold text-[#09090b]">
                            ₹{fare.toLocaleString("en-IN")}
                          </div>
                          <div className="text-[10px] text-[#71717a]">est. 1-day round trip</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#fafafa] p-5 rounded-2xl border border-black/10">
                  <h4 className="font-bold text-xs uppercase text-[#09090b] mb-3">✓ Inclusions</h4>
                  <ul className="space-y-1.5 text-xs text-[#71717a]">
                    {PRICING_TERMS.included.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#09090b] font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#fafafa] p-5 rounded-2xl border border-black/10">
                  <h4 className="font-bold text-xs uppercase text-[#09090b] mb-3">⚠ Exclusions</h4>
                  <ul className="space-y-1.5 text-xs text-[#71717a]">
                    {PRICING_TERMS.extras.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#09090b] font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Calculation Widget */}
            <div>
              <div className="bg-[#fafafa] border border-black/10 rounded-3xl p-6 sm:p-8 sticky top-24 shadow-xl">
                <div className="text-xs uppercase tracking-widest text-[#71717a] font-bold mb-2">
                  Trip Fare Calculator
                </div>
                <h3
                  className="text-2xl font-bold text-[#09090b] mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Book Cab to {dest.name}
                </h3>

                {/* Choose Vehicle */}
                <div className="mb-5">
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#71717a] mb-2">
                    Choose Vehicle
                  </label>
                  <select
                    value={selectedVehicleId}
                    onChange={(e) => setSelectedVehicleId(e.target.value)}
                    className="w-full bg-white border border-black/10 px-4 py-3 text-sm text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors cursor-pointer shadow-sm"
                  >
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} (₹{v.pricePerKm}/km)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Trip Option */}
                <div className="mb-5">
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#71717a] mb-2">
                    Trip Option
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTripType("round-trip")}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                        tripType === "round-trip"
                          ? "bg-[#09090b] text-white"
                          : "bg-white text-[#71717a] border border-black/10"
                      }`}
                    >
                      Round Trip ({dest.distance * 2} km)
                    </button>
                    <button
                      type="button"
                      onClick={() => setTripType("one-way")}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                        tripType === "one-way"
                          ? "bg-[#09090b] text-white"
                          : "bg-white text-[#71717a] border border-black/10"
                      }`}
                    >
                      One Way ({dest.distance} km)
                    </button>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-[#71717a]">
                      Duration (Days)
                    </label>
                    <span className="text-xs font-bold text-[#09090b]">{durationDays} day(s)</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full h-2 bg-[#e4e4e7] rounded-full appearance-none cursor-pointer accent-[#09090b]"
                  />
                </div>

                {/* Estimated Fare Display */}
                <div className="bg-[#09090b] text-white p-6 rounded-2xl text-center mb-6 shadow-xl">
                  <div className="text-[11px] uppercase tracking-widest text-[#a1a1aa] font-semibold mb-1">
                    Calculated Fare Estimate
                  </div>
                  <div
                    className="text-4xl font-extrabold text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    ₹{totalEstimate.toLocaleString("en-IN")}
                  </div>
                  <p className="text-[11px] text-[#a1a1aa]">
                    Includes fuel, vehicle rental, and driver allowance.
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white text-sm font-bold rounded-full hover:bg-[#1da851] transition-colors shadow-lg group"
                >
                  Book via WhatsApp <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#71717a]">
                  <ShieldCheck size={14} className="text-[#09090b]" /> Direct Driver & Fleet Confirmation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
