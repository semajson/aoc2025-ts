/**
 * Day 03 - [Puzzle Title]
 *
 * https://adventofcode.com/2025/day/3
 */

/**
 * Part 1:
 */
export function part1(lines: string[]): number {
  // Parse input

  let sum = 0;
  for (const bank of lines) {
    sum += largest_joltage(bank, 2);
  }
  return sum;
}

/**
 * Part 2:
 */
export function part2(lines: string[]): number {
  // Parse input
  let sum = 0;
  for (const bank of lines) {
    sum += largest_joltage(bank, 12);
  }
  return sum;
}

function largest_joltage(bank: string, flip: number): number {
  let largest = bank.slice(0, flip);

  for (let i = flip; i < bank.length; i += 1) {
    let new_largest = largest;

    for (let j = 0; j < flip; j += 1) {
      let consider = largest.slice(0, j) + largest.slice(j + 1) + bank[i];

      if (Number(consider) > Number(new_largest)) {
        new_largest = consider;
      }
    }
    largest = new_largest;
  }
  return Number(largest);
}
