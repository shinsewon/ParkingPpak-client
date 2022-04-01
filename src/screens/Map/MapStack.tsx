import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MapScreen} from 'screens/Map';

const Stack = createNativeStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Map">
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
