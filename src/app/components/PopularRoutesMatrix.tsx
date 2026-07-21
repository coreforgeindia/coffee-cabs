export default function PopularRoutesMatrix() {
  const routesData = [
    { dest: "Mysore", dist: "150 km", tt9: "₹4,200", tt12: "₹4,500", tt16: "₹5,250", urbania: "₹5,250", innova: "₹2,850" },
    { dest: "Coorg", dist: "260 km", tt9: "₹7,280", tt12: "₹7,800", tt16: "₹9,100", urbania: "₹9,100", innova: "₹4,940" },
    { dest: "Ooty", dist: "270 km", tt9: "₹7,560", tt12: "₹8,100", tt16: "₹9,450", urbania: "₹9,450", innova: "₹5,130" },
    { dest: "Tirupati", dist: "250 km", tt9: "₹7,000", tt12: "₹7,500", tt16: "₹8,750", urbania: "₹8,750", innova: "₹4,750" },
    { dest: "Wayanad", dist: "290 km", tt9: "₹8,120", tt12: "₹8,700", tt16: "₹10,150", urbania: "₹10,150", innova: "₹5,510" },
    { dest: "Pondicherry", dist: "320 km", tt9: "₹8,960", tt12: "₹9,600", tt16: "₹11,200", urbania: "₹11,200", innova: "₹6,080" },
    { dest: "Chikmagalur", dist: "240 km", tt9: "₹6,720", tt12: "₹7,200", tt16: "₹8,400", urbania: "₹8,400", innova: "₹4,560" },
    { dest: "Goa", dist: "580 km", tt9: "₹16,240", tt12: "₹17,400", tt16: "₹20,300", urbania: "₹20,300", innova: "₹11,020" },
    { dest: "Mangalore", dist: "360 km", tt9: "₹10,080", tt12: "₹10,800", tt16: "₹12,600", urbania: "₹12,600", innova: "₹6,840" },
    { dest: "Chennai", dist: "350 km", tt9: "₹9,800", tt12: "₹10,500", tt16: "₹12,250", urbania: "₹12,250", innova: "₹6,650" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#fafafa] border-y border-black/5 text-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Popular Routes – <span className="text-[#f59e0b]">Fleet Fare Estimate</span>
          </h2>
          <p className="text-[#71717a] text-sm">
            Estimated one-way fares from Bangalore. Round trips get 15% discount on total fare.
          </p>
        </div>

        {/* Scrollable Table */}
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

        <p className="text-center text-xs text-[#71717a] mt-4 font-medium italic">
          * Fares are estimates. Actual fare depends on route, duration, and vehicle availability. Round trip: 15% discount.
        </p>
      </div>
    </section>
  );
}
