import {atom} from 'recoil';

export const kakaoAauthState = atom<KakaoAuthUser | null>({
  key: 'kakaoAuthState',
  default: null,
});

export const isLoading = atom<boolean>({
  key: 'isLoading',
  default: true,
});
