/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RecoilRoot>
            <RootStack />
          </RecoilRoot>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
