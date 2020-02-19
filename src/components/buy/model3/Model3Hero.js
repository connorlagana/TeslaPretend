import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { postCar } from "../../../services/api_helper.js";

import Model3Battery from "./Model3Battery.js";
import Model3Exterior from "./Model3Exterior.js";
import Model3Header from "./Model3Header.js";
import Model3Footer from "./Model3Footer.js";
import regularWhiteModel3 from "../../../images/model3/regular/regularWhiteModel3.png";
import regularBlackModel3 from "../../../images/model3/regular/regularBlackModel3.png";
import regularBlueModel3 from "../../../images/model3/regular/regularBlueModel3.png";
import regularRedModel3 from "../../../images/model3/regular/regularRedModel3.png";
import regularGrayModel3 from "../../../images/model3/regular/regularGrayModel3.png";

import performanceModel3 from "../../../images/model3/performance/performanceModel3.png";

class Model3Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: regularWhiteModel3,
      selectedBattery: 0,
      selectedColor: 0,
      price: 39990,
      range: 250,
      topSpeed: 140,
      ohSix: 5.3,
      firstType: "activate",
      secondType: "",
      thirdType: "",
      garageId: this.props.garageId,
      obj: {
        name: "Con's Car",
        battery: "Long Range",
        color: "Blue",
        interior: "Black",
        wheel: "19 inch",
        autopilot: true,
        price: 39990,
        image: "other.com"
      }
    };
  }

  changeActiveButton = async e => {
    console.log(this.props.garageId);
    await this.setState({
      selectedBattery: e.target.value
    });
    if (this.state.selectedBattery == 0) {
      this.setState({
        image: regularWhiteModel3,
        price: 39990,
        range: 250,
        topSpeed: 140,
        ohSix: 5.3,
        firstType: "activate",
        secondType: "",
        thirdType: "",
        obj: {
          name: "Con's Car",
          battery: "Standard Range Plus",
          color: "Blue",
          interior: "Black",
          wheel: "19 inch",
          autopilot: true,
          price: 39990,
          image: "other.com"
        }
      });
    } else if (this.state.selectedBattery == 1) {
      this.setState({
        image: regularWhiteModel3,
        price: 48990,
        range: 322,
        topSpeed: 145,
        ohSix: 4.4,
        firstType: "",
        secondType: "activate",
        thirdType: "",
        obj: {
          name: "Con's Car",
          battery: "Long Range",
          color: "Blue",
          interior: "Black",
          wheel: "19 inch",
          autopilot: true,
          price: 48990,
          image: "other.com"
        }
      });
    } else if (this.state.selectedBattery == 2) {
      this.setState({
        image: performanceModel3,
        price: 56990,
        range: 299,
        topSpeed: 162,
        ohSix: 3.2,
        firstType: "",
        secondType: "",
        thirdType: "activate",
        interior: "",
        exterior: "",
        obj: {
          name: "Con's Car",
          battery: "Performance",
          color: "Blue",
          interior: "Black",
          wheel: "19 inch",
          autopilot: true,
          price: 56990,
          image: "other.com"
        }
      });
    }
  };

  changeActiveButtonColor = async e => {
    await this.setState({
      selectedColor: e.target.value
    });
    console.log();
    if (this.state.selectedColor == 0 && this.state.selectedBattery <= 1) {
      this.setState({
        image: regularWhiteModel3,
        price: 39990
      });
    } else if (
      this.state.selectedColor == 1 &&
      this.state.selectedBattery <= 1
    ) {
      this.setState({
        image: regularBlackModel3,
        price: 39990
      });
    }
  };

  addCarToGarage = () => {
    postCar(this.state.garageId, this.state.obj);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Model3Header />
        <Route path="/">
          <Model3Battery
            pic={this.state.image}
            range={this.state.range}
            topSpeed={this.state.topSpeed}
            ohSix={this.state.ohSix}
            firstType={this.state.firstType}
            secondType={this.state.secondType}
            thirdType={this.state.thirdType}
            changeActiveButton={this.changeActiveButton}
            addCarToGarage={this.addCarToGarage}
          />
        </Route>
        <Route path="/exterior">
          <Model3Exterior
            image={this.state.image}
            changeActiveButtonColor={this.changeActiveButtonColor}
          />
        </Route>
        {/* <Model3Footer price={this.state.price} /> */}
      </div>
    );
  }
}

export default Model3Hero;
