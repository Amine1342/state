import React, { useState } from "react";

const FunctionState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p className="text-info">
        <strong>Function state: {counter}</strong>
      </p>
      <button
        className="text-danger"
        onClick={() => setCounter((prevCounter) => prevCounter + 1)}
      >
        <strong>State dans function: </strong>
      </button>
    </div>
  );
};

export default FunctionState;
