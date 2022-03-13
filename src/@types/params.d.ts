export {};

declare global {
  type RootStackParams = {
    MainTab: undefined;
    Auth: undefined;
  };

  type AuthStackParams = {
    Login: undefined;
    Register: undefined;
  };

  type MainTabParams = {
    Home: undefined;
    Map: undefined;
    Setting: undefined;
  };
}
