import counterSlice from "./counter.slice";

const { increment, decrement, incrementByAmount, decrementByAmount, reset } =
  counterSlice.actions;
export { increment, decrement, incrementByAmount, decrementByAmount, reset };
