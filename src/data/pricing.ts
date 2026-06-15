export const materialRates = {
  clear: 160,
  colored: 180,
  frosted: 170,
  mirror: 220,
  specialty: 240,
};

export const complexityRates = {
  simple: 1.0,
  moderate: 1.25,
  complex: 1.6,
};

export const edgeTreatmentRates = {
  none: 0,
  polished: 25,
  beveled: 30,
  flamePolished: 35,
};

export const surfaceFinishRates = {
  none: 0,
  uvPrint: 90,
  engraving: 70,
  bending: 120,
};

export const leadTimeMultipliers = {
  standard: 1.0,
  express: 1.15,
  rush: 1.3,
};

export const quantityDiscounts = [
  { min: 2000, rate: 0.15 },
  { min: 1000, rate: 0.1 },
  { min: 500, rate: 0.05 },
  { min: 100, rate: 0.02 },
];

export const quoteDefaults = {
  materialType: "clear",
  width: 500,
  height: 500,
  thickness: 3,
  quantity: 50,
  complexity: "simple",
  edgeFinish: "none",
  surfaceFinish: "none",
  leadTime: "standard",
} as const;
