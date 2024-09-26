import { ADD_CATEGORY } from "../type";


const initialState = {
  category: [],
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CATEGORY:
      return { category: payload };
    default:
      return state;
  }
};