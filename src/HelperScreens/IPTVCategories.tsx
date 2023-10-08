import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { tabCategories, TabCategoriesInterface } from "../config";

// THis was the alternate tab navigation because there was no border radius for active tab navigation so tried tomake this, but now using the indicator style rather than actibe background.

const IPTVCategories = () => {
  const [tabCategoryData, setTabCategoryData] =
    useState<TabCategoriesInterface[]>(tabCategories);

  const renderItem = ({ item }: { item: TabCategoriesInterface }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            tabCategoryData.forEach((data, index) => {
              if (data.id === item.id) {
                tabCategoryData[index].isSelected = true;
              } else {
                tabCategoryData[index].isSelected = false;
              }
            });

            setTabCategoryData([...tabCategoryData]);
          }}
        >
          <Text
            style={[
              styles.flatListText,
              {
                borderRadius: 8,
                overflow: "hidden",
                backgroundColor: item.isSelected === true ? "#fe614b" : "black",
                color: item.isSelected === true ? "white" : "gray",
              },
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: "black",
          paddingVertical: 10,
        }}
      >
        <FlatList
          horizontal
          data={tabCategoryData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

export default IPTVCategories;

const styles = StyleSheet.create({
  flatListText: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
