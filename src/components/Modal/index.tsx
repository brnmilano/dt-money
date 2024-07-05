
import { Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import styles from "./styles.module.scss";

export default function Modal() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <button>Edit profile</button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Make changes to your profile.
          </Dialog.Description>

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
              <button>
                Cancel
              </button>
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
