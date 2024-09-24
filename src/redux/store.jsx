import { combineReducers, legacy_createStore as createStore } from "redux";
import basketReducers from "./reducer/basketReducer";
import { productReducer } from "./reducer/productReducer";

const topluReducer = combineReducers({
  basketReducers: basketReducers,
  productReducer: productReducer,
});

export const store = createStore(
  topluReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
