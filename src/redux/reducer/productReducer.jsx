import { ADD_PRODUCTS } from "../type";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCTS:
      return { products: payload };
    default:
      return state;
  }
};
