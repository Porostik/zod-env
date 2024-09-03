import { z } from "zod";
import { createEnv } from "../src";

export const env = createEnv({
  shape: {
    STRING: z.string(),
    NUM: z.number(),
    OBJ: z.object({
      name: z.string(),
    }),
  },
  env: import.meta.env,
  keyFormat: (key) => `VITE_${key}`,
});
