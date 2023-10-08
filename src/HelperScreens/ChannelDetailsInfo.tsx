import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from "recyclerlistview";
import {
  channelCountry,
  channelDetailsInfo,
  ChannelDetailsInfoInterface,
  CountryFlagInterface,
} from "../config";
import { useSelector } from "react-redux";
import NoSearchFound from "../HelperComp/NoSearchFound";
import { StackForChannelDescriptionInterface } from "../navigation/ParamsTypes";

const ChannelDetailsInfo = () => {
  const [initLoading, setInitLoading] = useState<boolean>(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState<boolean>(false);
  const [addHundredMore, SetAddHundredMore] = useState<number>(100);
  const [data, setData] = useState<ChannelDetailsInfoInterface[]>([]);
  const [searchData, setSearchData] = useState<ChannelDetailsInfoInterface[]>(
    []
  );
  const [countryData, setCountryData] = useState<CountryFlagInterface[]>([]);
  const reduxStore = useSelector((state: any) => state.Reducer);
  const searchText = reduxStore.searchText;

  const navigation =
    useNavigation<
      NavigationProp<StackForChannelDescriptionInterface, "ChannelDetailsInfo">
    >();

  useEffect(() => {
    const newData = data.filter((item) => {
      const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
      const textData = searchText?.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearchData(newData);
  }, [searchText]);

  useEffect(() => {
    fetchData();
  }, [addHundredMore]);

  const getData = () => {
    return searchText ? searchData : data;
  };

  const fetchData = async () => {
    const resp = await fetch(channelDetailsInfo);
    const flagResp = await fetch(channelCountry);
    const data = await resp.json();
    const flagData = await flagResp.json();
    const filteredHundredData = data
      .filter(
        (item: ChannelDetailsInfoInterface) =>
          item.network &&
          item.subdivision &&
          item.city &&
          item.launched &&
          item.network &&
          item.website !== null
      )
      .slice(0, addHundredMore);
    setTimeout(() => {
      setData(filteredHundredData);
      setCountryData(flagData);
      setInitLoading(false);
      setLoadMoreLoading(false);
    }, 900);
  };

  const loadMore = () => {
    setLoadMoreLoading(true);
    setTimeout(() => {
      SetAddHundredMore(addHundredMore + 100);
    }, 2000);
  };

  const renderItem = (
    _type: string | number,
    data: ChannelDetailsInfoInterface,
    _index: number
  ) => {
    const flagData = countryData.find((e: CountryFlagInterface) => {
      if (e.code === data.country) {
        return e;
      }
    });

    return (
      <View style={styles.mainView}>
        <View style={styles.channelDetailsItemView}>
          <TouchableOpacity
            style={styles.flex_row_Just}
            onPress={() => {
              navigation.navigate("ChannelDescription", {
                data,
                flagData,
              });
            }}
          >
            <View style={styles.flex_row}>
              <Image
                source={{ uri: data.logo }}
                style={styles.channelLogo}
                resizeMode="stretch"
              />
              <Text style={styles.channelDetailsName}>{data?.name}</Text>
            </View>
            <Text style={styles.channelDetailsName}>{flagData?.flag}</Text>
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
          dim.height = 100;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    }
  );

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

  if (initLoading) {
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
          style={styles.blackMainView}
          rowRenderer={renderItem}
          dataProvider={new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
            getData()
          )}
          layoutProvider={layoutProvider}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
            refreshControl: (
              <RefreshControl
                refreshing={initLoading}
                onRefresh={fetchData}
                tintColor={"white"}
              />
            ),
          }}
          onEndReachedThreshold={0.4}
          onEndReached={loadMore}
          renderFooter={footerComp}
        />
      ) : (
        <NoSearchFound />
      )}
    </>
  );
};

export default ChannelDetailsInfo;
