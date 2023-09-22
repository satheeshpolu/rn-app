import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';
import { NavigationProp } from '@react-navigation/native';

type ScreenProps = {
  navigation: NavigationProp<any, any>;
};
const LoginScreen = ({ navigation }: ScreenProps): JSX.Element => {
  const sendTo = () => {
    navigation.navigate('Note');
  };

  const sendToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Login App" onPress={sendToLogin} />
      <Button title="Notes App" onPress={sendTo} />
    </View>
  );
};

export default LoginScreen;
