export {};

declare global {
  type LoginRequest = {
    email: string;
    password: string;
  };

  type RegisterRequest = {
    name: string;
    email: string;
    password: string;
  };

  type KakaoAuthUser = {
    scopes: string[];
    refreshTokenExpiresAt: Date;
    accessTokenExpiresAt: Date;
    refreshToken: string;
    accessToken: string;
  };
}
