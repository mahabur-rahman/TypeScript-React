import { useReducer } from "react";

// for state
type CounterState = {
  count: number;
};

// for action
type CounterAction = {
  type: string;
  payload: number;
};

const initialState = {
  count: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

export const Counter = () => {
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
    </>
  );
};
