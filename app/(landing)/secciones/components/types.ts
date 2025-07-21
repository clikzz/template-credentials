export interface Section {
  name: string;
  level: string;
  ageRange: string;
  schedule: string;
  hours: string;
  price: number;
  hasPromo?: boolean;
  promoDetails?: string;
  noSpots?: boolean;
  color: string;
  category: "formativo" | "avanzado";
}
