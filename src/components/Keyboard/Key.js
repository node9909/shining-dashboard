import React from "react";
import classNames from 'classnames';

const Key = props => {
  const keyClassName = classNames('btn-key', {
    [props.className]: props.className,
    backlit: props.backlit
  });
  return (
    <button style={props.style} className={keyClassName}>
      <div className="btn-key__inner">{props.children}</div>
    </button>
  );
};

Key.defaultProps = {
  backlit: false,
};

export default Key;
