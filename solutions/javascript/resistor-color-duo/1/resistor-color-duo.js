//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (color) => {
  const ditgit1 = COLORS.indexOf(color[0]);
  const ditgit2 = COLORS.indexOf(color[1]);
  const result = ditgit1 * 10 + ditgit2;
  return result;
};

export const COLORS = [
  "black", "brown", "red", "orange", "yellow",
  "green", "blue", "violet", "grey", "white"
];
