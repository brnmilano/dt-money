import * as zod from "zod";

/**
 *  Schema de validação para o formulário.
 */
export const SearchFormSchema = zod.object({
  query: zod.string(),
});

/**
 * Tipo inferido a partir do schema de validação.
 */
export type SearchFormSchemaProps = zod.infer<typeof SearchFormSchema>;
