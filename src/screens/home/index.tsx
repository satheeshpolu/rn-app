import React from 'react';
import {Button, Text, View} from 'react-native';

import styles from './styles';
import {NavigationProp} from '@react-navigation/native';

type ScreenProps = {
  navigation: NavigationProp<any, any>;
};
const HomeScreen = ({navigation}: ScreenProps): JSX.Element => {
  //   const currentTime = new Date().toLocaleTimeString([], {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //   });
  const sendTo = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Go To Login" onPress={sendTo} />
    </View>
  );
};

export default HomeScreen;
