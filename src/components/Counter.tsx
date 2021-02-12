import { useState } from "react";

export const Counter = () => {
  const initialState: number = 0;
  const [counter, setCounter] = useState(initialState);

  const incrementar = (n: number = initialState): void => {
    setCounter(counter + n);
  };

  return (
    <div className="mt-3">
      <h3>Counter</h3>
      <span>Valor: {counter}</span>
      <br />
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementar(1)}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementar(2)}
      >
        +2
      </button>
      <button
        className="btn btn-outline-danger mt-2"
        onClick={() => setCounter(initialState)}
      >
        Reset
      </button>
    </div>
  );
};
