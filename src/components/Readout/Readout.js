import React from "react";

const LINE_CHARS = "\u2630\u2630\u2630\u2630";
const BACKGROUND_LINES = Array(20)
  .fill(LINE_CHARS)
  .join(" ");
const READOUT_GROUP_KEYS = "abcdef".split("");

const Readout = props => {
  return (
    <div className="readout-container">
      {props.children}
      {READOUT_GROUP_KEYS.map(k => {
        return (
          <div key={k} className="readout">
            {BACKGROUND_LINES}
          </div>
        );
      })}
    </div>
  );
};

export default Readout;
