import { describe, it, expect } from "vitest";
import { part1, part2 } from "./index.js";

describe("test 1 - expect 6", () => {
  // Example input from the puzzle description
  const sampleInput = ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"];

  describe("part2", () => {
    it("should solve the sample input", () => {
      expect(part2(sampleInput)).toBe(6); // Update with expected answer
    });
  });
});

describe("test 2 - expect 4", () => {
  // Example input from the puzzle description
  const sampleInput = ["L50", "L1", "L1", "R2", "L2", "R2", "R100"];

  describe("part2", () => {
    it("should solve the sample input", () => {
      expect(part2(sampleInput)).toBe(4); // Update with expected answer
    });
  });
});

describe("test 3 - expect 6", () => {
  // Example input from the puzzle description
  const sampleInput = ["L200", "R200", "L200"];

  describe("part2", () => {
    it("should solve the sample input", () => {
      expect(part2(sampleInput)).toBe(6); // Update with expected answer
    });
  });
});

describe("test 4 - expect 3", () => {
  // Example input from the puzzle description
  const sampleInput = ["R50", "R100", "L100"];

  describe("part2", () => {
    it("should solve the sample input", () => {
      expect(part2(sampleInput)).toBe(3); // Update with expected answer
    });
  });
});

describe("tet 5 - expect 4", () => {
  // Example input from the puzzle description
  const sampleInput = ["R50", "R101", "L102"];

  describe("part2", () => {
    it("should solve the sample input", () => {
      expect(part2(sampleInput)).toBe(4); // Update with expected answer
    });
  });
});

describe("test 6 - expect 5", () => {
  // Example input from the puzzle description
  const sampleInput = ["R50", "R200", "L200"];

  describe("part2", () => {
    it("should solve the sample input", () => {
      expect(part2(sampleInput)).toBe(5); // Update with expected answer
    });
  });
});
