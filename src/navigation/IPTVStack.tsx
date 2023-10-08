import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  IPTVCategoryTopTabInterface,
  IPTVStackType,
  StackForChannelDescriptionInterface,
} from "./ParamsTypes";
import { useDispatch } from "react-redux";
import { searchText as setSearchTextBlank } from "../Redux/Actions/Action";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import VideoPlayer from "../VideoPlayer";
import ChannelList from "../ChannelList";
import ChannelDescription from "../HelperScreens/ChannelDescription";
import All from "../HelperScreens/All";
import ChannelDetailsInfo from "../HelperScreens/ChannelDetailsInfo";
import MainScreen from "../MainScreen";
import Intro from "../Intro";

const Tab = createMaterialTopTabNavigator<IPTVCategoryTopTabInterface>();
const Stack = createStackNavigator<IPTVStackType>();
const StackForChannelDescription =
  createStackNavigator<StackForChannelDescriptionInterface>();

export const IPTVCategoryTopTab = () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fe614b",
        tabBarInactiveTintColor: "#9f9f9f",
        tabBarIndicatorStyle: {
          backgroundColor: "#fe614b",
        },
        tabBarLabelStyle: {
          fontSize: 13,
          textTransform: "none",
          alignSelf: "center",
        },
        tabBarItemStyle: {
          width: "auto",
          marginHorizontal: 5,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen name="All" component={All} />
      <Tab.Screen
        name="ChannelsDetails"
        component={ChannelsDetailsStack}
        listeners={() => ({
          tabPress: () => {
            dispatch(setSearchTextBlank(""));
          },
        })}
      />
      <Tab.Screen
        name="ChannelList"
        component={ChannelList}
        listeners={() => ({
          tabPress: () => {
            dispatch(setSearchTextBlank(""));
          },
        })}
      />
    </Tab.Navigator>
  );
};

export const ChannelsDetailsStack = () => {
  return (
    <StackForChannelDescription.Navigator
      screenOptions={{ headerShown: false }}
    >
      <StackForChannelDescription.Screen
        name="ChannelDetailsInfo"
        component={ChannelDetailsInfo}
      />
      <StackForChannelDescription.Screen
        name="ChannelDescription"
        component={ChannelDescription}
      />
    </StackForChannelDescription.Navigator>
  );
};

const IPTVStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="ChannelList" component={ChannelList} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
  );
};

export default IPTVStack;
