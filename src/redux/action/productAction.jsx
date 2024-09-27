import { SET_CATEGORY, ADD_PRODUCTS, SET_CATEGORIES } from "../type";

export const setProducts = (data) => ({
  type: ADD_PRODUCTS,
  payload: data,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
