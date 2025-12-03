/**
 * Day 01 - [Puzzle Title]
 *
 * https://adventofcode.com/2025/day/1
 */

interface Rotation {
  direction_sign: number;
  amount: number;
}

/**
 * Part 1:
 */
export function part1(lines: string[]): number {
  let rotations = getRotations(lines);

  let current = 50;
  let zero_count = 0;
  for (const rotation of rotations) {
    current += rotation.amount * rotation.direction_sign + 100;
    current %= 100;
    if (current == 0) {
      zero_count += 1;
    }
  }

  return zero_count;
}

/**
 * Part 2:
 */
export function part2(lines: string[]): number {
  let rotations = getRotations(lines);

  let current = 50;
  let zero_count = 0;
  for (const rotation of rotations) {
    let old_current = current;

    let rotation_amount = rotation.amount;

    // If loop all way around, add ticks + simplify
    if (rotation_amount >= 100) {
      zero_count += Math.floor(rotation.amount / 100);
      rotation_amount = rotation_amount % 100;
    }

    current += rotation_amount * rotation.direction_sign;

    if (rotation_amount == 0) {
      break;
    } else if (current >= 100) {
      zero_count += 1;
    } else if (current <= 0 && old_current != 0) {
      // old_current check needed as if we started at 0 and then go left,
      // there is no tick
      zero_count += 1;
    }

    current += 100;
    current %= 100;
  }

  return zero_count;
}

function getRotations(lines: string[]): Rotation[] {
  return lines.map((line) => {
    const direction = line[0];
    const amount = Number(line.slice(1));
    switch (direction) {
      case "R": {
        return {
          direction_sign: 1,
          amount,
        };
      }
      case "L": {
        return {
          direction_sign: -1,
          amount,
        };
      }
      default:
        throw Error("Unexpected direction:" + direction);
    }
  });
}
