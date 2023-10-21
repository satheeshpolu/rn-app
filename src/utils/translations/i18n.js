import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform, NativeModules } from 'react-native';

const resources = {
  en: { translation: require('./en/screens/home.json') },
  fr: { translation: require('./fr/screens/home.json') },
};
const getDdeviceLanguage = () => {
  const deviceLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;
  return deviceLanguage.split(0, 2);
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: getDdeviceLanguage(),
  fallbackLng: 'en',
  debug: true,
  supportedLngs: ['en', 'fr'],
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
