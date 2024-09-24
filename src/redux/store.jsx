import {
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import basketReducers from "./reducer/basketReducer";

const topluReducer = combineReducers({
  basketReducers: basketReducers,
});

export const store = createStore(topluReducer);
