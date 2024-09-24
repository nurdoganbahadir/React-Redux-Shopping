import { ADD_TO_BASKET } from "../type";

export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product,
});
