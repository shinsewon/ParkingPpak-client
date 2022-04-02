import {useRecoilValue} from 'recoil';
import {kakaoAuthState} from 'recoil/atoms';

export default function useKakaoUser() {
  const auth = useRecoilValue(kakaoAuthState);
  return auth;
}
