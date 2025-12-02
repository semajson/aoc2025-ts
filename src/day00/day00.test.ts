import { describe, it, expect } from "vitest";
import { part1, part2 } from "./index.js";

describe("Day 00 - Demo", () => {
  const sampleInput = ["1", "2", "3", "4", "5"];

  describe("part1", () => {
    it("should sum all numbers", () => {
      expect(part1(sampleInput)).toBe(15); // 1+2+3+4+5 = 15
    });

    it("should handle empty input", () => {
      expect(part1([])).toBe(0);
    });

    it("should ignore non-numeric lines", () => {
      const mixedInput = ["1", "hello", "2", "world", "3"];
      expect(part1(mixedInput)).toBe(6);
    });
  });

  describe("part2", () => {
    it("should multiply all numbers", () => {
      expect(part2(sampleInput)).toBe(120); // 1*2*3*4*5 = 120
    });

    it("should handle empty input", () => {
      expect(part2([])).toBe(1); // Identity for multiplication
    });

    it("should handle single number", () => {
      expect(part2(["42"])).toBe(42);
    });
  });
});
