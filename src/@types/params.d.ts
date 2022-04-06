export {};

declare global {
  type RootStackParams = {
    MainTab: undefined;
    Auth: undefined;
    Map: undefined;
    Search: undefined;
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
    HomePage: undefined;
  };

  type MapStackParams = {
    MapPage: undefined;
    ListPage: undefined;
    DetailPage: undefined;
  };
}
