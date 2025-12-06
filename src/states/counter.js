import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <div>You have push the button this {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </>
    );
  }
}
