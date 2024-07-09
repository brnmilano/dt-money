import * as zod from "zod";
import { requiredField } from "./messages";

// Text
export const textSchema = zod
  .string({
    message: requiredField,
  })
  .min(1, { message: requiredField });

export const numberSchema = zod
  .string({
    message: requiredField,
  })
  .transform((input) => parseFloat(input))
  .refine((val) => !isNaN(val), {
    message: "Expected number, received string",
  });

// Optional input
export const optionalTextSchema = zod.any().optional();
