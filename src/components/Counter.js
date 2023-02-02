import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  render() {
    //When you have to update the state based on the prevState, send an arrow function as the parameter to set state and not stateObject directly
    // const onClickIncrementCounter = () => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // };

    const onClickIncrementCounter = () => {
      this.setState(
        (prevState) => ({
          count: prevState.count + 1,
        }),
        //callback function to get the current state value. setState is asynchronous.
        () => {
          console.log(this.state.count);
        }
      );
    };

    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={onClickIncrementCounter}>Increment</button>
      </div>
    );
  }
}

export default Counter;
