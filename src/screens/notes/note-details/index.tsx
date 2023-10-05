import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { NavigationProp, useRoute } from '@react-navigation/native';
import { Button, Divider, List } from 'react-native-paper';
import styles from './styles';
import { formtDate } from '../../../utils/utils';

type ComponentProps = {
  navigation: NavigationProp<any, any>;
};

const NoteDetailsScreen = ({ navigation }: ComponentProps): JSX.Element => {
  const route = useRoute();
  const noteDetails = route?.params;
  return (
    <View style={styles.container}>
      <List.Item
        title="Id"
        right={props => <Text>{noteDetails?.note_id}</Text>}
      />
      <List.Item
        title="Title"
        right={props => <Text>{noteDetails?.note_title}</Text>}
      />
      <List.Item
        title="Description"
        right={props => <Text>{noteDetails?.note_description}</Text>}
      />
      <List.Item
        title="Created at"
        right={props => <Text>{formtDate(noteDetails?.created_at)}</Text>}
      />
    </View>
  );
};

export default NoteDetailsScreen;
