/**
 * Day 03 - [Puzzle Title]
 *
 * https://adventofcode.com/2025/day/3
 */

/**
 * Part 1:
 */
export function part1(lines: string[]): number {
  let sum = 0;
  for (const bank of lines) {
    sum += maxJoltage(bank, 2);
  }
  return sum;
}

/**
 * Part 2:
 */
export function part2(lines: string[]): number {
  let sum = 0;
  for (const bank of lines) {
    sum += maxJoltage(bank, 12);
  }
  return sum;
}

function maxJoltage(bank: string, numBatteries: number): number {
  let maxJoltage = bank.slice(0, numBatteries);

  for (let i = numBatteries; i < bank.length; i++) {
    let newMaxJoltage = maxJoltage;

    for (let j = 0; j < numBatteries; j++) {
      let consider = maxJoltage.slice(0, j) + maxJoltage.slice(j + 1) + bank[i];

      if (Number(consider) > Number(newMaxJoltage)) {
        newMaxJoltage = consider;
      }
    }
    maxJoltage = newMaxJoltage;
  }
  return Number(maxJoltage);
}
