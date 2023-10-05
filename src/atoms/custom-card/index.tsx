import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { formtDate } from '../../utils/utils';
import styles from './styles';

type ComponentProps = {
  data: string;
};

const CustomCard = ({ data }: ComponentProps) => {
  return (
    <View style={styles.container}>
      <Card.Title
        style={styles.cardStyle}
        title={data?.note_title}
        subtitle={data?.note_description}
        left={props => <Avatar.Icon {...props} icon="note" />}
        right={props => (
          <Text style={{ paddingRight: 5 }}>{formtDate(data?.created_at)}</Text>
        )}
      />
    </View>
  );
};

export default CustomCard;
