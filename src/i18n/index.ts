import i18n from 'i18next';
import {reactI18nextModule} from 'react-i18next';
import {useSelector} from 'react-redux';
import en from './locales';
import ar from './locales';

const resources = {
  en: {
    translation: require('./locales/en'),
  },
  ar: {
    translation: require('./locales/ar'),
  },
};

i18n.init({
  resources,
  lng: 'en',
  debug: true,
  fallbackLng: 'en',
  initImmediate: true,
  supportedLngs: ['en', 'ar'],
});
export default i18n;
