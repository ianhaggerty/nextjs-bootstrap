import { combineReducers } from "@reduxjs/toolkit";
import counter from "../features/counter/counterSlice";

export default combineReducers({
  counter,
});
