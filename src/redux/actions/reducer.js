import * as t from "./types";

const DefaultState = {
  dataCategory: [],
  dataProduct: [],
  filterProducts: [],
};

const DataReducer = (state = DefaultState, action) => {
  switch (action.type) {
    // Set Data Category
    case t.SET_DATA_CATEGORY:
      return {
        ...state,
        dataCategory: action.payload,
      };
    // Set Data Product && Set data filterProducts
    case t.SET_DATA_PRODUCT:
      return {
        ...state,
        dataProduct: action.payload,
        filterProducts: action.payload,
      };
    // Filter Star
    case t.FILTER_PRODUCT_BY_STAR:
      return {
        ...state,
        filterProducts: state.dataProduct.filter(
          (product) => product.rating === action.payload.star
        ),
      };
    // Filter color
    case t.FILTER_PRODUCT_BY_COLOR:
      return {
        ...state,

        filterProducts: state.dataProduct.filter(
          (product) => product.color === action.payload.color
        ),
      };
    // Filter price maxVal && minVal
    case t.FILTER_PRICE:
      return {
        ...state,
        filterProducts: state.dataProduct.filter(
          (product) =>
            product.price >= action.payload.minVal &&
            product.price <= action.payload.maxVal
        ),
      };

    // clear filter
    case t.CLEAR_FILTER_PRODUCT:
      return {
        ...state,
        filterProducts: state.dataProduct,
      };

    default:
      return state;
  }
};

export default DataReducer;
