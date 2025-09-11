const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function decodedResistorValue(colors: string[]): string {
  const first = COLORS.indexOf(colors[0]);
  const second = COLORS.indexOf(colors[1]);
  const multiplier = Math.pow(10, COLORS.indexOf(colors[2]));

  let value = (first * 10 + second) * multiplier;

  if (value >= 1_000_000_000) {
    return `${value / 1_000_000_000} gigaohms`;
  } else if (value >= 1_000_000) {
    return `${value / 1_000_000} megaohms`;
  } else if (value >= 1_000) {
    return `${value / 1_000} kiloohms`;
  } else {
    return `${value} ohms`;
  }
}
