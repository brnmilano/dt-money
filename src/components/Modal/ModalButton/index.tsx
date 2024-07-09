import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import styles from "./styles.module.scss";

interface ModalButtonProps {
  handleOptionChoice: (option: string) => void;
}

/**
 * Componente ModalButtons para seleção de tipo de transação.
 *
 * @param props handleOptionChoice, função que recebe a opção escolhida pelo usuário.
 * @returns `Buttons` para escolha do tipo de transação, sendo eles "income" ou "outcome".
 */
export default function ModalButtons(props: ModalButtonProps) {
  const { handleOptionChoice } = props;

  return (
    <div className={styles.container}>
      <button type="button" onClick={() => handleOptionChoice("income")}>
        <ArrowCircleUp size={22} />
        Entrada
      </button>

      <button type="button" onClick={() => handleOptionChoice("outcome")}>
        <ArrowCircleDown size={22} />
        Saída
      </button>
    </div>
  );
}
