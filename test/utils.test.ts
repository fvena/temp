import { describe, expect, it } from "vitest";

import { add, divide, multiply, subtract } from "../src/utils.js";

describe("Utils", () => {
  it("add", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("subtract", () => {
    expect(subtract(1, 2)).toBe(-1);
  });

  it("multiply", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("divide", () => {
    expect(divide(6, 3)).toBe(2);
  });
});
