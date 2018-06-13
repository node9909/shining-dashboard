import React from "react";

const getStyle = deg => ({
  transform: `rotate(${deg}deg)`
});

const Line = props => {
  return (
    <div
      style={getStyle(props.angle)}
      className={`indicator__line line--${props.lineStyle}`}
    />
  );
};

Line.defaultProps = {
  lineStyle: "dotted",
  angle: 0
};

export default Line;
