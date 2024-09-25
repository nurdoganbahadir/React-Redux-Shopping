import { ADD_TO_BASKET, INCREASE_PRODUCT } from "../type";

const initialState = {
  basket: [],
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      // Sepette aynı id'ye sahip ürün olup olmadığını kontrol et
      const exists = state.basket.some((item) => item.id === action.payload.id);

      // Eğer aynı id'ye sahip bir ürün varsa, state'i değiştirme
      if (exists) {
        return state;
      }
      return { basket: [...state.basket, { ...action.payload, quantity: 1 }] };
    case INCREASE_PRODUCT:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    default:
      return state;
  }
}
