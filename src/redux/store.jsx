import { combineReducers, legacy_createStore as createStore } from "redux";

import { productReducer } from "./reducer/productReducer";
import basketReducer from "./reducer/basketReducer";

const topluReducer = combineReducers({
  basketReducer: basketReducer,
  productReducer: productReducer,
});

export const store = createStore(
  topluReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
