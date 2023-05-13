import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';

type ScreenProps = {
  navigation: NavigationProp<any, any>;
};
const HomeScreen = ({ navigation }: ScreenProps): JSX.Element => {
  const sendTo = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Go To Login" onPress={sendTo} />
      <Avatar.Icon size={50} icon="folder" />
    </View>
  );
};

export default HomeScreen;
