import * as zod from "zod";
import { requiredField } from "./messages";

// Text
export const textSchema = zod
  .string({
    message: requiredField,
  })
  .min(1, requiredField);

// Optional input
export const optionalTextSchema = zod.any().optional();
