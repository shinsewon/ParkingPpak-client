import React, {useEffect} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import {MapStack} from '@/screens/Map';
import {SearchScreen} from '@/screens/Search';
import Auth from './Auth';
import {useRecoilValue} from 'recoil';
import {kakaoAuthState, isLoading} from 'recoil/atoms';
import {Loading} from '@/components/common';
import {useKakaoAuthActions} from 'hooks';

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParams>;

const Stack = createNativeStackNavigator<RootStackParams>();

function RootStack() {
  // 인증기능을 구현하기전까진 이렇게하고 쓰면 어떨까요?
  // const auth = useRecoilValue(kakaoAuthState);
  const auth = true;
  const isLodingState = useRecoilValue(isLoading);
  const {getKakaoLoginInfo} = useKakaoAuthActions();

  useEffect(() => {
    if (isLodingState) {
      getKakaoLoginInfo();
    }
  }, [isLodingState]);

  if (isLodingState) {
    return <Loading />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {auth ? (
        <>
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen
            name="Map"
            component={MapStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <Stack.Screen name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
