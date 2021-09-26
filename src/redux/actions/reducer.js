import * as t from "./types";

const DefaultState = {
  dataCategory: [],
  dataProduct: [],
};

const DataReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case t.SET_DATA_CATEGORY:
      return {
        ...state,
        dataCategory: action.payload,
      };

    case t.SET_DATA_PRODUCT:
      return {
        ...state,
        dataProduct: action.payload,
      };

    default:
      return state;
  }
};

export default DataReducer;
