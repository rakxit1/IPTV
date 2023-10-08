import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/Ionicons";
Icon.loadFont();

import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { StackForChannelDescriptionInterface } from "../navigation/ParamsTypes";

const ChannelDescription = () => {
  const { params } =
    useRoute<
      RouteProp<StackForChannelDescriptionInterface, "ChannelDescription">
    >();
  const country = params.flagData;
  const channel = params.data;
  const navigation =
    useNavigation<
      NavigationProp<StackForChannelDescriptionInterface, "ChannelDescription">
    >();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.blackMainView}>
      <TouchableOpacity onPress={goBack}>
        <Icon
          name="ios-chevron-back"
          color="white"
          size={30}
          style={styles.backNavIcon}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: channel?.logo }}
        resizeMode="stretch"
        style={styles.descriptionImageStyle}
      />
      <Text style={styles.channelName}>
        {channel?.name} {country?.flag}
      </Text>
      <Text style={styles.description}>
        "{channel?.name}" is very renouned channel? in "{channel?.city}". which
        was launched in {channel?.launched}, the network provider has always
        been {channel?.network}, Subdivisions of this particual channel? is
        {channel?.subdivision}.
      </Text>
      <Text style={styles.secondaryDescription}>
        This channel and country has very diverse fanbase, mostly people from{" "}
        {country?.name} watches this channel. Their code of the country is{" "}
        {country?.code}, Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempore in fuga delectus esse. Ad nemo, alias provident adipisci
        sequi nisi architecto, voluptatibus placeat delectus quis exercitationem
        impedit. Quo, laboriosam nulla!
      </Text>
    </View>
  );
};

export default ChannelDescription;
