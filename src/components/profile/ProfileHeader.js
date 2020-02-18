import React, { Component } from "react";
import teslaLogo from "../../images/teslaWhite.svg";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profileHeader">
        <div id="profHeadLeftDiv">
          <img src={teslaLogo} />
          <div> Hello, Connor</div>
        </div>
        <div id="profHeadLeftDiv">
          
          <div>Sign Out</div>
        </div>
        {/* <h1>{this.props.currentUser.name}</h1> */}
      </div>
    );
  }
}

export default ProfileHeader;
