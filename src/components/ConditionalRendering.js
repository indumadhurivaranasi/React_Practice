import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Indu</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Indu</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Indu</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Indu</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
  }
}

export default ConditionalRendering;
