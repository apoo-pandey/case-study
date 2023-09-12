import ReducerCart from "./Cart/ReducerCart";
import { createStore, combineReducers } from "redux";

const combineReducerobj = combineReducers({
  cart: ReducerCart,
});

let Store = createStore(combineReducerobj);
export default Store;
