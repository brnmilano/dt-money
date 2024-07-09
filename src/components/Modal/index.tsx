import {
  NewTransactionFormSchema,
  TransactionFormSchema,
} from "../../models/formValidationSchema";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { Input } from "../Form/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../Form/Button";
import { toast } from "react-toastify";
import { TransactionContext } from "../../hooks/useTransactions";
import { useContextSelector } from "use-context-selector";
import ModalButtons from "./ModalButton";
import styles from "./styles.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "#242428",
  color: "#ffffff",
  borderRadius: 2,
  boxShadow: 24,
  p: 5,
};

interface DialogModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function DialogModal(props: DialogModalProps) {
  const { isOpen, handleClose } = props;

  const createTransaction = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createTransaction;
    }
  );

  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TransactionFormSchema>({
    resolver: zodResolver(NewTransactionFormSchema),
    shouldFocusError: false,
    defaultValues: {
      description: "",
      price: 0,
      category: "",
    },
  });

  /**
   * Atualiza o tipo da transação selecionada.
   *
   * @param option O tipo de transação selecionado pelo usuário.
   */
  const handleSelectedTransactionType = (option: string) => {
    setSelectedTransactionType(option);
  };

  /**
   * Cria uma nova transação com os dados obtidos no formulário.
   *
   * @param data Formulário para criação de transações.
   * @returns Se nenhum tipo de transação for selecionado, interrompe a execução e informa ao usuário que é obrigatório selecionar um tipo.
   */
  const handleCreateNewTransaction = async (data: TransactionFormSchema) => {
    if (!selectedTransactionType) {
      toast.warning("Selecione o tipo de transação.");

      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const formattedData = {
      ...data,
      type: selectedTransactionType,
      createdAt: new Date(),
    };

    await createTransaction(formattedData);

    reset();

    handleClose();
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" marginBottom="30px">
            Nova transação
          </Typography>

          <form
            className={styles.formWrapper}
            onSubmit={handleSubmit(handleCreateNewTransaction)}
          >
            <Input
              control={control}
              errors={errors}
              registerField="description"
              placeholder="Descrição"
            />

            <Input
              control={control}
              errors={errors}
              registerField="price"
              placeholder="Preço"
              type="number"
            />

            <Input
              control={control}
              errors={errors}
              registerField="category"
              placeholder="Categoria"
            />

            <ModalButtons handleOptionChoice={handleSelectedTransactionType} />

            <Button
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Cadastrar
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
