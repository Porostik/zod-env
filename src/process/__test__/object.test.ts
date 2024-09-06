import { expect, test } from "vitest";
import { object } from "../object";

test("should transform to object", () => {
  const baseObject = { name: "name" };
  expect(object.transform(JSON.stringify(baseObject))).toEqual(baseObject);
});

test("should return base value if base value is not a object", () => {
  expect(object.transform("asd")).toBe("asd");
});
