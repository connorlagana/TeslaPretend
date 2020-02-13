import React, { Component } from "react";

import whitePng from "../../../images/colors/white.png";
import redPng from "../../../images/colors/red.png";
import bluePng from "../../../images/colors/blue.png";
import blackPng from "../../../images/colors/black.png";
import grayPng from "../../../images/colors/gray.png";

import defaultTire from "../../../images/model3/tires/defaultModel3Tires.png";
import premiumTire from "../../../images/model3/tires/premiumModel3Tires.png";

class Model3Exterior extends Component {
  render() {
    return (
      <div>
        <div className="model3BatteryHero">
          <div className="leftModel3Hero">
            <div className="leftModel3Upper">
              <img src={this.props.pic} />
            </div>
          </div>
          <div className="rightModel3Hero exterior">
            <div>
              <div id="selectColor">Select Color</div>
              <div>
                <img src={whitePng} id="colorInd" />
                <img src={redPng} id="colorInd" />
                <img src={bluePng} id="colorInd" />
                <img src={blackPng} id="colorInd" />
                <img src={grayPng} id="colorInd" />
              </div>
            </div>
            <div id="dividerDivExterior" />
            <div className="wheelsModel3Div">
              <div id="selectColor">Select Wheels</div>
              <img src={defaultTire} id="colorInd" />
              <img src={premiumTire} id="colorInd" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Model3Exterior;
