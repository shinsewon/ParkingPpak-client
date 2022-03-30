export {};

declare global {
  type RootStackParams = {
    MainTab: undefined;
    Auth: undefined;
    Map: undefined;
  };

  type AuthStackParams = {
    Login: undefined;
    Register: undefined;
  };

  type MainTabParams = {
    Home: undefined;
    Setting: undefined;
  };

  type HomeStackParams = {
    Home: undefined;
    Map: undefined;
  };
}
