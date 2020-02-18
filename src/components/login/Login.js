import React, { Component } from "react";
import loginPic from "../../images/loginPic.jpg";
import loginPic2 from "../../images/loginPic2.jpg";

import {
  registerUser,
  loginUser,
  verifyUser
} from "../../services/api_helper.js";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      currentUser: null,
      backPic: loginPic
    };
  }

  changeBackPic = () => {
    if (this.state.backPic === loginPic) {
      this.setState({
        backPic: loginPic2
      });
    } else {
      this.setState({
        backPic: loginPic
      });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    // Same as const name = e.target.name // const value = e.target.value
    this.setState({
      [name]: value
    });
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
    this.props.history.push("/garages");
  };

  render() {
    return (
      <div className="login">
        <img
          src={this.state.backPic}
          onClick={this.changeBackPic}
          id="backLoginImage"
        />
        <div className="actualLogin">
          <div className="backActLog">
            <div id="signInDiv">Sign In</div>
            <form>
              <input
                onChange={this.handleChange}
                name="email"
                type="email"
                id="emailInputLogin"
                placeholder="Email"
              />
              <input
                onChange={this.handleChange}
                name="password"
                type="password"
                id="emailInputLogin"
                placeholder="Password"
              />
              <div>
                <div id="forgotPassword" onClick={this.changeBackPic}>
                  I forgot my password
                </div>
              </div>
              <button id="singInButton" onClick={this.handleLogin}>
                Sign In
              </button>
            </form>
            <div>
              <a id="createAcct" href="/register">
                <div>Create Account</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
