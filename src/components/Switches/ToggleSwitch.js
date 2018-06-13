import React from 'react';
import classNames from 'classnames';

const ToggleSwitch = (props) => {
    const toggleClassName = classNames("switch__toggle", {
        on: props.on,
        [props.className]: props.className,
    });
    return (
        <div className="switch__toggle__container">
            <div className={toggleClassName} />
        </div>
    );
}
ToggleSwitch.defaultProps = {
    on: false,
    className: '',
};

export default ToggleSwitch;
