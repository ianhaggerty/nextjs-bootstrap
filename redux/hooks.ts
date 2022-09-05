import {
  useDispatch as useRRDispatch,
  useSelector as useRRSelector,
} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = useRRDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useRRSelector;
