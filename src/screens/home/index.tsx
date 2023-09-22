import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';
import { NavigationProp } from '@react-navigation/native';

type ScreenProps = {
  navigation: NavigationProp<any, any>;
};
const HomeScreen = ({ navigation }: ScreenProps): JSX.Element => {
  const sendToNote = () => {
    navigation.navigate('Note');
  };

  const sendToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Login App" onPress={sendToLogin} />
      <Button title="Notes App" onPress={sendToNote} />
    </View>
  );
};

export default HomeScreen;
