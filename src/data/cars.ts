export interface Car {
  id: string;
  name: string;
  image: string;
  description: string;
  range: string;
  battery: string;
  price: string;
  topSpeed: string;
  chargeTime: string;
  seats: string;
  acceleration: string;
}

export const cars: Car[] = [
  {
    id: "seal",
    name: "BYD Seal",
    image: "https://media.ed.edmunds-media.com/tesla/model-s/2026/oem/2026_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg",
    description: "Performance electric sedan with sporty dynamics.",
    range: "700 km",
    battery: "82.5 kWh",
    price: "$48,000",
    topSpeed: "180 km/h",
    chargeTime: "10h",
    seats: "5",
    acceleration: "0‑100 km/h: 3.8s"
  },
  {
    id: "atto3",
    name: "BYD Atto 3",
    image: "https://media.ed.edmunds-media.com/tesla/model-s/2026/oem/2026_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg",
    description: "Compact SUV with balanced efficiency.",
    range: "420 km",
    battery: "60.4 kWh",
    price: "$32,000",
    topSpeed: "160 km/h",
    chargeTime: "8h",
    seats: "5",
    acceleration: "0‑100 km/h: 7.9s"
  },
  {
    id: "dolphin",
    name: "BYD Dolphin",
    image: "https://media.ed.edmunds-media.com/tesla/model-s/2026/oem/2026_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg",
    description: "Best for urban mobility and daily commuting.",
    range: "405 km",
    battery: "44.9 kWh",
    price: "$28,000",
    topSpeed: "150 km/h",
    chargeTime: "6h",
    seats: "5",
    acceleration: "0‑100 km/h: 8.9s"
  },
  // add more cars...
];