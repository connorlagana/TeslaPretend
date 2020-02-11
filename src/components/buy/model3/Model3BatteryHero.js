import React from "react";

import defaultModel3 from "../../../images/defaultModel3.png";

const Model3Buy = () => {
  return (
    <div className="model3BatteryHero">
      <div className="leftModel3Hero">
        <div className="leftModel3Upper">
          <img src={defaultModel3} />
        </div>
        <div id="leftModel3Bottom">
          <div id="rangeDiv">
            <h1>250mi</h1>
            <p>Range</p>
          </div>
          <div id="dividerDiv" />
          <div id="topSpeedDiv">
            <h1>140mph</h1>
            <p>Top Speed</p>
          </div>
          <div id="dividerDiv" />
          <div id="060Div">
            <h1>5.3s</h1>
            <p>0-60 mph</p>
          </div>
        </div>
      </div>
      <div className="rightModel3Hero">
        <div className="toggleSwitchClass">
          <h1>Select Your Car</h1>
          {/* <label className="switch">
            <input type="checkbox" focu />
            <span className="slider round"></span>
          </label> */}
          <h6>TOGGLE HERE</h6>
        </div>
        <div className="driveTypeDiv">
          <div className="rearWheelDiv">
            <h3>Rear Wheel Drive</h3>
            <button id="interiorButton">Partial Premium Interior</button>
            <button className="typeButton">Standard Range Plus</button>
          </div>
          <div className="rearWheelDiv">
            <h3>Dual Motor All-Wheel Drive</h3>
            <button id="interiorButton">Premium Interior</button>
            <button className="typeButton">Standard Range Plus</button>
            <button className="typeButton">Standard Range Plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model3Buy;
