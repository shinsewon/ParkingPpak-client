import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

export type AuthStackNavigationProps =
  NativeStackNavigationProp<AuthStackParams>;

const Stack = createNativeStackNavigator<AuthStackParams>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
