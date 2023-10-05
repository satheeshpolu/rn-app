import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import { formtDate } from '../../utils/utils';
import styles from './styles';

type ComponentProps = {
  data: string;
  onConfirm?: () => void;
};

const CustomCard = ({ data, onConfirm }: ComponentProps) => {
  const onDeleteConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  return (
    <View style={styles.container}>
      <Card.Title
        style={styles.cardStyle}
        title={data?.note_title}
        subtitle={data?.note_description}
        left={props => <Avatar.Icon {...props} icon="note" />}
        right={props => (
          <>
            <Text style={{ paddingRight: 5 }}>
              {formtDate(data?.created_at)}{' '}
            </Text>
            <Button
              icon="delete"
              children={undefined}
              onPress={() => onDeleteConfirm()}
              textColor={'red'}
            />
          </>
        )}
      />
    </View>
  );
};

export default CustomCard;
