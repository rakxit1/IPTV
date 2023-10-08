import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IPTVStack from "./IPTVStack";

import { NavigationType } from "./ParamsTypes";
import { useSelector } from "react-redux";

const Navigation = () => {
  const reduxState = useSelector((state: any) => state.Reducer);
  const Stack = createStackNavigator<NavigationType>();

  return (
    <NavigationContainer
      theme={reduxState.theme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="IPTVStack" component={IPTVStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
