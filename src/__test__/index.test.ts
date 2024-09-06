import { expect, test } from "vitest";
import { createEnv } from "..";
import { z } from "zod";

test("should work with empty shape", () => {
  createEnv({
    shape: {},
    env: {},
    keyFormat: (key) => key,
  });
});

test("should throw error if env variable is not exist", () => {
  expect(() =>
    createEnv({
      shape: {
        NODE_ENV: z.string(),
      },
      env: {},
      keyFormat: (key) => key,
    })
  ).toThrowError();
});

test("should throw error if env variable have incorrect type", () => {
  expect(() =>
    createEnv({
      shape: {
        NODE_ENV: z.number(),
      },
      env: {
        NODE_ENV: "production",
      },
      keyFormat: (key) => key,
    })
  ).toThrowError();
});

test("should return existed key", () => {
  const env = createEnv({
    shape: {
      NODE_ENV: z.string(),
    },
    env: {
      NODE_ENV: "production",
    },
    keyFormat: (key) => key,
  });

  expect(env.NODE_ENV).toEqual("production");
});

test("should return existed key with key format", () => {
  const env = createEnv({
    shape: {
      NODE_ENV: z.string(),
    },
    env: {
      VITE_NODE_ENV: "production",
    },
    keyFormat: (key) => `VITE_${key}`,
  });

  expect(env.NODE_ENV).toEqual("production");
});

test("should transform num value", () => {
  const env = createEnv({
    shape: {
      NUM: z.number(),
    },
    env: {
      NUM: "1",
    },
    keyFormat: (key) => key,
  });

  expect(env.NUM).toEqual(1);
});

test("should transform object value", () => {
  const env = createEnv({
    shape: {
      OBJ: z.object({
        name: z.string(),
      }),
    },
    env: {
      OBJ: JSON.stringify({ name: "name" }),
    },
    keyFormat: (key) => key,
  });

  expect(env.OBJ).toEqual({ name: "name" });
});
