import React from "react";

const Circle = props => {
  const circleStyle = {
    height: props.size + "%",
    width: props.size + "%",
    borderStyle: props.borderStyle,
    borderWidth: props.borderWidth,
    ...props.style
  };
  return (
    <div style={circleStyle} className="indicator__circle">
      {props.children}
    </div>
  );
};

Circle.defaultProps = {
  size: 80,
  borderStyle: "dotted",
  borderWidth: "1px",
  style: {},
};

export default Circle;
