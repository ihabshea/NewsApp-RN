import React, {useCallback, useEffect, useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import linking from '../linking/linking';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home.screen';
import Settings from '../screens/Settings/Settings.screen';
import {RootState} from '../stores/reducers';

import Article from '../screens/Article/Article.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, connect} from 'react-redux';
import i18n from '../i18n';
import {ThemeReducerType} from '../stores/reducers/Theme';
import {RootStackParamList} from '../types';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const mapStateToProps = (state: RootState) => {
  return {
    languageReducer: state.languageReducer,
    themeReducer: state.themeReducer,
  };
};
const HomeTabs = ({themeReducer}: {themeReducer: ThemeReducerType}) => {
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

const MainNavigation = ({themeReducer}: {themeReducer: ThemeReducerType}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  let language = useSelector((reducer: RootState) => reducer.languageReducer);
  const isDark = themeReducer.theme === 'dark';
  let theme = isDark ? DarkTheme : DefaultTheme;
  useEffect(() => {
    i18n.changeLanguage(language.language);
    setLoaded(true);
  }, [language]);
  return (
    <NavigationContainer linking={linking} theme={theme}>
      {loaded && (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeTabsWithState} />
          <Stack.Screen name="Article" component={Article} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
const mapPropsToStateNav = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapPropsToStateNav)(MainNavigation);
