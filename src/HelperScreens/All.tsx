import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles";
import { Video, ResizeMode } from "expo-av";
import Icon from "react-native-vector-icons/Feather";
Icon.loadFont();

import { FlashList } from "@shopify/flash-list";
import HeaderNavToTab from "../HelperComp/HeaderNavToTab";
import {
  TenChannelDetailsForAllSection,
  ChannelDetailsInfoInterface,
  CountryFlagInterface,
  channelCountry,
  channelStreaming as channelsURL,
  InitDataInterface,
  initialVideoUrl,
  videoUrlStateInterface,
} from "../config";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { useIsFocused } from "@react-navigation/native";
import { colorAccToIndex } from "../helpers/helpers";
import { IPTVCategoryTopTabInterface } from "../navigation/ParamsTypes";

const All = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [countryData, setCountryData] = useState<CountryFlagInterface[]>([]);
  const [channelList, setChannelList] = useState<InitDataInterface[]>([]);
  const [channelURL, setChannelURL] = useState<videoUrlStateInterface>({
    uri: initialVideoUrl,
    type: "m3u8",
  });
  const [videoControl, setVideoControl] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const [status, setStatus] = React.useState({});

  const fetchData = async () => {
    const flagResp = await fetch(channelCountry);
    const flagData = await flagResp.json();
    const resp = await fetch(channelsURL);
    const data = await resp.json();
    const filteredHundredData = data
      .filter((item: { status: string }) => item.status === "online")
      .slice(0, 10);

    setChannelList(filteredHundredData);
    setCountryData(flagData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onLoadStart = () => {
    setLoader(true);
  };

  const { navigate } =
    useNavigation<NavigationProp<IPTVCategoryTopTabInterface, "All">>();

  const onLoad = () => {
    setLoader(false);
    setVideoControl(true);
    video.current.playAsync();
  };

  const onError = (error: any) => {
    setLoader(false);
    Alert.alert("there is error", error);
  };

  const renderChannelDetailsItems = ({
    item,
  }: {
    item: ChannelDetailsInfoInterface;
  }) => {
    const flagData = countryData.find((e) => {
      if (e.code === item.country) {
        return e;
      }
    });
    return (
      <View style={styles.allSectionVieoStyle}>
        <TouchableOpacity
          onPress={() => {
            navigate("ChannelsDetails", {
              screen: "ChannelDescription",
              params: {
                data: item,
                flagData,
              },
            });
          }}
        >
          <Image
            source={{ uri: item.logo }}
            style={styles.channelLogo}
            resizeMode="stretch"
          />
          <Text style={styles.channelDetailsItemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderChannelList = ({
    item,
    index,
  }: {
    item: InitDataInterface;
    index: number;
  }) => {
    const channelName = item.channel.slice(0, -3);
    return (
      <>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          style={styles.channelListLinearGradient}
          colors={colorAccToIndex(index)}
        >
          <TouchableOpacity
            onPress={() => {
              setChannelURL({ uri: item.url, type: "m3u8" });
              setVideoControl(false);
            }}
          >
            <View style={styles.sideBySide}>
              <Text style={styles.linearGradientChannelText}>
                {channelName}
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </>
    );
  };

  const video = React.useRef(null);

  return (
    <>
      <ScrollView style={styles.allSectionMainView}>
        {isFocused && (
          <Video
            ref={video}
            onError={onError}
            onLoad={onLoad}
            style={styles.allSectionVideoContainer}
            onLoadStart={onLoadStart}
            source={{ uri: channelURL.uri }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        )}

        <HeaderNavToTab
          headingText="ChannelList"
          onPressComp={() => {
            navigate("ChannelList");
          }}
        />
        <FlatList
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={channelList}
          renderItem={renderChannelList}
          keyExtractor={(_item, index) => index.toString()}
        />

        <HeaderNavToTab
          headingText="ChannelDetails"
          onPressComp={() => {
            navigate("ChannelsDetails", { screen: "ChannelDetailsInfo" });
          }}
        />
        <FlashList
          bounces={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={TenChannelDetailsForAllSection}
          renderItem={renderChannelDetailsItems}
          estimatedItemSize={10}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
      {loader && (
        <ActivityIndicator
          size={"large"}
          color="red"
          style={styles.loadingActivityIndicator}
        />
      )}
    </>
  );
};

export default All;
