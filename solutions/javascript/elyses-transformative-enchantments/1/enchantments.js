// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const newDeck = deck.map((value) => value * 2);
  return newDeck;
  throw new Error('Implement the seeingDouble function');
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.reduce((
    accumulator, currentValue) => {
      if (currentValue === 3) {
        accumulator.push(3, 3, 3);
      } else {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.slice(4, 6);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  // Lấy lá đầu và cuối
  const top = deck.shift(); // Lấy phần tử đầu
  const bottom = deck.pop(); // Lấy phần tử cuối

  // Xác định vị trí chèn ở giữa
  const middleIndex = deck.length / 2;

  // Chèn bottom rồi top vào giữa
  deck.splice(middleIndex, 0, bottom, top);

  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  const newDeck = deck.filter((value) => value === 2);
  return newDeck;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return [...deck].sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
