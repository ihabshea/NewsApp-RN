import React, {useEffect} from 'react';
import MainNavigation from './src/navigation';
import {store, persistore} from './src/stores';
import {Provider, connect} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {getStoredState} from 'redux-persist';
import {WithI18n} from 'react-i18next';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './src/i18n';
enableScreens();
export const LocalizationContext = React.createContext(null);
const App = () => {
  const [locale, setLocale] = React.useState('en');
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );
  return (
    <Provider store={store}>
      <LocalizationContext.Provider value={localizationContext}>
        <PersistGate loading={null} persistor={persistore}>
          <MainNavigation />
        </PersistGate>
      </LocalizationContext.Provider>
    </Provider>
  );
};

export default (App);
