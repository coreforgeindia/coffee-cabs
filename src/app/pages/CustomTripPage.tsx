import { useState } from "react";
import { Plus, Trash2, MapPin, Compass, ArrowRight, ShieldCheck, ExternalLink, Calendar, Search } from "lucide-react";
import { DESTINATIONS } from "../data/destinations";
import { VEHICLES } from "../data/vehicles";

interface CustomStop {
  id: string;
  name: string;
  state?: string;
  distanceFromBase: number;
}

export default function CustomTripPage() {
  const [startCity, setStartCity] = useState("Bangalore");
  const [customStops, setCustomStops] = useState<CustomStop[]>([
    { id: "1", name: "Mysore", state: "Karnataka", distanceFromBase: 150 },
    { id: "2", name: "Coorg (Madikeri)", state: "Karnataka", distanceFromBase: 270 },
  ]);

  const [inputQuery, setInputQuery] = useState("");
  const [customDistanceInput, setCustomDistanceInput] = useState<number | "">(150);
  const [selectedVehicleId, setSelectedVehicleId] = useState(VEHICLES[0].id);

  const vehicle = VEHICLES.find((v) => v.id === selectedVehicleId) || VEHICLES[0];

  // Suggestions from 200 list
  const suggestions = inputQuery.trim()
    ? DESTINATIONS.filter(
        (d) =>
          d.name.toLowerCase().includes(inputQuery.toLowerCase()) ||
          d.state.toLowerCase().includes(inputQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Add a stop (either from suggestion or completely custom entry from anywhere in India!)
  const handleAddStop = (name: string, state?: string, dist?: number) => {
    if (!name.trim()) return;
    const estimatedDist = dist || Number(customDistanceInput) || 200;
    const newStop: CustomStop = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
      name: name.trim(),
      state: state || "India",
      distanceFromBase: estimatedDist,
    };

    setCustomStops([...customStops, newStop]);
    setInputQuery("");
  };

  // Remove stop
  const removeStop = (id: string) => {
    if (customStops.length > 1) {
      setCustomStops(customStops.filter((s) => s.id !== id));
    }
  };

  // Calculate total route loop distance
  const maxSingleDist = Math.max(...customStops.map((s) => s.distanceFromBase), 100);
  const totalRouteKm = Math.round(maxSingleDist * 2 + customStops.length * 40);

  // 300 km/day outstation rule: 1000km => 4 days minimum
  const minRequiredDays = Math.max(1, Math.ceil(totalRouteKm / 300));
  const [userDays, setUserDays] = useState<number | null>(null);
  const activeDays = userDays && userDays >= minRequiredDays ? userDays : minRequiredDays;

  // Billed fare calculation
  const minimumBilledKm = activeDays * 300;
  const billedKm = Math.max(totalRouteKm, minimumBilledKm);
  const kmCost = billedKm * vehicle.pricePerKm;
  const driverCost = activeDays * vehicle.driverAllowance;
  const totalEstimatedFare = kmCost + driverCost;

  // Google Maps Directions Link across all entered destinations in India
  const waypointsPath = customStops.map((s) => encodeURIComponent(s.name)).join("/");
  const googleMapsRouteUrl = `https://www.google.com/maps/dir/${encodeURIComponent(startCity)}/${waypointsPath}/${encodeURIComponent(startCity)}`;

  // WhatsApp Message
  const itinerarySummary = customStops.map((s, i) => `${i + 1}. ${s.name}`).join("\n");
  const whatsappMsg = encodeURIComponent(
    `Hi Coffee Cabs! I planned a Custom All-India Road Trip:\n\nStart: ${startCity}\nWaypoints:\n${itinerarySummary}\nReturn: ${startCity}\n\nEst. Total Distance: ~${totalRouteKm} km\nTrip Duration: ${activeDays} day(s)\nSelected Vehicle: ${vehicle.name}\nCalculated Fare: ₹${totalEstimatedFare.toLocaleString("en-IN")}\n\nPlease confirm quote & driver availability!`
  );

  return (
    <div className="pt-20 bg-white text-[#09090b] min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#fafafa] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#52525b] mb-3 font-extrabold bg-white border border-black/10 px-4 py-1.5 rounded-full shadow-sm">
            <Compass size={14} className="text-[#09090b]" /> Custom All-India Trip Planner
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Build Your Unique Itinerary Across India
          </h1>
          <p className="text-[#71717a] text-sm sm:text-base max-w-xl mx-auto">
            Type any city, town, hill station, or landmark in India. View dynamic route directions on Google Maps and get instant fare quotes.
          </p>
        </div>
      </section>

      {/* Main Builder Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-10">
            {/* Left Column: Multi-Stop Builder */}
            <div className="space-y-8">
              {/* Start Location Input */}
              <div className="bg-[#fafafa] p-6 rounded-3xl border border-black/10">
                <label className="block text-xs uppercase tracking-wider font-extrabold text-[#71717a] mb-2">
                  Trip Starting Point (Anywhere in India)
                </label>
                <div className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-2xl border border-black/10 shadow-sm">
                  <MapPin size={18} className="text-[#09090b] shrink-0" />
                  <input
                    type="text"
                    value={startCity}
                    onChange={(e) => setStartCity(e.target.value)}
                    className="w-full bg-transparent text-sm font-bold text-[#09090b] focus:outline-none"
                    placeholder="Enter starting city (e.g. Bangalore, Mysore, Chennai)..."
                  />
                </div>
              </div>

              {/* Waypoints List */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2
                    className="text-2xl font-bold text-[#09090b]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Route Destinations ({customStops.length} stops)
                  </h2>
                  <a
                    href={googleMapsRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#09090b] bg-[#fafafa] px-3.5 py-2 rounded-full border border-black/10 hover:bg-[#09090b] hover:text-white transition-colors"
                  >
                    Open Complete Route in Google Maps <ExternalLink size={13} />
                  </a>
                </div>

                <div className="space-y-3 mb-6">
                  {customStops.map((stop, index) => {
                    const placeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.name)}`;
                    return (
                      <div
                        key={stop.id}
                        className="bg-white p-5 rounded-2xl border border-black/10 flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-9 h-9 rounded-full bg-[#09090b] text-white flex items-center justify-center font-extrabold text-xs shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-base text-[#09090b]">{stop.name}</h3>
                              <a
                                href={placeMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-[#71717a] hover:text-[#09090b] underline flex items-center gap-0.5"
                              >
                                View on Google Maps <ExternalLink size={10} />
                              </a>
                            </div>
                            <p className="text-xs text-[#71717a]">
                              {stop.state || "India"} · Est. {stop.distanceFromBase} km distance
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => removeStop(stop.id)}
                          disabled={customStops.length <= 1}
                          className="w-8 h-8 rounded-full bg-[#fafafa] text-[#71717a] hover:text-[#ef4444] hover:bg-[#fee2e2] transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          aria-label="Remove destination"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Add ANY Destination in India Input */}
                <div className="bg-[#fafafa] p-6 rounded-3xl border border-black/10 relative">
                  <label className="block text-xs uppercase tracking-wider font-extrabold text-[#71717a] mb-2">
                    Add ANY Destination / Landmark Across India
                  </label>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717a]" />
                      <input
                        type="text"
                        placeholder="Type any city, town, hill station or place in India..."
                        value={inputQuery}
                        onChange={(e) => setInputQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && inputQuery.trim()) {
                            handleAddStop(inputQuery);
                          }
                        }}
                        className="w-full bg-white border border-black/10 pl-11 pr-4 py-3.5 text-sm text-[#09090b] placeholder:text-[#a1a1aa] rounded-2xl focus:outline-none focus:border-[#09090b] transition-colors shadow-sm"
                      />
                    </div>

                    <div className="w-full sm:w-36">
                      <input
                        type="number"
                        placeholder="Km (e.g. 250)"
                        value={customDistanceInput}
                        onChange={(e) => setCustomDistanceInput(e.target.value === "" ? "" : Number(e.target.value))}
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-sm text-[#09090b] placeholder:text-[#a1a1aa] rounded-2xl focus:outline-none focus:border-[#09090b] transition-colors shadow-sm font-bold"
                      />
                    </div>

                    <button
                      onClick={() => handleAddStop(inputQuery)}
                      disabled={!inputQuery.trim()}
                      className="px-6 py-3.5 bg-[#09090b] text-white text-xs font-bold rounded-2xl hover:bg-neutral-800 transition-colors shadow-sm shrink-0 flex items-center justify-center gap-1 disabled:opacity-40"
                    >
                      <Plus size={14} /> Add Place
                    </button>
                  </div>

                  {/* Suggestions list from database if matching */}
                  {suggestions.length > 0 && (
                    <div className="mt-3 bg-white border border-black/10 rounded-2xl shadow-xl p-2">
                      <div className="text-[10px] uppercase font-bold text-[#71717a] px-3 py-1">Quick Suggestions</div>
                      {suggestions.map((s) => (
                        <button
                          key={s.slug}
                          onClick={() => handleAddStop(s.name, s.state, s.distance)}
                          className="w-full text-left p-3 hover:bg-[#fafafa] rounded-xl flex items-center justify-between transition-colors border-b border-black/5 last:border-0"
                        >
                          <div>
                            <span className="font-bold text-sm text-[#09090b]">{s.name}</span>
                            <span className="text-xs text-[#71717a] ml-2">({s.state})</span>
                          </div>
                          <span className="text-xs font-semibold text-[#71717a]">{s.distance} km</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Live Fare Estimation & Route Links */}
            <div>
              <div className="bg-[#fafafa] border border-black/10 rounded-3xl p-6 sm:p-8 sticky top-24 shadow-xl">
                <div className="text-xs uppercase tracking-widest text-[#71717a] font-extrabold mb-1">
                  Live Custom Quote
                </div>
                <h3
                  className="text-2xl font-bold text-[#09090b] mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Itinerary Fare Calculation
                </h3>

                {/* Route Summary Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white p-4 rounded-2xl border border-black/5 text-center">
                    <div className="text-xs text-[#71717a] uppercase font-bold mb-1">Est. Route Distance</div>
                    <div className="text-xl font-extrabold text-[#09090b]">~{totalRouteKm} km</div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-black/5 text-center">
                    <div className="text-xs text-[#71717a] uppercase font-bold mb-1">Min. Required Days</div>
                    <div className="text-xl font-extrabold text-[#09090b]">{minRequiredDays} day(s)</div>
                  </div>
                </div>

                {/* Select Vehicle Model */}
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider font-extrabold text-[#71717a] mb-2">
                    Select Vehicle Model
                  </label>
                  <select
                    value={selectedVehicleId}
                    onChange={(e) => setSelectedVehicleId(e.target.value)}
                    className="w-full bg-white border border-black/10 px-4 py-3.5 text-sm text-[#09090b] rounded-2xl focus:outline-none focus:border-[#09090b] transition-colors cursor-pointer font-bold shadow-sm"
                  >
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} (₹{v.pricePerKm}/km)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Days Selector */}
                <div className="mb-6 bg-white p-4 rounded-2xl border border-black/5">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-[#09090b] flex items-center gap-1.5">
                      <Calendar size={14} /> Total Trip Days
                    </label>
                    <span className="text-sm font-extrabold text-[#09090b]">{activeDays} days</span>
                  </div>
                  <input
                    type="range"
                    min={minRequiredDays}
                    max={Math.max(15, minRequiredDays + 5)}
                    value={activeDays}
                    onChange={(e) => setUserDays(Number(e.target.value))}
                    className="w-full h-2 bg-[#e4e4e7] rounded-full appearance-none cursor-pointer accent-[#09090b]"
                  />
                  <div className="text-[10px] text-[#71717a] mt-1.5">
                    *300 km/day outstation rule applies ({minRequiredDays} days minimum for {totalRouteKm} km)
                  </div>
                </div>

                {/* Total Fare Display */}
                <div className="bg-[#09090b] text-white p-6 rounded-2xl text-center mb-6 shadow-xl">
                  <div className="text-[11px] uppercase tracking-widest text-[#a1a1aa] font-semibold mb-1">
                    Calculated Total Fare
                  </div>
                  <div
                    className="text-4xl font-extrabold text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    ₹{totalEstimatedFare.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[11px] text-[#a1a1aa]">
                    Breakdown: ₹{vehicle.pricePerKm}/km × {billedKm} billed km + ₹{driverCost.toLocaleString("en-IN")} driver allowance ({activeDays} days)
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/917676726209?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white text-sm font-bold rounded-full hover:bg-[#1da851] transition-colors shadow-lg"
                  >
                    Book Custom Itinerary via WhatsApp <ArrowRight size={16} />
                  </a>

                  <a
                    href={googleMapsRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#09090b] text-xs font-bold rounded-full border border-black/10 hover:bg-[#f4f4f5] transition-colors"
                  >
                    Open Route Directions on Google Maps <ExternalLink size={13} />
                  </a>
                </div>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#71717a]">
                  <ShieldCheck size={14} className="text-[#09090b]" /> Tolls & State Permit taxes paid directly on route as actuals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
