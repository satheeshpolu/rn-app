import React from 'react';
import { Button, View } from 'react-native';

import styles from './styles';
import { NavigationScreenProp } from 'react-navigation';

type ScreenProps = {
  navigation: NavigationScreenProp<any, any>;
};

const LoginScreen = ({ navigation }: ScreenProps) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;
