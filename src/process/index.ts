import { boolean } from "./boolean";
import { num } from "./num";
import { object } from "./object";

export const processing = {
  ZodNumber: num,
  ZodBoolean: boolean,
  ZodObject: object,

  default: {
    transform: (v: unknown) => v,
  },
};
