import React, { Component } from "react";
import mainHeroNarrow from "../../images/mainHeroNarrow.jpg";
import NavBar from "../nav/NavBar.js";
import CenterConsole from "./CenterConsole.js";

class FirstHomePage extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div>
        <img src={mainHeroNarrow} id="mainHero" />
        <NavBar />
        <CenterConsole />
      </div>
    );
  }
}

export default FirstHomePage;
