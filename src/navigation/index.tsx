import React, {useCallback, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home.screen';
import Settings from '../screens/Settings/Settings.screen';
import {RootState} from '../stores/reducers';

import Article from '../screens/Article/Article.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, connect} from 'react-redux';
import i18n from '../i18n';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const mapStateToProps = (state: RootState) => {
  return {
    languageReducer: state.languageReducer,
  };
};
const HomeTabs = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name={i18n.t('home')}
          component={Home}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return <Icon name={'ios-home'} size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name={i18n.t('settings')}
          component={Settings}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return <Icon name={'ios-settings'} size={25} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};
const HomeTabsWithState = connect(mapStateToProps)(HomeTabs);
const MainNavigation = () => {
  const [loaded, setLoaded] = useState(false);
  let language = useSelector((reducer: RootState) => reducer.languageReducer);

  useEffect(() => {
    i18n.changeLanguage(language.language);
    setLoaded(true);
  }, [language]);
  return (
    <NavigationContainer>
      {loaded && (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeTabsWithState} />
          <Stack.Screen name="Article" component={Article} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default MainNavigation;
