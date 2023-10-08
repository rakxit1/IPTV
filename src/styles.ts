import { StyleSheet } from "react-native";

export default StyleSheet.create({
  flex_one: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  LoadermainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  iptvImageView: {
    paddingTop: 100,
    alignItems: "center",
    margin: 50,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.5,
    borderRadius: 20,
    overflow: "hidden",
  },
  iptvMainView: {
    flex: 1,
    backgroundColor: "black",
  },
  iptvButtons: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#ffe7ff",

    shadowColor: "#463cab",
    shadowOpacity: 0.7,
    backgroundColor: "black",
    shadowOffset: {
      height: 10,
      width: 0,
    },
    justifyContent: "center",
  },
  iptvButtonText: {
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  imageStyle: { height: 300, width: 300 },
  channelLists: {
    height: 50,
    justifyContent: "center",
    borderWidth: 1,
    //This used to be the first time UI
    // borderColor: '#ffe7ff',
    // shadowColor: '#463cab',
    // shadowOpacity: 1,
    // shadowOffset: {
    //   width: 5,
    //   height: 8,
    // },
    // backgroundColor: 'black',
  },
  channelText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 19,
  },
  mainContainer: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  activityIndicator: {
    position: "absolute",
    alignSelf: "center",
  },
  sideBySide: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  centeredModalView: {
    position: "absolute",
    alignSelf: "center",
  },
  modalMainView: {
    margin: 20,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "#ffe7ff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOpacity: 10,
    shadowColor: "#463cab",
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },

  headerMainComp: {
    height: 80,
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  flex_row_Just: { flexDirection: "row", justifyContent: "space-between" },
  flex_row: { flexDirection: "row" },
  paddingH_10: { paddingHorizontal: 10 },

  searchCompMainView: {
    height: 70,
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
  },
  searchTextInput: {
    backgroundColor: "#202020",
    color: "#fff",
    borderRadius: 5,
    width: "85%",
    height: 40,
    borderWidth: 1,
    padding: 10,
  },

  searchIcon: {
    padding: 10,
    backgroundColor: "#fe644b",
    borderRadius: 10,
    overflow: "hidden",
    marginLeft: 10,
    alignSelf: "center",
  },
  linearGradient: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  heightWidhtFifty: { height: 50, width: 50 },
  tagLine: {
    color: "gray",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
  },
  noSearchFoundMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  noSearchCenteredView: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  padding_15: { padding: 15 },
  noResultFoundText: { color: "gray", paddingBottom: 10, alignSelf: "center" },
  noResultMatchDesc: { color: "gray", alignSelf: "center" },
  clearFilterButtonView: {
    backgroundColor: "#fe614b",
    borderRadius: 10,
    margin: 20,
  },
  clearFilterText: {
    color: "white",
    margin: 8,
    fontWeight: "bold",
    fontSize: 18,
  },
  allSectionMainView: {
    flex: 1,
    backgroundColor: "black",
  },
  allSectionVideoContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "black",
  },

  category: {
    height: 60,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  channelListLinearGradient: {
    height: 100,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    borderColor: "white",
    backgroundColor: "#22242e",
  },
  linearGradientChannelText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 19,
  },
  allSectionVieoStyle: {
    height: 120,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    margin: 10,
    borderRadius: 20,
  },
  channelDetailsItemText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
  },
  categoryText: { color: "white", fontWeight: "bold", fontSize: 20 },
  loadingActivityIndicator: {
    alignSelf: "center",
    position: "absolute",
    top: "20%",
    left: "50%",
  },

  blackMainView: {
    flex: 1,
    backgroundColor: "black",
  },
  channelName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
  },
  description: {
    fontWeight: "500",
    color: "white",
    marginTop: 20,
  },
  secondaryDescription: {
    fontWeight: "500",
    color: "white",
    marginTop: 20,
  },
  backNavIcon: {
    backgroundColor: "#fe644b",
    marginTop: 10,
    marginLeft: 10,
    position: "absolute",
    borderRadius: 15,
    overflow: "hidden",
    alignSelf: "flex-start",
    top: 0,
    left: 0,
  },
  descriptionImageStyle: {
    height: "50%",
    width: "100%",
    alignSelf: "center",
    zIndex: -1,
    backgroundColor: "white",
  },

  channelLogo: {
    height: 50,
    width: 80,
    alignSelf: "center",
  },
  blankView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  noSearchView: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  channelDetailsName: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 19,
    marginLeft: 20,
  },
  loadMoreIndicatorStyle: {
    marginBottom: 50,
  },
  width_105: {
    width: "105%",
  },
  channelDetailsItemView: {
    width: "95%",
    height: 90,
    borderRadius: 10,
    justifyContent: "center",
    paddingRight: 10,
  },
});