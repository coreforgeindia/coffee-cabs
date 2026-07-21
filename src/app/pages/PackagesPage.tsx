import { useState } from "react";
import { Search, MapPin, ArrowRight, Compass, Filter } from "lucide-react";
import { Link } from "react-router";
import { DESTINATIONS } from "../data/destinations";

export default function PackagesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const categories = [
    "All",
    "Hill Station",
    "Heritage & Forts",
    "Beach Escapes",
    "Wildlife & Nature",
    "Pilgrimage",
    "Lakes & Waterfalls",
  ];

  const filtered = DESTINATIONS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.state.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === "All" || d.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const defaultFallbackImg = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop";

  return (
    <div className="pt-20 bg-white text-[#09090b] min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#fafafa] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#52525b] mb-3 font-extrabold bg-white border border-black/10 px-4 py-1.5 rounded-full shadow-sm">
            <Compass size={14} className="text-[#09090b]" /> Coffee Cabs Outstation Packages
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            200 Outstation Packages Across India
          </h1>
          <p className="text-[#71717a] text-sm sm:text-base max-w-xl mx-auto">
            Browse famous tour packages from Bangalore. Select any place to calculate live vehicle fares and book your journey with Coffee Cabs.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar with Dropdown Filter */}
      <section className="py-6 bg-white border-b border-black/5 sticky top-16 z-30 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717a]" />
              <input
                type="text"
                placeholder="Search destination or state (e.g., Mysore, Coorg, Ooty, Goa, Tirupati)..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-[#fafafa] text-[#09090b] placeholder:text-[#a1a1aa] pl-12 pr-4 py-3.5 rounded-2xl border border-black/10 text-sm focus:outline-none focus:border-[#09090b] transition-colors shadow-sm font-medium"
              />
            </div>

            {/* Category Dropdown Filter */}
            <div className="relative w-full sm:w-64">
              <Filter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717a] pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-[#fafafa] text-[#09090b] font-bold pl-11 pr-8 py-3.5 rounded-2xl border border-black/10 text-sm focus:outline-none focus:border-[#09090b] transition-colors shadow-sm appearance-none cursor-pointer"
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
      </section>

      {/* Grid of Packages */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center mb-6 text-xs text-[#71717a] font-semibold">
            <span>Showing {currentItems.length} of {filtered.length} Packages</span>
            <span>Page {currentPage} of {totalPages || 1}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentItems.map((d) => (
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 bg-[#fafafa] text-[#09090b] text-xs font-bold rounded-xl border border-black/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-200"
              >
                Previous
              </button>
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 text-xs font-bold rounded-xl transition-all ${
                      currentPage === pageNum
                        ? "bg-[#09090b] text-white"
                        : "bg-[#fafafa] text-[#09090b] border border-black/10 hover:bg-neutral-200"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-4 py-2 bg-[#fafafa] text-[#09090b] text-xs font-bold rounded-xl border border-black/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-200"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
