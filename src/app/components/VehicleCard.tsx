import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Fuel, CheckCircle2, ArrowRight } from "lucide-react";
import { Vehicle } from "../data/vehicles";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? vehicle.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === vehicle.images.length - 1 ? 0 : prev + 1));
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Coffee Cabs! I would like to inquire about booking the ${vehicle.name} (₹${vehicle.pricePerKm}/km). Please share availability.`
  );

  return (
    <div className="bg-white border border-black/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Slideshow Image Header */}
        <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
          <img
            src={vehicle.images[currentImgIndex]}
            alt={`${vehicle.name} - Image ${currentImgIndex + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Company Badge */}
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20 uppercase tracking-widest">
            {vehicle.company}
          </div>

          {/* Rate Badge */}
          <div className="absolute top-4 right-4 bg-white text-black text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg">
            ₹{vehicle.pricePerKm}/km
          </div>

          {/* Slideshow Navigation Controls */}
          {vehicle.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {vehicle.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImgIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImgIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3
              className="text-xl font-bold text-[#09090b] group-hover:text-neutral-700 transition-colors"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {vehicle.name}
            </h3>
          </div>

          <p className="text-xs text-[#71717a] leading-relaxed mb-5">
            {vehicle.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            <div className="bg-[#fafafa] rounded-xl p-3 border border-black/5 flex items-center gap-2.5">
              <Users size={16} className="text-[#09090b] shrink-0" />
              <div>
                <div className="text-[10px] text-[#71717a] uppercase tracking-wider font-semibold">Capacity</div>
                <div className="text-xs font-bold text-[#09090b]">{vehicle.seats} Seater</div>
              </div>
            </div>
            <div className="bg-[#fafafa] rounded-xl p-3 border border-black/5 flex items-center gap-2.5">
              <Fuel size={16} className="text-[#09090b] shrink-0" />
              <div>
                <div className="text-[10px] text-[#71717a] uppercase tracking-wider font-semibold">Driver Allowance</div>
                <div className="text-xs font-bold text-[#09090b]">₹{vehicle.driverAllowance}/day</div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <ul className="space-y-1.5 mb-6">
            {vehicle.features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-[#71717a]">
                <CheckCircle2 size={13} className="text-[#09090b] shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-0">
        <a
          href={`https://wa.me/917676726209?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#09090b] text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-colors shadow-md"
        >
          Book {vehicle.shortName} Now <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
