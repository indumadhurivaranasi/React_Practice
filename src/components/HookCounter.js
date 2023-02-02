import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    //Always pass a function to the setCount Method to update the state which depends on the prevState
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button onClick={clickHandler}>Click to Increment the Counter</button>
      <text>{count}</text>
    </div>
  );
}

export default HookCounter;
