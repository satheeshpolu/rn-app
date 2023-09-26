import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import CustomTile from '../../atoms/custom-tile';
import { TouchableRipple } from 'react-native-paper';

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

  const sendToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <CustomTile title={'Login'} subTitle={'Screen'} iconName={'account-circle'} iconSize={32} onClick={() => sendToLogin()}/>
      <CustomTile title={'Notes'} subTitle={'Note App'} iconName={'note-text-outline'} iconSize={32} onClick={() => sendToNote()}/>
      <CustomTile title={'Profile'} subTitle={'Screen'} iconName={'account-details-outline'} iconSize={32} onClick={() => sendToProfile()}/>
    </View>
  );
};

export default HomeScreen;
