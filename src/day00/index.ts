/**
 * Day 00 - Demo / Template
 *
 * This is a demo day to test your setup and serve as a template for other days.
 *
 * Example puzzle: Given a list of numbers, find the sum (part 1) and product (part 2).
 */

/**
 * Part 1: Sum all numbers in the input
 */
export function part1(lines: string[]): number {
  const numbers = lines.map((line) => parseInt(line, 10)).filter((n) => !isNaN(n));

  return numbers.reduce((sum, n) => sum + n, 0);
}

/**
 * Part 2: Multiply all numbers in the input
 */
export function part2(lines: string[]): number {
  const numbers = lines.map((line) => parseInt(line, 10)).filter((n) => !isNaN(n));

  return numbers.reduce((product, n) => product * n, 1);
}
