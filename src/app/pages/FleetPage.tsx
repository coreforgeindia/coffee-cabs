import { VEHICLES } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

export default function FleetPage() {
  return (
    <div className="pt-20 bg-white text-[#09090b] min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#fafafa] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-[#52525b] mb-3 font-extrabold bg-white border border-black/10 px-4 py-1.5 rounded-full inline-block shadow-sm">
            Our 3 Fleet Models
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Toyota Innova Crysta & Luxury Tempo Travellers
          </h1>
          <p className="text-[#71717a] text-sm sm:text-base max-w-lg mx-auto">
            Carefully maintained, luxury chauffeur-driven fleet from Bangalore. Use the image slideshow controls to view interior photos and specifications.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {VEHICLES.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
