import React, { Component } from "react";
import "./App.css";
import FirstHomePage from "./components/homepage/FirstHomePage.js";
import NavBar from "./components/nav/NavBar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <FirstHomePage />
        <NavBar />
      </div>
    );
  }
}

export default App;
