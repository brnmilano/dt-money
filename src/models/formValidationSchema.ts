import * as zod from "zod";
import { optionalTextSchema, textSchema } from "../constants/allSchemas";

// Schema de validação para o formulário
export const FormValidationSchema = zod.object({
  cep: textSchema,
  street: textSchema,
  number: textSchema,
  complement: optionalTextSchema,
  district: textSchema,
  city: textSchema,
  uf: textSchema,
});

export type FormSchemaProps = zod.infer<typeof FormValidationSchema>;

export type fieldsTypes =
  | "cep"
  | "street"
  | "number"
  | "complement"
  | "district"
  | "city"
  | "uf";
