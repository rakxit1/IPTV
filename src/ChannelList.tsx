import {
  ActivityIndicator,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from "recyclerlistview";
import {
  channelStreaming as channelsURL,
  channelCountry,
  InitDataInterface,
  CountryFlagInterface,
} from "./config";
import styles from "./styles";
import NoSearchFound from "./HelperComp/NoSearchFound";
import { IPTVStackType } from "./navigation/ParamsTypes";

const ChannelList = () => {
  const [data, setData] = useState<InitDataInterface[]>([]);
  const [searchData, setSearchData] = useState<InitDataInterface[]>([]);
  const [countryData, setCountryData] = useState<CountryFlagInterface[]>([]);
  const [addHundredMore, SetAddHundredMore] = useState<number>(100);
  const [loadMoreLoading, setLoadMoreLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { navigate } =
    useNavigation<NavigationProp<IPTVStackType, "ChannelList">>();
  const reduxStore = useSelector((state: any) => state.Reducer);

  const searchText = reduxStore.searchText;

  const getData = () => {
    return searchText ? searchData : data;
  };

  const fetchData = useCallback(async () => {
    const resp = await fetch(channelsURL);
    const flagResp = await fetch(channelCountry);
    const data = await resp.json();
    const flagData = await flagResp.json();
    const filteredHundredData = data
      .filter((item: { channel: string }) => item.channel !== "")
      .slice(0, addHundredMore);
    setTimeout(() => {
      setData(filteredHundredData);
      setCountryData(flagData);
      setLoading(false);
      setLoadMoreLoading(false);
    }, 900);
  }, [addHundredMore]);

  useEffect(() => {
    fetchData();
  }, [addHundredMore, fetchData]);

  useEffect(() => {
    const newData = data.filter((item) => {
      const itemData = item.channel
        ? item.channel.toUpperCase()
        : "".toUpperCase();
      const textData = searchText?.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearchData(newData);
  }, [data, searchText]);

  const loadMore = () => {
    setLoadMoreLoading(true);
    setTimeout(() => {
      SetAddHundredMore(addHundredMore + 100);
    }, 2000);
  };

  const handleChannelPress = (item: InitDataInterface) => {
    navigate("VideoPlayer", { videoUrl: item.url });
  };

  const footerComp = () => {
    if (loadMoreLoading) {
      return (
        <View>
          <ActivityIndicator
            size={"large"}
            color="white"
            animating
            style={styles.loadMoreIndicatorStyle}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  const renderItem = (
    _type: string | number,
    data: InitDataInterface,
    _index: number
  ) => {
    const channelName = data?.channel?.slice(0, -3);
    const countryName = data?.channel?.slice(-2).toUpperCase();
    const filterData = countryData.find((value: CountryFlagInterface) => {
      if (value.code === countryName) {
        return value;
      }
    });

    return (
      <View style={styles.mainView}>
        <View style={styles.width_105}>
          <TouchableOpacity
            style={styles.channelLists}
            onPress={() => handleChannelPress(data)}
          >
            <View style={styles.sideBySide}>
              <Text style={styles.channelText}>{channelName}</Text>
              <Text style={styles.channelText}>{filterData?.flag}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const layoutProvider = new LayoutProvider(
    () => 0,
    (type, dim) => {
      switch (type) {
        case 0:
          dim.width = 500;
          dim.height = 70;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    }
  );

  if (loading) {
    return (
      <View style={styles.LoadermainView}>
        <ActivityIndicator size="large" color="#463cab" animating />
      </View>
    );
  }

  return (
    <>
      {getData()?.length > 0 ? (
        <RecyclerListView
          automaticallyAdjustContentInsets={false}
          style={styles.iptvMainView}
          rowRenderer={renderItem}
          dataProvider={new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
            getData()
          )}
          layoutProvider={layoutProvider}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
            refreshControl: (
              <RefreshControl
                refreshing={loading}
                onRefresh={fetchData}
                tintColor={"white"}
              />
            ),
          }}
          renderFooter={footerComp}
          onEndReachedThreshold={0.4}
          onEndReached={loadMore}
        />
      ) : (
        <NoSearchFound />
      )}
    </>
  );
};

export default ChannelList;
