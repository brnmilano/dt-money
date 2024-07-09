import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../../../hooks/useTransactions";
import { dateFormatter, priceFormatter } from "../../../utils/formatters";
import Container from "../../Container/Container";
import SearchForm from "../../SearchForm";
import styles from "./styles.module.scss";

interface TableProps {
  variant?: "income" | "outcome";
}

export default function Table(props: TableProps) {
  const { variant = "income" } = props;

  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

  return (
    <Container>
      <div className={styles.container}>
        <SearchForm />

        <div className={styles.table}>
          <table>
            <tbody>
              {transactions.map((transaction, index) => {
                return (
                  <tr key={`${transaction.id} ${index}`}>
                    <td width="50%">{transaction.description}</td>
                    <td
                      className={
                        variant === transaction.type
                          ? styles.income
                          : styles.outcome
                      }
                    >
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
