import {
  FormSchemaProps,
  FormValidationSchema,
} from "../../models/formValidationSchema";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { Input } from "../Form/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ModalButtons from "./ModalButton";
import { Button } from "../Form/Button";

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

  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("");

  const {
    control,
    //handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaProps>({
    resolver: zodResolver(FormValidationSchema),
    shouldFocusError: false,
    defaultValues: {},
  });

  const handleSelectedTransactionType = (option: string) => {
    setSelectedTransactionType(option);

    console.log(selectedTransactionType);
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" marginBottom="30px">
            Nova transação
          </Typography>

          <Box display="flex" flexDirection="column" gap="25px">
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
            />

            <Input
              control={control}
              errors={errors}
              registerField="category"
              placeholder="Categoria"
            />

            <ModalButtons handleOptionChoice={handleSelectedTransactionType} />

            <Button>Cadastrar</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
