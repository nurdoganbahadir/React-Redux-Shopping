import { ADD_PRODUCTS } from "../type";

export const setProducts = (data) => ({
  type: ADD_PRODUCTS,
  payload: data,
});
