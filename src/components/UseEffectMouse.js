import React, { useState, useEffect } from "react";

function UseEffectMouse() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  function logMouseMove(event) {
    setX(event.clientX);
    setY(event.clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", logMouseMove);

    return () => {
      window.removeEventListener("mousemove", logMouseMove);
    };
  }, []);
  //Empty array in useEffect suggests that it will be called only once.
  //return statement is the cleanup function which will be called when the component is removed from the DOM.
  return (
    <div>
      <h4>X:{X}</h4>
      <h4>X:{Y}</h4>
    </div>
  );
}

export default UseEffectMouse;
