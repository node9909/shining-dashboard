import React from "react";
import Circle from './Circle';
import Line from './Line';
import PieSlice from './PieSlice';
import Overlay from '../Overlay';

// import "./Speedometer.css";
/* TODO:
  2. Overlay component for both <Readout /> text and dis

  1. Best bet is probably to make separate child components
  For each speedometer feature off the top of my head
  [x] Circle props(borderType, children, full/half, position)
  [x] Line props(borderType, angle)
  [x] PieSlice props(percentage, ~children~)
*/

const Speedometer = props => {
  const style = {
    width: props.size,
    height: props.size
  };
  return (
    <div className="speedometer__container">
      <div className="speedometer__border" style={style}>
        <div className="speedometer">
          {props.lines.filter((_, i) => i % 2 === 0).map(degToLine)}
          {props.withPie && <PieSlice angle={90} style={{ top: '50%' }}/>}
          {!props.withPie && <Circle borderStyle="solid">
            <Circle borderStyle="dashed">
              <Circle>
                <Overlay text="OOOO" bordered />
                {props.lines.filter((_, i) => i % 2 !== 0).map(degToLine)}
              </Circle>
            </Circle>
          </Circle>}
        </div>
      </div>
    </div>
  );
};

const degToLine = (lineDeg, offset = 0) => <Line angle={lineDeg} />;

Speedometer.defaultProps = {
  cicles: [],
  size: "3em",
  lines: [45, 90, 135, 180, 225, 270, 325, 360]
};

export default Speedometer;
