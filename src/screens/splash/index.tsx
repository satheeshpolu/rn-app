import React from 'react';
import {StatusBar, Text, View} from 'react-native';

import styles from './styles';

const SplashScreen = (): JSX.Element => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.text}>{currentTime}</Text>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
