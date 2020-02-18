import React, { Component } from "react";
import mainHeroNarrow from "../../images/mainHeroNarrow.jpg";
import NavBar from "../nav/NavBar.js";
import CenterConsole from "./CenterConsole.js";

class FirstHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser
    });
  }
  render() {
    return (
      <div>
        <img src={mainHeroNarrow} id="mainHero" />
        <NavBar currentUser={this.state.currentUser} />
        <CenterConsole />
      </div>
    );
  }
}

export default FirstHomePage;
