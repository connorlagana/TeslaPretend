import React, { Component } from "react";

import defaultModel3 from "../../../images/model3/defaultModel3.png";
import performanceModel3 from "../../../images/model3/performanceModel3.png";
import Model3Footer from "./Model3Footer.js";

class Model3Buy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pic: defaultModel3,
      selectedBattery: 0,
      price: 39990,
      range: 250,
      topSpeed: 140,
      ohSix: 5.3,
      firstType: "activate",
      secondType: "",
      thirdType: ""
    };
  }

  changeActiveButton = async e => {
    await this.setState({
      selectedBattery: e.target.value
    });
    if (this.state.selectedBattery == 0) {
      this.setState({
        pic: defaultModel3,
        price: 39990,
        range: 250,
        topSpeed: 140,
        ohSix: 5.3,
        firstType: "activate",
        secondType: "",
        thirdType: ""
      });
    } else if (this.state.selectedBattery == 1) {
      this.setState({
        pic: defaultModel3,
        price: 48990,
        range: 322,
        topSpeed: 145,
        ohSix: 4.4,
        firstType: "",
        secondType: "activate",
        thirdType: ""
      });
    } else if (this.state.selectedBattery == 2) {
      this.setState({
        pic: performanceModel3,
        price: 56990,
        range: 299,
        topSpeed: 162,
        ohSix: 3.2,
        firstType: "",
        secondType: "",
        thirdType: "activate"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="model3BatteryHero">
          <div className="leftModel3Hero">
            <div className="leftModel3Upper">
              <img src={this.state.pic} />
            </div>
            <div id="leftModel3Bottom">
              <div id="rangeDiv">
                {/* <h1>{this.state.range}mi</h1> */}
                <div id="digitsToChange">
                  <div>
                    <span class="animate" id="digit1">
                      1 2 3 4 5 6 7 8 9 0
                    </span>
                  </div>
                  <div>
                    <span class="animate" id="digit2">
                      1 2 3 4 5 6 7 8 9 0
                    </span>
                  </div>
                  <div>
                    <span class="animate" id="digit3">
                      1 2 3 4 5 6 7 8 9 0
                    </span>
                  </div>
                  <div>mi</div>
                </div>
                <p>Range</p>
              </div>
              <div id="dividerDiv" />
              <div id="rangeDiv">
                <h1>{this.state.topSpeed}mph</h1>
                <p>Top Speed</p>
              </div>
              <div id="dividerDiv" />
              <div id="rangeDiv">
                <h1>{this.state.ohSix}s</h1>
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
                <h3>Rear-Wheel Drive</h3>
                <button id="interiorButton">Partial Premium Interior</button>
                <button
                  className="typeButton"
                  id={this.state.firstType}
                  value={0}
                  onClick={this.changeActiveButton}
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
                  id={this.state.secondType}
                  value={1}
                  onClick={this.changeActiveButton}
                >
                  <p>Long Range</p>
                  <p>$42,690*</p>
                </button>
                <button
                  className="typeButton"
                  id={this.state.thirdType}
                  value={2}
                  onClick={this.changeActiveButton}
                >
                  <p>Performance</p>
                  <p>$50,690*</p>
                </button>
                <div id="learnMorePar">
                  * Costs above include potential incentives and gas savings of
                  $6,300. <div id="learnMoreText">Learn More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Model3Footer price={this.state.price} />
      </div>
    );
  }
}

export default Model3Buy;
