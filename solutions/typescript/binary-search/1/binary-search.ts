export function find(haystack: number[], needle: number): number | never {
  let left = 0;
  let right = haystack.length - 1;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = haystack[mid];

    if(guess === needle) 
      return mid;

    if(guess < needle) 
      left = mid + 1;
    else 
      right = mid - 1;
  }
  throw new Error("Value not in array");
}
