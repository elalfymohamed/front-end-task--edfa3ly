import * as t from "./types";

export const set_data_category = (data) => {
  return {
    type: t.SET_DATA_CATEGORY,
    payload: data,
  };
};

export const set_data_products = (data) => {
  return {
    type: t.SET_DATA_PRODUCT,
    payload: data,
  };
};
