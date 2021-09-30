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

export const filterMaxPrice = (MaxVal) => {
  return {
    type: t.FILTER_MAX_PRICE,
    payload: {
      MaxVal: MaxVal,
    },
  };
};

export const filterMinPrice = (minVal) => {
  return {
    type: t.FILTER_MIN_PRICE,
    payload: {
      minVal: minVal,
    },
  };
};

export const clearFilterProduct = () => {
  return {
    type: t.CLEAR_FILTER_PRODUCT,
  };
};
