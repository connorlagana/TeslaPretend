import React, { Component } from "react";
import loginPic from "../../images/loginPic.jpg";
import loginPic2 from "../../images/loginPic2.jpg";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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

  render() {
    return (
      <div className="login">
        <img src={loginPic} onClick={this.changeBackPic} id="backLoginImage" />
        <div className="actualLogin">
          <form onSubmit={e => this.props.handleLogin(e, this.state)}>
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
                <button
                  id="singInButton"
                  onClick={e => this.props.handleLogin(e, this.state)}
                >
                  Sign In
                </button>
              </form>
              <div>
                <a id="createAcct" href="/register">
                  <div>Create Account</div>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
