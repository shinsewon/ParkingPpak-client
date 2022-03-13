import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import MainTab from './Tab/MainTab';
import Auth from './Auth';

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParams>;

const Stack = createNativeStackNavigator<RootStackParams>();

function RootStack() {
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}

export default RootStack;
