import React, { Component } from "react";
import "./App.css";
import FirstHomePage from "./components/homepage/FirstHomePage.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <FirstHomePage />
      </div>
    );
  }
}

export default App;
