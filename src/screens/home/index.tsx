import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import CustomTile from '../../atoms/custom-tile';
import { TouchableRipple } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/translations/i18n';

type ScreenProps = {
  navigation: NavigationProp<any, any>;
};
const HomeScreen = ({ navigation }: ScreenProps): JSX.Element => {
  const { t } = useTranslation();

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
    <I18nextProvider i18n={i18n}>
      <View style={styles.container}>
        <CustomTile
          title={t('login-app')}
          subTitle={t('screen')}
          iconName={'account-circle'}
          iconSize={32}
          onClick={() => sendToLogin()}
        />
        <CustomTile
          title={t('notes-app')}
          subTitle={t('screen')}
          iconName={'note-text-outline'}
          iconSize={32}
          onClick={() => sendToNote()}
        />
        <CustomTile
          title={t('profile-app')}
          subTitle={t('screen')}
          iconName={'account-details-outline'}
          iconSize={32}
          onClick={() => sendToProfile()}
        />
      </View>
    </I18nextProvider>
  );
};

export default HomeScreen;
