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
      <div>
        <img src={this.state.backPic} onClick={this.changeBackPic} />
      </div>
    );
  }
}

export default Login;
