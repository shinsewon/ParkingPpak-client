import {useRecoilValue} from 'recoil';
import {authState} from 'recoil/atoms';

export default function useKakaoUser() {
  const auth = useRecoilValue(authState);
  return auth;
}
