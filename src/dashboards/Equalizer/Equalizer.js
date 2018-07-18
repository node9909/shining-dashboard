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
  renderToggleLevels(key, level){
    return (
      <div className="flex__column">
        <Level percent={`${level}%`} />
        <ToggleSwitch on/>
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
    const {
      levels,
    } = this.props;
    return (
      <div style={{ padding: '0.15rem'}} className="dashboard--dark">
        <div className="flex__column">
          <div className="flex__row">
            <React.Fragment>
              {levels.map((level, i) => this.renderToggleLevels(`0${i}${i*2}`, level))}
            </React.Fragment>
          </div>
        </div>
      </div>
    )
  }
}

Equalizer.defaultProps = {
  levels: [40, 70, 10],
};

export default Equalizer;
