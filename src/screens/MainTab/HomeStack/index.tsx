import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

export type RootStackNavigationProps =
  NativeStackNavigationProp<HomeStackParams>;

const Stack = createNativeStackNavigator<HomeStackParams>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
