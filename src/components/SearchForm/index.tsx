import { MagnifyingGlass } from "phosphor-react";
import { Button } from "../Form/Button";
import styles from "./styles.module.scss";

export default function SearchForm() {
  return (
    <form className={styles.container}>
      <input placeholder="Busque uma transação" />

      <Button theme="secondary">
        <MagnifyingGlass size={20} />
        
        Buscar
      </Button>
    </form>
  );
}
