import React from "react";

const Counter = (props) => {
  const { counter } = props;

  const getValue = () => {
    return counter.count === 0 ? "Zero" : counter.count;
  };

  const getTextCSS = () => {
    return counter.count === 0 ? "btn btn-danger mx-4" : "btn btn-warning mx-4";
  };

  const getDecrBtnCSS = () => {
    return counter.count === 0 ? "btn btn-danger mx-4" : "btn btn-primary mx-4";
  };

  const checkDisabled = () => {
    return counter.count === 0 ? true : false;
  };

  return (
    <div>
      <button
        onClick={() => props.onDecrement(counter.id)}
        className={getDecrBtnCSS()}
        disabled={checkDisabled()}
      >
        Decrement
      </button>
      <span className={getTextCSS()}>{getValue()}</span>
      <button
        onClick={() => props.onIncrement(counter.id)}
        className="btn btn-primary mx-4 my-3"
      >
        Increment
      </button>
      <button
        onClick={() => props.onReset(counter.id)}
        className="btn btn-danger mx-4"
      >
        Reset
      </button>
      <button
        onClick={() => props.onDelete(counter.id)}
        className="btn btn-danger mx-4"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
