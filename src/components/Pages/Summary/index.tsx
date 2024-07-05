import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import styles from "./styles.module.scss";
import Container from "../../Container/Container";

export default function Summary() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.typeAndValue}>
              <p>Entradas</p>

              <ArrowCircleUp size={32} color="#00875f" />
            </div>

            <h2>R$ 18.900,00</h2>
          </div>

          <div className={styles.card}>
            <div className={styles.typeAndValue}>
              <p>Saídas</p>

              <ArrowCircleDown size={32} color="#f75a68" />
            </div>

            <h2>R$ 18.900,00</h2>
          </div>

          <div className={styles.card}>
            <div className={styles.typeAndValue}>
              <p>Total</p>

              <CurrencyDollar size={32} color="#ffffff" />
            </div>

            <h2>R$ 18.900,00</h2>
          </div>
        </div>
      </Container>
    </div>
  );
}
