import { ADD_TO_BASKET, DICREASE_PRODUCT, INCREASE_PRODUCT } from "../type";

export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product,
});

export const arttir = (id) => ({
  type: INCREASE_PRODUCT,
  payload: { id },
});

export const azalt = (id) => ({
  type: DICREASE_PRODUCT,
  payload: { id },
});
