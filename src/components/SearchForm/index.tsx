import {
  SearchFormSchema,
  SearchFormSchemaProps,
} from "../../models/searchFormSchema";
import { MagnifyingGlass } from "phosphor-react";
import { Button } from "../Form/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../../hooks/useTransactions";
import { useContextSelector } from "use-context-selector";
import styles from "./styles.module.scss";

export default function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaProps>({
    resolver: zodResolver(SearchFormSchema),
  });

  /**
   * Realiza a busca de transações com base nos dados do formulário de busca.
   *
   * @param data Dados do formulário de busca, contendo a consulta de busca.
   */
  const handleSearchTransactions = async (data: SearchFormSchemaProps) => {
    await fetchTransactions(data.query);
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input placeholder="Busque uma transação" {...register("query")} />

      <Button type="submit" theme="secondary" loading={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </form>
  );
}
