import { z, ZodRawShape } from "zod";
import { processing } from "./process";

export const createEnv = <T extends ZodRawShape>({
  shape,
  keyFormat = (key: string) => key,
  env,
}: {
  shape: T;
  keyFormat: (key: string) => string;
  env: Record<string, string>;
}) => {
  const _getValue = (key: string) => env[keyFormat(key)];

  const objSchema = z.object(shape);

  const processEnv = Object.keys(shape).reduce((acc, key) => {
    const process =
      processing[shape[key]._def.typeName as keyof typeof processing] ??
      processing.default;

    return {
      ...acc,
      [key]: process.transform(_getValue(key)),
    };
  }, {});

  objSchema.parse(processEnv);

  return new Proxy<{ [key in keyof T]: z.infer<T[key]> }>(shape, {
    get: (_, key: keyof T & string) => {
      const process =
        processing[shape[key]._def.typeName as keyof typeof processing] ??
        processing.default;
      return process.transform(_getValue(key));
    },
  });
};
