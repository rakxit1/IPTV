import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { NavigationProp, RouteProp, useRoute } from "@react-navigation/native";
import ErrorModal from "./ErrorModal";
import { useNavigation } from "@react-navigation/native";
import { IPTVStackType } from "./navigation/ParamsTypes";
import { Video, ResizeMode } from "expo-av";

const VideoPlayer = () => {
  const { params } = useRoute<RouteProp<IPTVStackType, "VideoPlayer">>();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const [modalText, setModalText] = useState<string>(
    "Channel will be Played Soon, please Wait....."
  );
  const navigation =
    useNavigation<NavigationProp<IPTVStackType, "VideoPlayer">>();

  const onLoadStart = () => {
    setModalVisible(true);
  };

  const onLoad = () => {
    setModalVisible(false);
    video.current.playAsync();
  };

  const onError = (error: any) => {
    setModalText(
      "Please choose another channel as there is something wrong with this channel..."
    );
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Video
        ref={video}
        onError={onError}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        style={styles.videoContainer}
        source={{
          uri: params.videoUrl,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <ErrorModal
        modalVisible={modalVisible}
        handleModalClose={handleModalClose}
        modalText={modalText}
      />
    </View>
  );
};

export default VideoPlayer;
