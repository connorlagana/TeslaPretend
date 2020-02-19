import React, { Component } from "react";

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
                  id={this.props.firstType}
                  value={0}
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
                  value={1}
                  onClick={this.props.changeActiveButton}
                >
                  <p>Long Range</p>
                  <p>$42,690*</p>
                </button>
                <button
                  className="typeButton"
                  id={this.props.thirdType}
                  value={2}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Model3Battery;
