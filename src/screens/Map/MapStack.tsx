import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import MapScreen from './MapScreen';
import ListScreen from './ListScreen';

export type MapStackNavigationProps = NativeStackNavigationProp<MapStackParams>;

const Stack = createNativeStackNavigator<MapStackParams>();

export default function MapStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MapPage">
      <Stack.Screen name="MapPage" component={MapScreen} />
      <Stack.Screen name="ListPage" component={ListScreen} />
    </Stack.Navigator>
  );
}
