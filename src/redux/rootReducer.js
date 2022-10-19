import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { iceCreamReducer } from "./icecream/icecreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
