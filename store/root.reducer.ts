import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter/counter.reducer";

export default combineReducers({
  counter,
});
