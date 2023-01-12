import React from "react";
import { Text } from "react-native";
import Button from "../../components/Button";
import { Dialog as PDialog, Portal } from "react-native-paper";

type Props = {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

const Dialog = ({ visible, title, message, onClose }: Props) => {
  return (
    <Portal>
      <PDialog visible={visible} onDismiss={onClose}>
        <PDialog.Title>{title}</PDialog.Title>
        <PDialog.Content>
          <Text>{message}</Text>
        </PDialog.Content>
        <PDialog.Actions>
          <Button onPress={onClose}>Done</Button>
        </PDialog.Actions>
      </PDialog>
    </Portal>
  );
};

export default Dialog;
