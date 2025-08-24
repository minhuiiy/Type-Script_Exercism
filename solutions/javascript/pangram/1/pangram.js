//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  if (!sentence) return false;

  const normalized = sentence.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (const ch of alphabet) {
    if (!normalized.includes(ch)) {
      return false;
    }
  }
    return true;
};
