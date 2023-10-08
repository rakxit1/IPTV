import { ChannelDetailsInfoInterface, CountryFlagInterface } from "../config";

export type AuthStackTypes = {
  Login: undefined;
  SignUp: undefined;
  Forgot_Password: undefined;
};

export type AppStackTypes = {
  TopTabNav: undefined;
  Search: undefined;
  AboutStack: undefined;
};

export type NavigationType = {
  AppStack: undefined;
  AuthStack: undefined;
  IPTVStack: undefined;
  CRUDOpearations: undefined;
  TestDebugger: undefined;
};

export type AboutStackType = {
  Details: undefined;
  UserInfo: undefined;
  Theme: undefined;
};

export type TopTabNavType = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
  Fourth: undefined;
  Fifth: undefined;
};

export type IPTVStackType = {
  Intro: undefined;
  MainScreen: undefined;
  ChannelList: undefined;
  VideoPlayer: { videoUrl: string };
};

export type StackForChannelDescriptionInterface = {
  ChannelDetailsInfo: undefined;
  ChannelDescription: {
    data: ChannelDetailsInfoInterface | undefined;
    flagData: CountryFlagInterface | undefined;
  };
};

export type IPTVCategoryTopTabInterface = {
  All: undefined;
  ChannelsDetails: {
    screen: string;
    params?: {
      data: ChannelDetailsInfoInterface | undefined;
      flagData: CountryFlagInterface | undefined;
    };
  };
  ChannelList: undefined;
};
