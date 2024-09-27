import { SET_CATEGORIES, SET_CATEGORY } from "../type";

const initialState = {
  categories: [],
  selectedCategory: null,
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return { ...state, category: payload };
    case SET_CATEGORY:
      return { ...state, selectedCategory: payload };
    default:
      return state;
  }
};
