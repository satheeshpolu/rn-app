import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import { Avatar, Button, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type ComponentProps = {
  navigation: NavigationProp<any, any>;
};

const ProfileScreen = ({ navigation }: ComponentProps): JSX.Element => {
  const sendTo = () => {
    navigation.navigate('Note');
  };

  const sendToLogin = () => {
    navigation.navigate('Login');
  };

  const signOut = () => {
    console.log('Signout clicked...!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="account-circle-outline" size={64} />
      </View>
      <View style={styles.body}>
        <List.Item
          title="Title"
          right={props => <Text>{'Mr.'}</Text>}
        />
        <List.Item
          title="First Name"
          right={props => <Text>{'Item description'}</Text>}
        />
        <List.Item
          title="Last Name"
          right={props => <Text>{'Item description'}</Text>}
        />
        <List.Item
          title="Email"
          right={props => <Text>{'test@test.com'}</Text>}
        />
        <List.Item
          title="Mobile"
          right={props => <Text>{'+49 123 456 789'}</Text>}
        />
      </View>
      <View style={styles.footer}>
      
        <Button
          icon="arrow-right"
          mode="contained-tonal"
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={() => signOut}>
          Sign Out
        </Button>
      </View>
    </View>
  );
};

export default ProfileScreen;
