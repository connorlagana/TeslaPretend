import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Model3Battery from "./Model3Battery.js";
import Model3Exterior from "./Model3Exterior.js";
import Model3Header from "./Model3Header.js";
import Model3Footer from "./Model3Footer.js";
import defaultModel3 from "../../../images/model3/defaultModel3.png";
import performanceModel3 from "../../../images/model3/performanceModel3.png";

class Model3Hero extends Component {
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
        thirdType: "activate",
        interior: "",
        exterior: ""
      });
    }
  };

  render() {
    return (
      <div>
        <Model3Header />
        {/* <Route path="/">
          <Model3Battery
            pic={this.state.pic}
            range={this.state.range}
            topSpeed={this.state.topSpeed}
            ohSix={this.state.ohSix}
            firstType={this.state.firstType}
            secondType={this.state.secondType}
            thirdType={this.state.thirdType}
            changeActiveButton={this.changeActiveButton}
          />
        </Route> */}
        <Route>
          <Model3Exterior pic={this.state.pic} />
        </Route>
        <Model3Footer price={this.state.price} />
      </div>
    );
  }
}

export default Model3Hero;
