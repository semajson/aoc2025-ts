import { readFileSync } from "fs";
import { join } from "path";
import type { DaySolution } from "./types.js";

/**
 * Reads the input file for a given day and returns lines as an array
 */
function readInput(day: number): string[] {
  const dayStr = day.toString().padStart(2, "0");
  const inputPath = join(process.cwd(), "data", `day${dayStr}`, "input.txt");

  try {
    const content = readFileSync(inputPath, "utf-8");
    // Split by newlines, keeping empty lines but trimming the final newline
    return content.trimEnd().split("\n");
  } catch (error) {
    console.error(`❌ Could not read input file: ${inputPath}`);
    process.exit(1);
  }
}

/**
 * Dynamically imports the solution module for a given day
 */
async function loadDaySolution(day: number): Promise<DaySolution> {
  const dayStr = day.toString().padStart(2, "0");
  const modulePath = `./day${dayStr}/index.js`;

  try {
    const module = await import(modulePath);
    return module as DaySolution;
  } catch (error) {
    console.error(`❌ Could not load solution for day ${day}`);
    console.error(`   Make sure src/day${dayStr}/index.ts exists and exports part1 and part2`);
    process.exit(1);
  }
}

/**
 * Main entry point
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: npm run day <day_number>");
    console.error("Example: npm run day 1");
    process.exit(1);
  }

  const day = parseInt(args[0], 10);

  if (isNaN(day) || day < 0 || day > 25) {
    console.error("Day must be a number between 0 and 25");
    process.exit(1);
  }

  const dayStr = day.toString().padStart(2, "0");
  console.log(`\n🎄 Advent of Code 2025 - Day ${dayStr}\n`);

  // Read input
  const lines = readInput(day);
  console.log(`📄 Read ${lines.length} lines from input\n`);

  // Load and run solution
  const solution = await loadDaySolution(day);

  // Part 1
  console.log("⭐ Part 1:");
  const start1 = performance.now();
  const result1 = solution.part1(lines);
  const time1 = (performance.now() - start1).toFixed(2);
  console.log(`   Answer: ${result1}`);
  console.log(`   Time: ${time1}ms\n`);

  // Part 2
  console.log("⭐ Part 2:");
  const start2 = performance.now();
  const result2 = solution.part2(lines);
  const time2 = (performance.now() - start2).toFixed(2);
  console.log(`   Answer: ${result2}`);
  console.log(`   Time: ${time2}ms\n`);
}

main();
