import { describe, it, expect } from "vitest";
import { part1, part2 } from "./index.js";

describe("Day 03", () => {
  // Example input from the puzzle description
  const sampleInput = ["987654321111111", "811111111111119", "234234234234278", "818181911112111"];

  describe("part1", () => {
    it("should solve the sample input", () => {
      expect(part1(sampleInput)).toBe(357); // Update with expected answer
    });
  });

  describe("part2", () => {
    it("should solve the sample input", () => {
      expect(part2(sampleInput)).toBe(3121910778619); // Update with expected answer
    });
  });
});
