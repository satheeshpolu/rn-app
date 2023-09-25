import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Snackbar } from 'react-native-paper';
import Icon from 'react-native-paper/lib/typescript/src/components/Icon';
import styles from './styles';

type ComponentProps = {
  title: string;
  onClose?: () => void;
};

const CustomSnackbar = ({ title, onClose }: ComponentProps) => {
  const [visible, setVisible] = React.useState(true);

  const onDismissSnackBar = () => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Close',
          onPress: () => {
            // Do something
          },
        }}
        >
        {title}
      </Snackbar>
    </View>
  );
};

export default CustomSnackbar;
