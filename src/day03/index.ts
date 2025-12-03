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
    sum += largest_joltage_2(bank);
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
    sum += largest_joltage_12(bank);
  }
  return sum;
}

function largest_joltage_2(bank: string): number {
  let largest_tot = 0;
  let largest_first_num = Number(bank[0]);
  for (let i = 1; i < bank.length; i += 1) {
    let second_num = Number(bank[i]);
    let tot = largest_first_num * 10 + second_num;

    largest_tot = Math.max(largest_tot, tot);
    largest_first_num = Math.max(largest_first_num, second_num);
  }
  return largest_tot;
}

function largest_joltage_12(bank: string): number {
  let largest_12 = bank.slice(0, 12);

  for (let i = 12; i < bank.length; i += 1) {
    let new_largest_12 = largest_12;

    for (let j = 0; j < 12; j += 1) {
      let consider = largest_12.slice(0, j) + largest_12.slice(j + 1) + bank[i];

      if (Number(consider) > Number(new_largest_12)) {
        new_largest_12 = consider;
      }
    }
    largest_12 = new_largest_12;
  }
  return Number(largest_12);
}
