import { Button } from "../../Button";
import Logo from "../../../../public/logo.png";
import Container from "../../Container/Container";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logoAndName}>
            <div>
              <img src={Logo} />
            </div>

            <h1>DT Money</h1>
          </div>

          <Button placeholder="Nova transação" />
        </div>
      </Container>
    </div>
  );
}
