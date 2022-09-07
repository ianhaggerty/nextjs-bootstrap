import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store.config";

export const count = (state: RootState) => state.counter.value;
export const countSquared = createSelector(count, (count) => count * count);
