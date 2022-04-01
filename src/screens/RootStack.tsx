import React, {useEffect} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {MapScreen} from 'screens/Map';
import MainTab from './MainTab';
import Auth from './Auth';

import {useRecoilValue} from 'recoil';
import {authState, isLoading} from 'recoil/atoms';
import {Loading} from '@/components/common';
import {useKakaoAuthActions} from 'hooks';

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParams>;

const Stack = createNativeStackNavigator<RootStackParams>();

function RootStack() {
  const auth = useRecoilValue(authState);
  const isLodingState = useRecoilValue(isLoading);
  const {getKakaoLoginInfo} = useKakaoAuthActions();

  useEffect(() => {
    getKakaoLoginInfo();
  }, [isLodingState]);

  if (!isLodingState) {
    return <Loading />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {auth ? (
        <>
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen name="Map" component={MapScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
