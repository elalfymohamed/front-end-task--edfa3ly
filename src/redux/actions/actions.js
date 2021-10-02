import * as t from "./types";

export const setDataCategory = (data) => {
  return {
    type: t.SET_DATA_CATEGORY,
    payload: data,
  };
};

export const setDataProducts = (data) => {
  return {
    type: t.SET_DATA_PRODUCT,
    payload: data,
  };
};

export const filterProductsByState = (star) => {
  return {
    type: t.FILTER_PRODUCT_BY_STAR,
    payload: {
      star: star,
    },
  };
};

export const filterProductsByColor = (color) => {
  return {
    type: t.FILTER_PRODUCT_BY_COLOR,
    payload: {
      color: color,
    },
  };
};

export const cleanFilterProduct = () => {
  return {
    type: t.CLEAN_FILTER_PRODUCT,
  };
};

export const filterPrices = (minVal, maxVal) => {
  return {
    type: t.FILTER_PRICE,
    payload: {
      minVal: minVal,
      maxVal: maxVal,
    },
  };
};
