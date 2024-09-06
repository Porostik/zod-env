import { expect, test } from "vitest";
import { boolean } from "../boolean";

test("should transform to `true`", () => {
  expect(boolean.transform("true")).toBe(true);
});

test("should transform to `false`", () => {
  expect(boolean.transform("false")).toBe(false);
});

test("should return base value", () => {
  expect(boolean.transform("test")).toBe("test");
});
