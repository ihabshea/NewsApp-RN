import React from 'react';
import MainNavigation from './src/navigation';
import { store } from './src/stores';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
enableScreens();
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};



export default App;
