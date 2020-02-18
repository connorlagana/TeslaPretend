import React, { Component } from "react";
import registerPic from "../../images/registerPic.jpg";
import registerPic2 from "../../images/registerPic2.jpg";
import ReCAPTCHA from "react-google-recaptcha";

import {
  registerUser,
  loginUser,
  verifyUser
} from "../../services/api_helper.js";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      backPic: registerPic
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    // Same as const name = e.target.name // const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  changeBackPic = () => {
    if (this.state.backPic === registerPic) {
      this.setState({
        backPic: registerPic2
      });
    } else {
      this.setState({
        backPic: registerPic
      });
    }
  };

  onChange = value => {
    console.log("Captcha value:", value);
  };

  render() {
    return (
      <div className="register">
        <img
          src={this.state.backPic}
          onClick={this.changeBackPic}
          id="backLoginImage"
        />
        <div className="actualRegister">
          <div className="backActReg">
            <div id="topRegAct">
              <div>Already have an account?</div>
              <a id="alActSign" href="/login">
                Sign In
              </a>
            </div>
            <div id="createAccount">Create Account</div>
            <div>
              <form className="formRegister">
                <input
                  type="text"
                  id="registerTextInput"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  id="registerTextInput"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  id="registerTextInput"
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  id="registerTextInput"
                  placeholder="Password"
                />
                <input
                  type="password"
                  id="registerTextInput"
                  placeholder="Type your password again"
                />
                <div id="minimumText">
                  Minimum of eight characters, one letter and one number
                </div>
                <ReCAPTCHA
                  sitekey="6LcxndgUAAAAAAMD80WwxqPcw6DXiTOQf1nkGaZA"
                  onChange={this.onChange}
                />
                <button id="createAcctRegButton">Create Account</button>
                <div id="minimumText">
                  By creating an account you agree to the&nbsp;
                  <div id="customerPrivacy">Customer Privacy Policy</div>
                  &nbsp;and&nbsp;
                  <div id="customerPrivacy">Supercharger Fair Use Policy</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
