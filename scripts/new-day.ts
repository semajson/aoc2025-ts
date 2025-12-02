#!/usr/bin/env tsx
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const day = parseInt(process.argv[2], 10);

if (isNaN(day) || day < 1 || day > 25) {
  console.error("Usage: npm run new <day>");
  console.error("Example: npm run new 1");
  console.error("Day must be between 1 and 25");
  process.exit(1);
}

const dayStr = day.toString().padStart(2, "0");
const srcDir = join(process.cwd(), "src", `day${dayStr}`);
const dataDir = join(process.cwd(), "data", `day${dayStr}`);

// Check if already exists
if (existsSync(srcDir)) {
  console.error(`❌ Day ${dayStr} already exists at ${srcDir}`);
  process.exit(1);
}

// Create directories
mkdirSync(srcDir, { recursive: true });
mkdirSync(dataDir, { recursive: true });

// Solution template
const solutionTemplate = `/**
 * Day ${dayStr} - [Puzzle Title]
 *
 * https://adventofcode.com/2025/day/${day}
 */

/**
 * Part 1:
 */
export function part1(lines: string[]): number {
  // Parse input

  // TODO: Implement solution
  return 0;
}

/**
 * Part 2:
 */
export function part2(lines: string[]): number {
  // Parse input

  // TODO: Implement solution
  return 0;
}
`;

// Test template
const testTemplate = `import { describe, it, expect } from "vitest";
import { part1, part2 } from "./index.js";

describe("Day ${dayStr}", () => {
  // Example input from the puzzle description
  const sampleInput = [
    "",
  ];

  describe("part1", () => {
    it("should solve the sample input", () => {
      expect(part1(sampleInput)).toBe(0); // Update with expected answer
    });
  });

  describe("part2", () => {
    it("should solve the sample input", () => {
      expect(part2(sampleInput)).toBe(0); // Update with expected answer
    });
  });
});
`;

// Write files
writeFileSync(join(srcDir, "index.ts"), solutionTemplate);
writeFileSync(join(srcDir, `day${dayStr}.test.ts`), testTemplate);
writeFileSync(join(dataDir, "input.txt"), "");

console.log(`
✅ Created Day ${dayStr}!

Files created:
  📄 src/day${dayStr}/index.ts
  🧪 src/day${dayStr}/day${dayStr}.test.ts
  📝 data/day${dayStr}/input.txt

Next steps:
  1. Paste your puzzle input into data/day${dayStr}/input.txt
  2. Edit src/day${dayStr}/index.ts to solve the puzzle
  3. Run with: npm run day ${day}
  4. Test with: npm test
`);

