import React, { FC } from "react";
import { View } from "react-native";
import Header from "./HelperComp/Header";
import SearchBar from "./HelperComp/SearchBar";
import { IPTVCategoryTopTab } from "./navigation/IPTVStack";
import styles from "./styles";

interface MainScreenInterface {
  children: React.ReactNode;
}

const MainScreen: FC<MainScreenInterface> = ({ children }) => {
  return <View style={styles.flex_one}>{children}</View>;
};

export default () => (
  <MainScreen>
    <Header />
    <SearchBar />
    <IPTVCategoryTopTab />
  </MainScreen>
);
