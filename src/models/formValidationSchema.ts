import * as zod from "zod";
import { numberSchema, textSchema } from "../constants/allSchemas";

/**
 * Schema de validação para o formulário.
 */
export const NewTransactionFormSchema = zod.object({
  description: textSchema,
  price: numberSchema,
  category: textSchema,
});

/**
 * Tipo inferido a partir do schema de validação.
 */
export type TransactionFormSchema = zod.infer<typeof NewTransactionFormSchema>;

export type fieldsTypes = "description" | "price" | "category";
