import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./App.css";

import FirstHomePage from "./components/homepage/FirstHomePage.js";
import Model3Hero from "./components/buy/model3/Model3Hero.js";
import Login from "./components/login/Login.js";
import Register from "./components/login/Register";
import Model3Main from "./components/homepage/Model3Main.js";
import Model3Exterior from "./components/buy/model3/Model3Exterior.js";
import MainProfile from "./components/profile/MainProfile.js";

import { registerUser, loginUser, verifyUser } from "./services/api_helper.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    // if (this.state.password === this.state.password_digest) {
    console.log("they match!");
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push("/");
    } else {
      this.setState({ errorText: currentUser.errorMessage });
      console.log(this.state.errorMessage);
    }
    // } else {
    //   console.log("they don't match");
    // }
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => <FirstHomePage currentUser={this.state.currentUser} />}
        />
        <Route exact path="/model3/design" render={() => <Model3Hero />} />
        {/* <Route
          exact
          path="/model3/design/exterior"
          component={Model3Exterior}
        /> */}
        <Route exact path="/model3" render={() => <Model3Main />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route
          exact
          path="/register"
          render={() => <Register handleRegister={this.handleRegister} />}
        />
        <Route exact path="/profile" render={() => <MainProfile />} />
      </div>
    );
  }
}

export default withRouter(App);
