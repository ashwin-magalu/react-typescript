import React, { Component } from "react";

type ClassCounterProps = {
  message: string;
};

type ClassCounterState = {
  count: number;
};

// if props is not there, instead of passing propstype, pass {}. EX: <{},ClassCounterState>
export class ClassCounter extends Component<
  ClassCounterProps,
  ClassCounterState
> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
