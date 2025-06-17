import React from "react";

const Counter = () => {
  const handleCounter = () => {
    console.log("Counter clicked");
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleCounter}>Click Me</button>
    </div>
  );
};

export default Counter;