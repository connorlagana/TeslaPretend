import React, { Component } from "react";

import whitePng from "../../../images/colors/white.png";
import redPng from "../../../images/colors/red.png";
import bluePng from "../../../images/colors/blue.png";
import blackPng from "../../../images/colors/black.png";
import grayPng from "../../../images/colors/gray.png";

import defaultTire from "../../../images/model3/tires/defaultModel3Tires.png";
import premiumTire from "../../../images/model3/tires/premiumModel3Tires.png";

class Model3Battery extends Component {
  render() {
    return (
      <div>
        <div className="model3BatteryHero">
          <div className="leftModel3Hero">
            <div className="leftModel3Upper">
              <img src={this.props.pic} />
            </div>
            <div id="leftModel3Bottom">
              <div id="rangeDiv">
                <h1>{this.props.range}mi</h1>
                <p>Range</p>
              </div>
              <div id="dividerDiv" />
              <div id="rangeDiv">
                <h1>{this.props.topSpeed}mph</h1>
                <p>Top Speed</p>
              </div>
              <div id="dividerDiv" />
              <div id="rangeDiv">
                <h1>{this.props.ohSix}s</h1>
                <p>0-60 mph</p>
              </div>
            </div>
          </div>
          <div className="rightModel3Hero">
            <div className="toggleSwitchClass">
              <h1>Select Your Car</h1>
              {/* <h6>TOGGLE HERE</h6> */}
            </div>
            <div className="driveTypeDiv">
              <div className="rearWheelDiv">
                <h3>Rear-Wheel Drive</h3>
                <button id="interiorButton">Partial Premium Interior</button>
                <button
                  className="typeButton"
                  id={this.props.firstType}
                  value="Standard Range Plus"
                  name="battery"
                  onClick={this.props.changeActiveButton}
                >
                  <p>Standard Range Plus</p>
                  <p>$33,690*</p>
                </button>
              </div>
              <div className="rearWheelDiv">
                <h3>Dual Motor All-Wheel Drive</h3>
                <button id="interiorButton">Premium Interior</button>
                <button
                  className="typeButton"
                  id={this.props.secondType}
                  value="Long Range"
                  name="battery"
                  onClick={this.props.changeActiveButton}
                >
                  <p>Long Range</p>
                  <p>$42,690*</p>
                </button>
                <button
                  className="typeButton"
                  id={this.props.thirdType}
                  value="Performance"
                  name="battery"
                  onClick={this.props.changeActiveButton}
                >
                  <p>Performance</p>
                  <p>$50,690*</p>
                </button>
                <div id="learnMorePar">
                  * Costs above include potential incentives and gas savings of
                  $6,300. <div id="learnMoreText">Learn More</div>
                </div>
              </div>
              <div>
                <div id="selectColor">Select Color</div>
                <div>
                  <button
                    onClick={this.props.changeActiveButton}
                    value="White"
                    name="color"
                  >
                    <img src={whitePng} id="colorInd" />
                  </button>
                  <button
                    onClick={this.props.changeActiveButton}
                    value="Red"
                    name="color"
                  >
                    <img src={redPng} id="colorInd" />
                  </button>
                  <button
                    onClick={this.props.changeActiveButton}
                    value="Blue"
                    name="color"
                  >
                    <img src={bluePng} id="colorInd" />
                  </button>
                  <button
                    onClick={this.props.changeActiveButton}
                    value="Black"
                    name="color"
                  >
                    <img src={blackPng} id="colorInd" />
                  </button>
                  <button
                    onClick={this.props.changeActiveButton}
                    value="Gray"
                    name="color"
                  >
                    <img src={grayPng} id="colorInd" />
                  </button>
                </div>
              </div>
              <div id="dividerDivExterior" />
              <div className="wheelsModel3Div">
                <div id="selectColor">Select Wheels</div>
                <div>
                  <img src={defaultTire} id="colorInd" />
                  <img src={premiumTire} id="colorInd" />
                </div>
              </div>
            </div>
            <button
              onClick={e => {
                e.preventDefault();
                this.props.addCarToGarage(this.props);
              }}
            >
              Add Car
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Model3Battery;
