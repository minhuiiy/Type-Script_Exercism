const ORBITAL_PERIODS: Record<string, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export function age(planet: string, seconds: number): number {
  const EARTH_YEAR_SECONDS = 31557600;

  // số năm Trái đất = seconds / số giây trong 1 năm Trái đất
  const earthYears = seconds / EARTH_YEAR_SECONDS;

  // tìm chu kỳ quỹ đạo của hành tinh
  const orbitalPeriod = ORBITAL_PERIODS[planet];

  if (!orbitalPeriod) {
    throw new Error('Invalid plannet name.');
  }

  return parseFloat((earthYears / orbitalPeriod).toFixed(2));
}
