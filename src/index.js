import React from "react";
import { render } from "react-dom";
// import Readout from "./components/Readout";
// import BoltedScreen from "./components/BoltedScreen";
// import { Keyboard, Key } from "./components/Keyboard";
// import DialPanel from "./components/DialPanel";
// import Speedometer from "./components/Speedometer";
// import Overlay from "./components/Overlay";
// import { ToggleSwitch, EmergencySwitch } from "./components/Switches";
import './styles/index.css';
import Equalizer from "./dashboards/Equalizer";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "60%",
  minHeight: '1em',
};

const App = () => (
  <div>
    <Equalizer />
  </div>
);

render(<App />, document.getElementById("root"));
/*
<div style={{ ...styles, width: '250px'}}>
      <BoltedScreen>
        <Overlay className="readout__text l-align pl-1" text="Loading..." />
        <Readout />
      </BoltedScreen>
    </div>
    <div style={styles}>
      <div style={styles}>
        <Speedometer />
        <Speedometer />
        <Speedometer withPie />
      </div>
    </div>
    <div style={styles}>
      <ToggleSwitch />
    </div>
    <div style={{width: '3em', ...styles}}>
      <EmergencySwitch><Key /></EmergencySwitch>
    </div>
    <div style={styles}>
      <DialPanel n={4} />
      <div style={{ marginRight: "0", width: '220px' }}>
        <Keyboard />
      </div>
    </div>
*/