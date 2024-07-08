import Container from "../../Container/Container";
import SearchForm from "../../SearchForm";
import styles from "./styles.module.scss";

interface TableProps {
  variant?: "income" | "outcome";
}

export default function Table(props: TableProps) {
  const { variant = "income" } = props;

  return (
    <Container>
      <div className={styles.container}>
        <SearchForm />
        
        <table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td
                className={
                  variant === "income" ? styles.income : styles.outcome
                }
              >
                R$ 12.500,00
              </td>
              <td>Venda</td>
              <td>05/07/2024</td>
            </tr>
            <tr>
              <td width="50%">Comida</td>
              <td
                className={
                  variant === "outcome" ? styles.income : styles.outcome
                }
              >
                R$ 50,00
              </td>
              <td>Venda</td>
              <td>05/07/2024</td>
            </tr>
            <tr>
              <td width="50%">Aluguel</td>
              <td
                className={
                  variant === "income" ? styles.income : styles.outcome
                }
              >
                R$ 2.000,00
              </td>
              <td>Venda</td>
              <td>05/07/2024</td>
            </tr>
            <tr>
              <td width="50%">Cartão de crédito</td>
              <td
                className={
                  variant === "outcome" ? styles.income : styles.outcome
                }
              >
                R$ 500,00
              </td>
              <td>Despesa</td>
              <td>05/07/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}
