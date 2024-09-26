import { ADD_CATEGORY, ADD_PRODUCTS } from "../type";

export const setProducts = (data) => ({
  type: ADD_PRODUCTS,
  payload: data,
});

export const setCategory = (data) => ({
  type: ADD_CATEGORY,
  payload: data,
});
