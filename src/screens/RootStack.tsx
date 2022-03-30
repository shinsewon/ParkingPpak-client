import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {MapScreen} from 'screens/Map';
import MainTab from './MainTab';
import Auth from './Auth';

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParams>;

const Stack = createNativeStackNavigator<RootStackParams>();

type RootStackProps = {
  auth: boolean;
};

function RootStack({auth}: RootStackProps) {
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={auth ? 'MainTab' : 'Auth'}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
