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

const standardWhite19 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W39B,$PPSW,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const standardBlack19 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W39B,$PBSB,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const standardGray19 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W39B,$PMNG,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const standardBlue19 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W39B,$PPSB,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";
const standardRed19 =
  "https://static-assets.tesla.com/configurator/compositor?&options=$W39B,$PPMR,$DV2W,$MT308,$IN3B2&view=STUD_3QTR&model=m3&size=1441&bkba_opt=1&version=v0027d202002181552&version=v0027d202002181552.jpg";

class Model3Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "name",
      battery: "Standard Range Plus",
      color: "White",
      interior: "Black",
      wheel: "18",
      autopilot: true,
      price: 39990,
      image: standardWhite18,
      range: 250,
      topSpeed: 140,
      ohSix: 5.3
    };
  }

  changeStateFromButton = async e => {
    const { name, value } = e.target;
    await this.setState({ [name]: value });
    console.log(this.state, name, value);
    if (this.state.battery === "Standard Range Plus") {
      this.setState({
        range: 250,
        topSpeed: 140,
        ohSix: 5.3,
        price: 39990
      });

      if (this.state.color === "White") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardWhite18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardWhite19
          });
        }
      } else if (this.state.color === "Black") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardBlack18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardBlack19
          });
        }
      } else if (this.state.color === "Red") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardRed18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardRed19
          });
        }
      } else if (this.state.color === "Gray") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardGray18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardGray19
          });
        }
      } else if (this.state.color === "Blue") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardBlue18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardBlue19
          });
        }
      }
    } else if (this.state.battery === "Long Range") {
      this.setState({
        range: 322,
        topSpeed: 145,
        ohSix: 4.4,
        price: 48990
      });

      if (this.state.color === "White") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardWhite18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardWhite19
          });
        }
      } else if (this.state.color === "Black") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardBlack18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardBlack19
          });
        }
      } else if (this.state.color === "Red") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardRed18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardRed19
          });
        }
      } else if (this.state.color === "Gray") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardGray18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardGray19
          });
        }
      } else if (this.state.color === "Blue") {
        if (this.state.wheel === "18") {
          this.setState({
            image: standardBlue18
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: standardBlue19
          });
        }
      }
    } else if (this.state.battery === "Performance") {
      this.setState({
        range: 299,
        topSpeed: 162,
        ohSix: 3.2,
        price: 56990
      });

      if (this.state.color === "White") {
        if (this.state.wheel === "18") {
          this.setState({
            image: performanceWhite,
            wheel: "20"
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: performanceWhite,
            wheel: "20"
          });
        }
      } else if (this.state.color === "Black") {
        if (this.state.wheel === "18") {
          this.setState({
            image: performanceBlack,
            wheel: "20"
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: performanceBlack,
            wheel: "20"
          });
        }
      } else if (this.state.color === "Red") {
        if (this.state.wheel === "18") {
          this.setState({
            image: performanceRed,
            wheel: "20"
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: performanceRed,
            wheel: "20"
          });
        }
      } else if (this.state.color === "Gray") {
        if (this.state.wheel === "18") {
          this.setState({
            image: performanceGray,
            wheel: "20"
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: performanceGray,
            wheel: "20"
          });
        }
      } else if (this.state.color === "Blue") {
        if (this.state.wheel === "18") {
          this.setState({
            image: performanceBlue,
            wheel: "20"
          });
        } else if (this.state.wheel === "19") {
          this.setState({
            image: performanceBlue,
            wheel: "20"
          });
        }
      }
    }
  };

  addCarToGarage = () => {
    console.log("hola");
    postCar(this.props.garageId, this.state);
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
            changeActiveButton={this.changeStateFromButton}
            addCarToGarage={this.addCarToGarage}
          />
        </Route>
        <Route path="/exterior">
          <Model3Exterior
            image={this.state.image}
            changeActiveButtonColor={this.changeStateFromButton}
          />
        </Route>
        {/* <Model3Footer price={this.state.price} /> */}
      </div>
    );
  }
}

export default Model3Hero;
