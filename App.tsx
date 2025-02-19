/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text} from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const token = await AsyncStorage.getItem('parking-ppak-token');
        if (token) {
          setAuth(true);
        } else {
          setAuth(false);
        }
        setIsLoading(false);
      })();
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{backgroundColor: 'blue', flex: 1}}>
        <Text style={{color: 'white'}}>Loading</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack auth={auth} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
