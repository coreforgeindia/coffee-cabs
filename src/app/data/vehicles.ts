export interface Vehicle {
  id: string;
  name: string;
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
    shortName: "Innova Crysta",
    seats: "6–7",
    pricePerKm: 19,
    driverAllowance: 400,
    company: "Toyota",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop",
    ],
    features: [
      "Spacious 7-seater plush leather cabin",
      "Automatic climate control with rear AC vents",
      "Generous boot space for 4-5 large suitcases",
      "Independent captain seat recliner option",
      "High-speed USB charging & Bluetooth audio",
      "Advanced safety features & smooth highway suspension",
    ],
    description:
      "The Toyota Innova Crysta is India's premier MPV for comfortable family travel, executive transfers, and outstation trips. Renowned for supreme reliability, smooth highway cruising, and luxurious seating.",
    specifications: {
      engine: "2.4L Diesel Engine",
      fuel: "Diesel",
      ac: "Dual Automatic Climate Control",
      seatingType: "7 Seater Captain / Bench",
      luggageCapacity: "4 Large Suitcases + Hand Baggage",
    },
  },
  {
    id: "7-seater-tt",
    name: "7+1 Luxury Tempo Traveller (Recliner)",
    shortName: "7+1 TT Recliner",
    seats: "7+1",
    pricePerKm: 35,
    driverAllowance: 600,
    company: "Force Motors",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop",
    ],
    features: [
      "Maharaja-style ultra-wide leather recliners",
      "Individual overhead AC blower units & LED lights",
      "Ambient cabin mood lighting & privacy curtains",
      "Smart TV & high-power Surround Sound audio",
      "On-board mini refrigerator & charging ports",
      "Ideal for VIP delegations, weddings & long expeditions",
    ],
    description:
      "Experience private-jet comfort on wheels. Our 7+1 Luxury Tempo Traveller features plush Maharaja recliner seats, generous legroom, entertainment systems, and individual climate controls for an unparalleled journey.",
    specifications: {
      engine: "FM 2.6 CR ED Diesel Engine",
      fuel: "Diesel",
      ac: "Roof Mounted High-Capacity AC",
      seatingType: "7 Maharaja Recliner Seats + Driver",
      luggageCapacity: "Dedicated Rear Luggage Boot",
    },
  },
  {
    id: "9-seater-tt",
    name: "9+1 Luxury Tempo Traveller",
    shortName: "9+1 TT Luxury",
    seats: "9+1",
    pricePerKm: 32,
    driverAllowance: 600,
    company: "Force Motors",
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop",
    ],
    features: [
      "Ergonomic pushback seating with armrests",
      "High-roof walk-through cabin height",
      "Individual AC vents & reading lamps",
      "Bluetooth / Aux music system",
      "Window curtains & spacious aisle",
      "Perfect for group tours, pilgrimages & family reunions",
    ],
    description:
      "The 9+1 Luxury Tempo Traveller offers the optimal combination of capacity and comfort for mid-sized groups. Ample head clearance, plush pushback seats, and efficient AC make long journeys enjoyable.",
    specifications: {
      engine: "2.6L CRDI Turbo Diesel",
      fuel: "Diesel",
      ac: "Roof-Mounted Heavy Duty AC",
      seatingType: "9 Pushback Seats + Driver",
      luggageCapacity: "Under-seat & Rear Cargo Space",
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
  minimumBilling: "300 km/day for outstation trips",
  localPackage: "8 hours / 80 km minimum (within Bangalore)",
  oneWay: "Available — pay only for distance travelled (no return charge)",
  cancellation: [
    "80% refund if cancelled 48+ hours prior to departure",
    "50% refund if cancelled 24–48 hours prior to departure",
    "No refund if cancelled within 24 hours of departure",
  ],
};
