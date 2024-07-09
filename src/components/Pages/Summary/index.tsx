import { Box } from "@mui/material";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../../utils/formatters";
import { TransactionContext } from "../../../hooks/useTransactions";
import { useContextSelector } from "use-context-selector";
import styles from "./styles.module.scss";
import Container from "../../Container/Container";
import { useMemo } from "react";

export default function Summary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

  /**
   * A variável summary só vai ser recriada quando o transactions mudar,
   * Antes, era renderizada
   */
  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.price;

          acc.total += transaction.price;
        } else {
          acc.outcome += transaction.price;

          acc.total -= transaction.price;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [transactions]);

  return (
    <Box>
      <Container>
        <Box className={styles.content}>
          <Box className={styles.card}>
            <Box className={styles.typeAndValue}>
              <p>Entradas</p>

              <ArrowCircleUp size={32} color="#00875f" />
            </Box>

            <h2>{priceFormatter.format(summary.income)}</h2>
          </Box>

          <Box className={styles.card}>
            <Box className={styles.typeAndValue}>
              <p>Saídas</p>

              <ArrowCircleDown size={32} color="#f75a68" />
            </Box>

            <h2>{priceFormatter.format(summary.outcome)}</h2>
          </Box>

          <Box className={styles.card}>
            <Box className={styles.typeAndValue}>
              <p>Total</p>

              <CurrencyDollar size={32} color="#ffffff" />
            </Box>

            <h2>{priceFormatter.format(summary.total)}</h2>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
