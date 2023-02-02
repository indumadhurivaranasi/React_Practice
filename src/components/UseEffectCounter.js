import React, { useState, useEffect } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  },[count]);

  // first parameter in useEffect hook is a function which executes after each render of the component.
  // second parameter in useeffect hook is an array of values that the hook depends on.
  // In the above example, the useEffect should execute only when the count value is changed and not on other state updates.
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default UseEffectCounter;
