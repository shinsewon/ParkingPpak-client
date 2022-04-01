import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyProfileScreen} from 'screens/MainTab/SettingStack';

const Stack = createNativeStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
    </Stack.Navigator>
  );
}

export default SettingStack;
