const STEPS = [
  { tier: 0, lowBoundary: 0, highBoundary: 5000, taxRate: 0, fullCost: 0 },
  {
    tier: 1,
    lowBoundary: 5000,
    highBoundary: 7000,
    taxRate: 0.1,
    fullCost: 200,
  },
  {
    tier: 2,
    lowBoundary: 7000,
    highBoundary: 9000,
    taxRate: 0.2,
    fullCost: 400,
  },
  {
    tier: 3,
    lowBoundary: 9000,
    highBoundary: 11000,
    taxRate: 0.3,
    fullCost: 600,
  },
  {
    tier: 4,
    lowBoundary: 11000,
    highBoundary: 1000000, // JSON doesnt support Infinity
    taxRate: 0.4,
    fullCost: 1000000,
  },
]

module.exports = STEPS
