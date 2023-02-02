import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Incture!!",
    };
  }
  render() {
    const onChangeMessage = () => {
      this.setState({
        message: 'Thanks for Subscribing!!'
      })
    };

    return (
      <div>
        <h1>{this.state.message} !!</h1>
        <button onClick={onChangeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default Welcome;
