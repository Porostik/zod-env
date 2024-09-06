import { expect, test } from "vitest";
import { num } from "../num";

test("should transform to number", () => {
  expect(num.transform("1")).toBe(1);
});

test("should transform to nan if base value is not a number", () => {
  expect(num.transform("asd")).toBe(NaN);
});
