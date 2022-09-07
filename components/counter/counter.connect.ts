import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../../store/counter/counter.actions";
import { count, countSquared } from "../../store/counter/counter.selectors";

import type { ConnectedProps } from "react-redux";
export type PropsFromRedux = ConnectedProps<typeof connector>;

const mapState = createStructuredSelector({
  count,
  countSquared,
});

const mapDispatch = {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
};

const connector = connect(mapState, mapDispatch);

export default connector;
