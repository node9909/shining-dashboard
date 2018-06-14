import React from 'react';
import classNames from 'classnames'

import { ToggleSwitch } from '../../components/Switches';

const Level = (props) => {
  const levelClassNames = classNames("levels", {
    horizontal: props.horizontal,
  });
  const levelStyle = {
    height: props.height,
    width: props.width,
  };
  const fillStyle = {
    height: props.percent,
  };
  return (
    <div style={levelStyle} className={levelClassNames}>
      <div className="levels__inner">
        <div className="levels__bars" />
        <div style={fillStyle} className="levels__fill" />
      </div>
    </div>
  );
}
Level.defaultProps = {
  height: '1.5rem',
  width: '1rem',
};

class Equalizer extends React.Component {
  renderToggleLevels(key){
    return (
      <div className="flex__column">
        <Level />
        <ToggleSwitch/>
        <div
          className="barcode unreadable c-align txt-blue-m"
          style={{ marginTop: '0.15rem'}}
        >
        {key}
        </div>
      </div>
    )
  }
  render(){
    return (
      <div style={{ padding: '0.5rem'}} className="dashboard--dark">
        <div className="flex__column">
          <div className="flex__row">
            <React.Fragment>
              {Array(3).fill().map((_, i) => this.renderToggleLevels(`0${i}${i*2}`))}
            </React.Fragment>
          </div>
        </div>
      </div>
    )
  }
}

export default Equalizer;
