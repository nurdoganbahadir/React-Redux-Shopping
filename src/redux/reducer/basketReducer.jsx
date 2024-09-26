import {
  ADD_TO_BASKET,
  DICREASE_PRODUCT,
  INCREASE_PRODUCT,
  REMOVE_BASKET,
} from "../type";

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
    case DICREASE_PRODUCT:
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // Quantity 0 veya daha düşükse ürünü kaldır
      };

    case REMOVE_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload.id), // Ürünü sepetten çıkar
      };

    default:
      return state;
  }
}
