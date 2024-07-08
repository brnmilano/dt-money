import { Button } from "../../Form/Button";
import Logo from "../../../../public/logo.png";
import Container from "../../Container/Container";
import styles from "./styles.module.scss";
import { useState } from "react";
import DialogModal from "../../Modal";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

          <Button onClick={handleOpen}>Nova transação</Button>

          <DialogModal handleClose={handleClose} isOpen={open} />
        </div>
      </Container>
    </div>
  );
}
