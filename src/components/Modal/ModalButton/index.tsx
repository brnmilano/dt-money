import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import styles from "./styles.module.scss";

interface ModalButtonProps {
  handleOptionChoice: (option: string) => void;
}

export default function ModalButtons(props: ModalButtonProps) {
  const { handleOptionChoice } = props;

  return (
    <div className={styles.container}>
      <button onClick={() => handleOptionChoice("Entrada")}>
        <ArrowCircleUp size={22} />
        Entrada
      </button>

      <button onClick={() => handleOptionChoice("Saída")}>
        <ArrowCircleDown size={22} />
        Saída
      </button>
    </div>
  );
}
