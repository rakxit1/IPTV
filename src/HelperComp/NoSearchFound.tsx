import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/Feather";
Icon.loadFont();
import { useDispatch } from "react-redux";
import { searchText as seachTextAction } from "../Redux/Actions/Action";

const NoSearchFound = () => {
  const dispatch = useDispatch();

  const handleClearFilterPress = () => {
    dispatch(seachTextAction(""));
  };

  return (
    <View style={styles.noSearchFoundMainView}>
      <View style={styles.noSearchCenteredView}>
        <Icon name="search" size={40} color="gray" style={styles.padding_15} />
        <Text style={styles.noResultFoundText}>No Results found</Text>
        <Text style={styles.noResultMatchDesc}>
          No results match the filter criteria. Remove the filter or clear all
          the filter to show the result
        </Text>
        <TouchableOpacity
          onPress={handleClearFilterPress}
          style={styles.clearFilterButtonView}
        >
          <Text style={styles.clearFilterText}>Clear filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoSearchFound;
