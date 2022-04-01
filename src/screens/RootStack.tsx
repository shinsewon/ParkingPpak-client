import React, {useEffect, useState} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
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

type RootStackProps = {
  auth: boolean;
};

function RootStack() {
  // const [auth, setAuth] = useRecoilState<boolean>(isLoginCheck);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const auth = useRecoilValue(authState);
  const isLodingState = useRecoilValue(isLoading);
  // const navigation = useNavigation<RootStackNavigationProps>();
  const {getKakaoLoginInfo} = useKakaoAuthActions();

  useEffect(() => {
    // (async () => {
    //   const user = await AsyncStorage.getItem('user');
    //   if (user) {
    //     setAuth(true);
    //     setKakaoUser({user: JSON.parse(user)});
    //   } else {
    //     setAuth(false);
    //   }
    //   setTimeout(() => setIsLoading(false), 2000);
    // })();
    getKakaoLoginInfo();
  }, [isLodingState]);

  console.log('auth>>', auth);
  console.log('isLodingState>>', isLodingState);

  if (!isLodingState) {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={isLogin ? 'MainTab' : 'Auth'}
    >
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
