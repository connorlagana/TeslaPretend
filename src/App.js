import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import FirstHomePage from "./components/homepage/FirstHomePage.js";
import Model3Battery from "./components/buy/model3/Model3Battery.js";
import Login from "./components/login/Login.js";
import Register from "./components/login/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={FirstHomePage} />
        <Route exact path="/model3/design/battery" component={Model3Battery} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
