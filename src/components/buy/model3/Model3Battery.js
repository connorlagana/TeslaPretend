import React, { Component } from "react";

import Model3BatteryHero from "./Model3BatteryHero.js";
import Model3Footer from "./Model3Footer.js";
import Model3Header from "./Model3Header.js";

class Model3Battery extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   battery: 0,
    //   image: 0,
    //   selectedPriceType: 1
    // };
  }
  render() {
    return (
      <div>
        <Model3Header />
        <Model3BatteryHero />
        
      </div>
    );
  }
}

export default Model3Battery;
