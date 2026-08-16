import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: Math.max(prevState.count - 1, 0),
    }));
  };

  render() {
    return (
      <>
        <h1>Count is: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>

        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}
