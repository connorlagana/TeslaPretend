import React, { Component } from "react";
import registerPic from "../../images/registerPic.jpg";
import registerPic2 from "../../images/registerPic2.jpg";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      backPic: registerPic
    };
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

  render() {
    return (
      <div className="login">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
