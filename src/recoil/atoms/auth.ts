import {atom} from 'recoil';

export interface KakaoAuthUser {
  scopes: string[];
  refreshTokenExpiresAt: Date;
  accessTokenExpiresAt: Date;
  refreshToken: string;
  accessToken: string;
}

export const authState = atom<KakaoAuthUser | null>({
  key: 'kakaoAuthState',
  default: null,
});

export const isLoading = atom<boolean>({
  key: 'isLoading',
  default: true,
});
