import React from "react";
import Key from "./Key";

const KeyboardRow = ({ row }) => (
  <div className="keyboard__row">
    {row.map((style) => (
        <Key style={style} />
      ))
    }
  </div>
);
const DEFAULT_ROW = Array(10).fill({});
KeyboardRow.defaultProps = { row: DEFAULT_ROW };

const Keyboard = () => {
  return (
    <div className="keyboard__container">
      <div className="keyboard">
        <KeyboardRow />
        <KeyboardRow row={[{ width: "3.6em" }, ...Array(8).fill({})]} />
        <KeyboardRow row={[{ width: "3.6em" }, ...Array(6).fill({}), { width: "3.6em" }]} />
      </div>
    </div>
  );
};

export default Keyboard;
