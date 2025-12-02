/**
 * Standard interface for all day solutions
 */
export interface DaySolution {
  part1: (lines: string[]) => string | number;
  part2: (lines: string[]) => string | number;
}
