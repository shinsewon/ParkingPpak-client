import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeScreen} from 'screens/Home';
import {MapStack} from 'screens/Map';
import Setting from '../Setting';

type MainTabNavigationProps = BottomTabNavigationProp<MainTabParams>;

const Tab = createBottomTabNavigator<MainTabParams>();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: 'yellow'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon size={size} color={color} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon size={size} color={color} name="map" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon size={size} color={color} name="test" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
