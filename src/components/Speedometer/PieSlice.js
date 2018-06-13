import React from 'react';

const spin = (angle) => {
    return { transform: `rotate(${angle}deg)`};
};

const PieSlice = (props) => {
    return (
        <div style={spin(props.angle)} className="indicator__pie-slice__container">
            <div style={props.style} className="indicator__pie-slice" />
        </div>
    );
};

PieSlice.defaultProps = {
    angle: 0,
    inner: false,
};

export default PieSlice;
