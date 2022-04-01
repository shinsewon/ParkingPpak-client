import {useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSetRecoilState} from 'recoil';
import {KakaoAuthUser, authState, isLoading} from 'recoil/atoms';

export default function useKakaoAuthActions() {
  const setKakaoUser = useSetRecoilState(authState);
  const setIsLoading = useSetRecoilState(isLoading);

  return useMemo(
    () => ({
      loginKakao: async (user: KakaoAuthUser) => {
        try {
          await AsyncStorage.setItem('user', JSON.stringify(user));
          setKakaoUser(user);
        } catch {
          throw new Error('Fail to save userInfo');
        }
      },
      logout: async () => {
        try {
          await AsyncStorage.removeItem('user');
          setKakaoUser(null);
        } catch {
          throw new Error('Fail to remove user');
        }
      },
      getKakaoLoginInfo: async () => {
        try {
          const user = await AsyncStorage.getItem('user');
          if (user) {
            setKakaoUser(JSON.parse(user));
          }
          setTimeout(() => setIsLoading(true), 2000);
        } catch {
          throw new Error('Fail to get kakao login Info');
        }
      },
    }),
    [setKakaoUser, setIsLoading],
  );
}
