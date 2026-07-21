export interface Vehicle {
  id: string;
  name: string;
  category: "SUV" | "Tempo Traveller" | "Force Urbania" | "Luxury Bus" | "Executive Car";
  shortName: string;
  seats: string;
  pricePerKm: number;
  driverAllowance: number;
  company: string;
  images: string[];
  features: string[];
  description: string;
  specifications: {
    engine: string;
    fuel: string;
    ac: string;
    seatingType: string;
    luggageCapacity: string;
  };
}

export const VEHICLES: Vehicle[] = [
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta Premium",
    category: "SUV",
    shortName: "Innova Crysta",
    seats: "6–7",
    pricePerKm: 19,
    driverAllowance: 400,
    company: "Toyota",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop",
    ],
    features: [
      "Spacious 7-seater plush leather cabin",
      "Automatic climate control with rear AC vents",
      "Generous boot space for 4-5 large suitcases",
      "Captain seat recliner option",
    ],
    description:
      "India's premier MPV for comfortable family travel, executive transfers, and outstation trips. Renowned for supreme reliability and smooth highway cruising.",
    specifications: {
      engine: "2.4L Diesel Engine",
      fuel: "Diesel",
      ac: "Dual Automatic Climate Control",
      seatingType: "7 Seater Captain / Bench",
      luggageCapacity: "4 Large Suitcases",
    },
  },
  {
    id: "force-urbania-luxury",
    name: "Force Urbania Luxury (10/12 Seater)",
    category: "Force Urbania",
    shortName: "Urbania Luxury",
    seats: "10–12",
    pricePerKm: 50,
    driverAllowance: 600,
    company: "Force Motors",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop",
    ],
    features: [
      "Maharaja ultra-wide plush recliners",
      "Individual AC blowers & ambient LED lighting",
      "On-board smart TV & high-power audio",
      "Panoramic windows & high-roof walking clearance",
    ],
    description:
      "The flagship Force Urbania Luxury offers private-jet level comfort for VIP delegations, weddings, and premium outstation tours.",
    specifications: {
      engine: "FM 2.6 CR ED Turbo Diesel",
      fuel: "Diesel",
      ac: "High Capacity Individual Roof AC",
      seatingType: "Maharaja Leather Recliners",
      luggageCapacity: "Dedicated Rear Luggage Boot",
    },
  },
  {
    id: "force-urbania-deluxe",
    name: "Force Urbania Deluxe (10/12/16 Seater)",
    category: "Force Urbania",
    shortName: "Urbania Deluxe",
    seats: "10–16",
    pricePerKm: 40,
    driverAllowance: 600,
    company: "Force Motors",
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop",
    ],
    features: [
      "Plush pushback seats with armrests",
      "Individual AC vents & reading lights",
      "Bluetooth / Aux audio system",
      "Wide aisle and comfortable legroom",
    ],
    description:
      "Force Urbania Deluxe balances premium seating comfort with group capacity for outstation holidays and corporate trips.",
    specifications: {
      engine: "2.6L Turbo Diesel Engine",
      fuel: "Diesel",
      ac: "Roof Mounted Heavy Duty AC",
      seatingType: "Pushback Seats",
      luggageCapacity: "Rear Luggage Storage",
    },
  },
  {
    id: "force-urbania-standard",
    name: "Force Urbania Standard (10/12/16 Seater)",
    category: "Force Urbania",
    shortName: "Urbania Standard",
    seats: "10–16",
    pricePerKm: 38,
    driverAllowance: 600,
    company: "Force Motors",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
    ],
    features: [
      "Ergonomic seats with headrests",
      "Full cabin AC & music system",
      "High roof walk-through aisle",
      "Smooth monocoque body suspension",
    ],
    description:
      "Affordable luxury group transport with Force Urbania's signature smooth ride and spacious interior.",
    specifications: {
      engine: "2.6L CRDI Engine",
      fuel: "Diesel",
      ac: "Central High-Performance AC",
      seatingType: "High Back Cushioned Seats",
      luggageCapacity: "Rear Cargo Space",
    },
  },
  {
    id: "7-seater-tt",
    name: "7+1 Luxury Tempo Traveller (Recliner)",
    category: "Tempo Traveller",
    shortName: "7+1 TT Recliner",
    seats: "7+1",
    pricePerKm: 35,
    driverAllowance: 600,
    company: "Force Motors",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
    ],
    features: [
      "Maharaja recliner leather seats",
      "Individual AC vents & reading lamps",
      "Smart TV & Surround Sound audio",
      "Ideal for long outstation trips & pilgrimages",
    ],
    description:
      "Featuring plush Maharaja recliner seats, generous legroom, and individual climate controls for comfortable group travel.",
    specifications: {
      engine: "2.6L Diesel Engine",
      fuel: "Diesel",
      ac: "Roof Mounted AC",
      seatingType: "7 Maharaja Recliner Seats",
      luggageCapacity: "Rear Luggage Boot",
    },
  },
  {
    id: "9-seater-tt",
    name: "9+1 Luxury Tempo Traveller",
    category: "Tempo Traveller",
    shortName: "9+1 TT Luxury",
    seats: "9+1",
    pricePerKm: 28,
    driverAllowance: 600,
    company: "Force Motors",
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop",
    ],
    features: [
      "Pushback seating with armrests",
      "Individual AC vents",
      "Bluetooth audio & curtains",
    ],
    description:
      "Optimal combination of capacity and comfort for mid-sized family groups and pilgrimages.",
    specifications: {
      engine: "2.6L Turbo Diesel",
      fuel: "Diesel",
      ac: "Roof Mounted AC",
      seatingType: "9 Pushback Seats",
      luggageCapacity: "Rear & Under-seat Space",
    },
  },
  {
    id: "12-14-seater-tt",
    name: "12/14 Seater Luxury Tempo Traveller",
    category: "Tempo Traveller",
    shortName: "12/14 Seater TT",
    seats: "12–14",
    pricePerKm: 30,
    driverAllowance: 600,
    company: "Force Motors",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
    ],
    features: [
      "High back pushback seats",
      "Dual blower heavy-duty AC",
      "LED TV & audio system",
    ],
    description:
      "Popular choice for wedding parties, corporate outings, and extended outstation tours.",
    specifications: {
      engine: "2.6L Turbo Diesel",
      fuel: "Diesel",
      ac: "Dual AC Blower",
      seatingType: "12-14 Pushback Seats",
      luggageCapacity: "Dedicated Rear Boot",
    },
  },
  {
    id: "16-seater-tt",
    name: "16 Seater Executive Tempo Traveller",
    category: "Tempo Traveller",
    shortName: "16 Seater TT",
    seats: "16",
    pricePerKm: 35,
    driverAllowance: 600,
    company: "Force Motors",
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop",
    ],
    features: [
      "16 comfortable pushback seats",
      "Powerful roof-mounted AC",
      "Spacious central aisle",
    ],
    description:
      "Maximum capacity Tempo Traveller for large group tours and corporate events.",
    specifications: {
      engine: "FM 2.6 CR Engine",
      fuel: "Diesel",
      ac: "Heavy Duty AC",
      seatingType: "16 Pushback Seats",
      luggageCapacity: "Rear Luggage Area",
    },
  },
  {
    id: "mini-bus",
    name: "Spacious Mini Bus (21/25/30/33/40/50 Seater)",
    category: "Luxury Bus",
    shortName: "Mini Bus",
    seats: "21–50",
    pricePerKm: 50,
    driverAllowance: 800,
    company: "Tata / Ashok Leyland",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
    ],
    features: [
      "Pushback reclining seats",
      "High-power AC & LED TV",
      "Ample luggage under-deck storage",
    ],
    description:
      "Spacious 21 to 50 seater Mini Buses perfect for large wedding parties, corporate events, and pilgrimages.",
    specifications: {
      engine: "4.0L Turbo Diesel",
      fuel: "Diesel",
      ac: "Central Roof AC",
      seatingType: "High Back Reclining Seats",
      luggageCapacity: "Large Under-deck Luggage Hold",
    },
  },
  {
    id: "luxury-bus",
    name: "Ultra Luxury AC Bus (22/40 Seater)",
    category: "Luxury Bus",
    shortName: "Luxury Bus",
    seats: "22–40",
    pricePerKm: 55,
    driverAllowance: 1000,
    company: "Volvo / Scania / Eicher",
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop",
    ],
    features: [
      "Air-suspension ultra smooth ride",
      "Maharaja recliner seats & washroom option",
      "Individual charging ports & TV screens",
    ],
    description:
      "Premium 22 & 40 seater Volvo/Eicher Luxury Buses featuring air-suspension and top luxury amenities.",
    specifications: {
      engine: "6-Cylinder Volvo Diesel Engine",
      fuel: "Diesel",
      ac: "Climate Control AC",
      seatingType: "2x1 / 2x2 Luxury Recliners",
      luggageCapacity: "Huge Belly Cargo Space",
    },
  },
];

export const PRICING_TERMS = {
  included: [
    "Fuel charges (diesel)",
    "Clean & sanitized AC vehicle",
    "Professional uniform driver salary",
    "Vehicle insurance & registration",
  ],
  extras: [
    "Toll gates (as per actual fastag receipts)",
    "Parking fees (as per actual receipts)",
    "Inter-state permit / entry taxes (actuals)",
    "Night halt charge: ₹1,000/night (if driver stays overnight)",
  ],
  minimumBilling: "300 km minimum per day for outstation trips (even if actual travel is less, 300 km/day is billed)",
  localPackage: "8 hours / 80 km minimum (within Bangalore)",
  oneWay: "Available — pay only for distance travelled (no return charge)",
  cancellation: [
    "80% refund if cancelled 48+ hours prior to departure",
    "50% refund if cancelled 24–48 hours prior to departure",
    "No refund if cancelled within 24 hours of departure",
  ],
};
