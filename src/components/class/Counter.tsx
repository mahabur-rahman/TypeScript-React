import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

// the count value is 5
export class CounterClass extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
        <br />
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
