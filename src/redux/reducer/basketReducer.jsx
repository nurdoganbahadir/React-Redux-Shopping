import { ADD_TO_BASKET } from "../type";

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
      return { basket: [...state.basket, action.payload] };
    default:
      return state;
  }
}
