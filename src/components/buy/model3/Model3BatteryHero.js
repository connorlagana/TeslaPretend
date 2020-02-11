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
          <div id="rangeDiv" className="leftModel3BottomItem">
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
        <h1>Select Your Car</h1>
        <button>IDK WHAT TO PUT HERE LOL</button>
      </div>
    </div>
  );
};

export default Model3Buy;
