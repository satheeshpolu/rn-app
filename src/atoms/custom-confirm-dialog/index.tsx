import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Dialog, Portal, Snackbar } from 'react-native-paper';
import Icon from 'react-native-paper/lib/typescript/src/components/Icon';
import styles from './styles';

type ComponentProps = {
  title: string;
  type?: 'editProfile' | 'signOut';
  onClose?: () => void;
  onConfirm?: () => void;
};

const CustomConfirmDialog = ({
  title,
  type = 'editProfile',
  onClose,
  onConfirm,
}: ComponentProps) => {
  const [visible, setVisible] = useState(true);

  const onHideDialog = () => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
  };

  const onCloseDialog = () => {
    if (onClose) {
      onClose();
    }
  };

  const onConfirmDialog = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  return (
    // <Portal>
    <Dialog visible={visible} onDismiss={onHideDialog}>
      <Dialog.Content>
        <Text style={styles.title}>{title}</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={() => onCloseDialog()}>Cancel</Button>
        <Button onPress={() => onConfirmDialog()}>
          {type === 'editProfile' ? 'Edit' : 'Sign Out'}
        </Button>
      </Dialog.Actions>
    </Dialog>
    // </Portal>
  );
};

export default CustomConfirmDialog;
