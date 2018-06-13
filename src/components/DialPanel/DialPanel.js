import React from "react";
import Dial from "./Dial";

const getDialDirection = n => {
  if (n === 0) {
    return "";
  }
  if (n % 3 === 0) {
    return "nine";
  }
  if (n % 2 === 0) {
    return "three";
  }
  return "nine";
};

const DialPanel = props => {
  return (
    <div className="dial-panel">
      {Array(props.n)
        .fill()
        .map((_, i) => {
          return <Dial direction={getDialDirection(i)} />;
        })}
    </div>
  );
};

export default DialPanel;
