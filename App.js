import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import IPTVStack from "./src/navigation/IPTVStack";

import store from "./src/Redux/Store";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider style={styles.AndroidSafeArea}>
        <Provider store={store}>
          <IPTVStack />
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? 60 : 25,
  },
});
