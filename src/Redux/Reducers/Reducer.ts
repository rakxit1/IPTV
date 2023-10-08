export interface initialStateInterface {
  theme: string;
  searchtext: string;
}

const initialState: initialStateInterface = {
  theme: "light",
  searchtext: "",
};

export default (
  state = initialState,
  action: { type: string; value: number }
) => {
  switch (action.type) {
    case "SEARCH_TEXT":
      return {
        ...state,
        searchText: action.value,
      };
    default:
      return state;
  }
};
