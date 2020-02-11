import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";



import FirstHomePage from "./components/homepage/FirstHomePage.js";
import Model3Battery from "./components/buy/model3/Model3Battery.js";

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
      </div>
    );
  }
}

export default App;
