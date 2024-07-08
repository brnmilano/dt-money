import { Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import styles from "./styles.module.scss";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
}

export default function Modal(props: ModalProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <button>Edit profile</button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Edit profile</Dialog.Title>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Name
              </Text>
              <TextField.Root
                defaultValue="Freja Johnsen"
                placeholder="Enter your full name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email
              </Text>
              <TextField.Root
                defaultValue="freja@example.com"
                placeholder="Enter your email"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <button>Cancel</button>
            </Dialog.Close>
            <Dialog.Close>
              <button>Save</button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
