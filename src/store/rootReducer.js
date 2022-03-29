import { combineReducers } from "@reduxjs/toolkit";
import { reducer as businessesReducer } from "src/slices/businesses";

const rootReducer = combineReducers({
  businesses: businessesReducer,
});
export default rootReducer;
