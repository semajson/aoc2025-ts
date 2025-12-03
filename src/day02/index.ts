/**
 * Day 02 - [Puzzle Title]
 *
 * https://adventofcode.com/2025/day/2
 */

/**
 * Part 1:
 */
export function part1(lines: string[]): number {
  const ranges = parse(lines);

  return calc_invalid_tot(ranges, is_invalid_1);
}

/**
 * Part 2:
 */
export function part2(lines: string[]): number {
  const ranges = parse(lines);

  return calc_invalid_tot(ranges, is_invalid_2);
}

function calc_invalid_tot(ranges: Range[], is_invalid: (val: string) => boolean): number {
  let invalid_tot = 0;
  for (const range of ranges) {
    for (let i = range.start; i <= range.end; i += 1) {
      let i_str = String(i);
      if (is_invalid(i_str)) {
        invalid_tot += i;
      }
    }
  }
  return invalid_tot;
}

interface Range {
  start: number;
  end: number;
}

function parse(lines: string[]): Range[] {
  const ranges = lines[0].split(",");

  return ranges.map((range) => {
    const parts = range.split("-");
    return {
      start: Number(parts[0]),
      end: Number(parts[1]),
    };
  });
}

function is_invalid_1(val: string): boolean {
  const mid = Math.floor(val.length / 2);
  return val.slice(0, mid) === val.slice(mid);
}
function is_invalid_2(val: string): boolean {
  const mid = Math.floor(val.length / 2);
  for (let i = 1; i <= mid; i += 1) {
    let sub = val.slice(0, i);
    if (val.length % sub.length !== 0) {
      continue;
    }
    let sub_repeat = val.length / sub.length;

    if (sub.repeat(sub_repeat) === val) {
      return true;
    }
  }
  return false;
}
