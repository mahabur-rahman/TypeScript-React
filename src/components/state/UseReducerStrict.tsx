import { useReducer } from "react";

// for state
type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

// action.type strict mode
type CounterAction = UpdateAction | ResetAction;

const initialState = {
  count: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const UseReducerStrict = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count : {state.count}
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement 5
      </button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
