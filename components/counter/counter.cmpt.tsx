import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import { ButtonGroup } from "@mui/material";

import { useState } from "react";

import connector from "./counter.connect";
import type { PropsFromRedux } from "./counter.connect";

interface Props extends PropsFromRedux {}

export function Counter({
  count,
  countSquared,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
}: Props) {
  const [amount, setAmount] = useState(1);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Count: {count}</Typography>
      <Typography variant="h4">Squared: {countSquared}</Typography>

      <ButtonGroup sx={{ m: 2 }}>
        <Button onClick={() => increment()}>Increment</Button>
        <Button onClick={() => decrement()}>Decrement</Button>
      </ButtonGroup>

      <Slider
        aria-label="Amount"
        defaultValue={1}
        getAriaValueText={() => amount + ""}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        onChange={(_, value) => setAmount(value as number)}
        value={amount}
      />
      <ButtonGroup sx={{ m: 2 }}>
        <Button variant="contained" onClick={() => incrementByAmount(amount)}>
          Increment by {amount}
        </Button>
        <Button variant="contained" onClick={() => decrementByAmount(amount)}>
          Decrement by {amount}
        </Button>
      </ButtonGroup>
      <Button variant="contained" color="error" onClick={() => reset()}>
        Reset
      </Button>
    </Container>
  );
}

export default connector(Counter);
