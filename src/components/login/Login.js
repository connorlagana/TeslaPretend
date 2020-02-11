import React, { Component } from "react";
import loginPic from "../../images/loginPic.jpg";
import loginPic2 from "../../images/loginPic2.jpg";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
              <input type="email" id="emailInputLogin" placeholder="Email" />
              <input
                type="password"
                id="emailInputLogin"
                placeholder="Password"
              />
              <div>
                <div id="forgotPassword">I forgot my password</div>
              </div>
              <button id="singInButton">Sign In</button>
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
