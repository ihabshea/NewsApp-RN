import React, {useEffect} from 'react';
import MainNavigation from './src/navigation';
import {store, persistore} from './src/stores';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {getStoredState} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
enableScreens();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
