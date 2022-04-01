import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeStack from './HomeStack';
import {SettingStack} from 'screens/MainTab/SettingStack';

const Tab = createBottomTabNavigator<MainTabParams>();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'yellow',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon size={size} color={color} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon size={size} color={color} name="account-circle" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
