import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import FirstHomePage from "./components/homepage/FirstHomePage.js";
import BuyModel3 from "./components/buy/BuyModel3.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={FirstHomePage} />
        <Route exact path="/OrderModel3" component={BuyModel3} />
      </div>
    );
  }
}

export default App;
