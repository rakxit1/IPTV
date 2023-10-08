import React from "react";
import { TextInput, View } from "react-native";
import styles from "../styles";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import { searchText } from "../Redux/Actions/Action";
Icon.loadFont();

const SearchBar = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: any) => state.Reducer);
  const setSearchText = (val: string) => {
    dispatch(searchText(val));
  };

  return (
    <View style={styles.searchCompMainView}>
      <View style={styles.flex_row}>
        <TextInput
          style={styles.searchTextInput}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Search IPTV channels Here!"
          value={reduxStore.searchText}
          placeholderTextColor="#797979"
        />
        <Icon name="search" color="white" size={20} style={styles.searchIcon} />
      </View>
    </View>
  );
};

export default SearchBar;
