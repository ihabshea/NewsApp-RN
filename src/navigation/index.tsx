import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home.screen';
import Settings from '../screens/Settings/Settings.screen';

import Article from '../screens/Article/Article.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return <Icon name={'ios-home'} size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
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
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Article" component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
