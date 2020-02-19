import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { postCar } from "../../../services/api_helper.js";

import Model3Battery from "./Model3Battery.js";
import Model3Exterior from "./Model3Exterior.js";
import Model3Header from "./Model3Header.js";
import Model3Footer from "./Model3Footer.js";

const performanceWhite =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W32D,$PPSW,$DV4W,$SLR1,$MT311,$IN3PB&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const performanceBlack =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W32D,$PBSB,$DV4W,$SLR1,$MT311,$IN3PB&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const performanceGray =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W32D,$PMNG,$DV4W,$SLR1,$MT311,$IN3PB&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const performanceBlue =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W32D,$PPSB,$DV4W,$SLR1,$MT311,$IN3PB&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const performanceRed =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W32D,$PPMR,$DV4W,$SLR1,$MT311,$IN3PB&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";

const standardWhite18 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W38B,$PPSW,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const standardBlack18 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W38B,$PBSB,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const standardGray18 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W38B,$PMNG,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const standardBlue18 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W38B,$PPSB,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const standardRed18 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W38B,$PPMR,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";

const standardWhite19 = "";
const standardBlack19 = "";
const standardGray19 = "";
const standardBlue19 = "";
const standardRed19 = "";

class Model3Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {
        name: "Con's Car",
        battery: "Long Range",
        color: "Blue",
        interior: "Black",
        wheel: "19 inch",
        autopilot: true,
        price: 39990,
        image: ""
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
        image:
          "https://static-assets.tesla.com/configurator/compositor?&options=$W38B,$PPSW,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg",

        name: "Con's Car",
        battery: "Standard Range Plus",
        color: "Blue",
        interior: "Black",
        wheel: "19 inch",
        autopilot: true,
        price: 39990,
        image: ""
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
          image:
            "https://static-assets.tesla.com/configurator/compositor?&options=$W39B,$PPSW,$DV4W,$MT310,$IN3PB&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg"
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
          image:
            "https://static-assets.tesla.com/configurator/compositor?&options=$W32D,$PPSW,$DV4W,$SLR1,$MT311,$IN3PB&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552"
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
