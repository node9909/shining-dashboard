import React from "react";

const Overlay = props => {
  const overlayClassName = `overlay ${
    props.bordered ? "overlay--bordered" : ""
  } ${props.className || ""}`;
  return (
    <div className="overlay__container">
      <div className={overlayClassName}>
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default Overlay;
