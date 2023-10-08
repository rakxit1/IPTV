import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { IPTVStackType } from "./navigation/ParamsTypes";
import { IPTVIMAGEURL } from "./config";

const Intro = () => {
  const { navigate } = useNavigation<NavigationProp<IPTVStackType, "Intro">>();
  const handlePressIPTVButton = () => {
    navigate("MainScreen");
  };
  return (
    <>
      <View style={styles.iptvMainView}>
        <View style={styles.iptvImageView}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: IPTVIMAGEURL,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.iptvButtons}
          onPress={handlePressIPTVButton}
        >
          <Text style={styles.iptvButtonText}>Get Started with IPTV!!!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Intro;
