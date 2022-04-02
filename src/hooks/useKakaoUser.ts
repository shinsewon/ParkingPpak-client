import {useRecoilValue} from 'recoil';
import {kakaoAauthState} from 'recoil/atoms';

export default function useKakaoUser() {
  const auth = useRecoilValue(kakaoAauthState);
  return auth;
}
