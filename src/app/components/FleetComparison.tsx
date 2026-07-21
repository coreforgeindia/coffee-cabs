export default function FleetComparison() {
  const comparisonData = [
    {
      name: "9 Seater TT",
      price: "₹28/km",
      seating: "9",
      ac: true,
      pushback: true,
      tv: false,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Small Groups",
    },
    {
      name: "12/14 Seater TT",
      price: "₹30/km",
      seating: "12-14",
      ac: true,
      pushback: true,
      tv: false,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Group Travel",
    },
    {
      name: "16 Seater TT",
      price: "₹35/km",
      seating: "16",
      ac: true,
      pushback: true,
      tv: true,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Large Groups",
    },
    {
      name: "Force Urbania",
      price: "₹38-₹50/km",
      seating: "10-16",
      ac: true,
      pushback: "✓ (Maharaja)",
      tv: true,
      music: true,
      restroom: false,
      wifi: true,
      bestFor: "Premium Travel",
    },
    {
      name: "Innova Crysta",
      price: "₹19/km",
      seating: "7",
      ac: true,
      pushback: false,
      tv: false,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Business/Corporate",
    },
    {
      name: "Luxury Car",
      price: "₹25/km",
      seating: "4",
      ac: true,
      pushback: false,
      tv: false,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "VIP/Luxury",
    },
    {
      name: "Mini Bus",
      price: "₹50/km",
      seating: "20-50",
      ac: true,
      pushback: true,
      tv: true,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Events/Weddings",
    },
    {
      name: "Luxury Bus",
      price: "₹45–₹55/km",
      seating: "22-40",
      ac: true,
      pushback: true,
      tv: true,
      music: true,
      restroom: true,
      wifi: false,
      bestFor: "Large Tours",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Fleet <span className="text-[#f59e0b]">Comparison</span>
          </h2>
          <p className="text-[#71717a] text-sm">
            Compare all our Coffee Cabs vehicles side-by-side to find the perfect match for your trip.
          </p>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-x-auto rounded-3xl border border-black/10 shadow-xl bg-white">
          <table className="w-full text-left text-xs min-w-[900px]">
            <thead>
              <tr className="bg-[#1e293b] text-white">
                <th className="p-4 font-bold uppercase tracking-wider text-[11px] w-36">Feature</th>
                {comparisonData.map((v) => (
                  <th key={v.name} className="p-4 font-bold text-center bg-[#f59e0b] text-black">
                    {v.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-[#09090b]">
              <tr className="hover:bg-[#fafafa]">
                <td className="p-4 font-bold bg-[#fafafa]">Price</td>
                {comparisonData.map((v) => (
                  <td key={v.name} className="p-4 text-center font-extrabold text-[#09090b]">
                    {v.price}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-[#fafafa]">
                <td className="p-4 font-bold bg-[#fafafa]">Seating</td>
                {comparisonData.map((v) => (
                  <td key={v.name} className="p-4 text-center font-semibold">
                    {v.seating}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-[#fafafa]">
                <td className="p-4 font-bold bg-[#fafafa]">AC</td>
                {comparisonData.map((v) => (
                  <td key={v.name} className="p-4 text-center font-bold text-[#22c55e]">
                    ✓
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-[#fafafa]">
                <td className="p-4 font-bold bg-[#fafafa]">Pushback Seats</td>
                {comparisonData.map((v) => (
                  <td key={v.name} className="p-4 text-center">
                    {typeof v.pushback === "string" ? (
                      <span className="font-bold text-[#09090b]">{v.pushback}</span>
                    ) : v.pushback ? (
                      <span className="font-bold text-[#22c55e]">✓</span>
                    ) : (
                      <span className="text-[#a1a1aa]">—</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-[#fafafa]">
                <td className="p-4 font-bold bg-[#fafafa]">LED TV</td>
                {comparisonData.map((v) => (
                  <td key={v.name} className="p-4 text-center">
                    {v.tv ? <span className="font-bold text-[#22c55e]">✓</span> : <span className="text-[#a1a1aa]">—</span>}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-[#fafafa]">
                <td className="p-4 font-bold bg-[#fafafa]">Music System</td>
                {comparisonData.map((v) => (
                  <td key={v.name} className="p-4 text-center">
                    {v.music ? <span className="font-bold text-[#22c55e]">✓</span> : <span className="text-[#a1a1aa]">—</span>}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-[#fafafa]">
                <td className="p-4 font-bold bg-[#fafafa]">Restroom</td>
                {comparisonData.map((v) => (
                  <td key={v.name} className="p-4 text-center">
                    {v.restroom ? <span className="font-bold text-[#22c55e]">✓</span> : <span className="text-[#a1a1aa]">—</span>}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-[#fafafa]">
                <td className="p-4 font-bold bg-[#fafafa]">WiFi</td>
                {comparisonData.map((v) => (
                  <td key={v.name} className="p-4 text-center">
                    {v.wifi ? <span className="font-bold text-[#22c55e]">✓</span> : <span className="text-[#a1a1aa]">—</span>}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-[#fafafa] bg-[#fafafa]/50 font-semibold">
                <td className="p-4 font-bold bg-[#fafafa]">Best For</td>
                {comparisonData.map((v) => (
                  <td key={v.name} className="p-4 text-center text-[#52525b]">
                    {v.bestFor}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
