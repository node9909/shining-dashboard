import React from 'react';
import classNames from 'classnames';
import { Key } from '../Keyboard';

const EmergencySwitch = (props) => {
    const switchClassName = classNames('switch__emergency', {
        'uncovered': props.uncovered
    });
    return (
        <div className="switch__emergency__container">
            <div className="switch__emergency__inner">
                <div className="switch__emergency">
                    <Key className="switch__emergency__btn"/>
                </div>
            </div>
        </div>
    );
};

EmergencySwitch.defaultProps = {
    uncovered: true,
};

export default EmergencySwitch;
