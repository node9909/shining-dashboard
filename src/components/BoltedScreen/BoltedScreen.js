import React from "react";

const Edges = ({ side, n }) => (
  <div className="screen__border__edge-group">
    {Array(n)
      .fill(`screen__border__edge--${side} e-`)
      .map((baseClassName, i) => (
        <div className={`${baseClassName}${i + 1}`} />
      ))}
  </div>
);

const BoltedScreen = props => {
  return (
    <div className="screen__container">
      <div className="screen__background">
        <div className="screen__border">
          <Edges side="top" n={5} />
          <Edges side="left" n={5} />
          <Edges side="right" n={5} />
          <Edges side="bot" n={5} />
          <div className="screen__display">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default BoltedScreen;
