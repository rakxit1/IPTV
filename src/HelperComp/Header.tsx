import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles";
import { IPTV_LOGO } from "../assets";

const Header = () => {
  return (
    <View style={styles.headerMainComp}>
      <View style={styles.flex_row}>
        <Image source={IPTV_LOGO} style={styles.heightWidhtFifty} />
        <Text style={styles.tagLine}>See What's Next !!!</Text>
      </View>
    </View>
  );
};

export default Header;
