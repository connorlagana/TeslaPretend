import React, { Component } from "react";
import teslaWhite from "../../images/teslaWhite.svg";
import Menu from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="leftNav">
          <a href="/">
            <img src={teslaWhite} id="teslaWhite" />
          </a>
        </div>
        <div className="midNav">
          <ul className="mainNavComps">
            <a href="/modelS" className="navItem">
              Model S
            </a>
            <Link to="/model3" className="navItem">
              Model 3
            </Link>
            <a href="/modelX" className="navItem">
              Model X
            </a>
            <a href="/modelY" className="navItem">
              Model Y
            </a>
            <a href="/cybertruck" className="navItem">
              Cybertruck
            </a>
            <a href="/roadster" className="navItem">
              Roadster
            </a>
            <a href="/energy" className="navItem">
              Energy
            </a>
          </ul>
        </div>
        <div className="rightNav">
          {this.props.currentUser ? (
            <Link to="/Profile" className="navItem">
              {this.props.currentUser.name}
            </Link>
          ) : (
            <div />
          )}

          <a href="/Shop" className="navItem">
            Shop
          </a>
          {this.props.currentUser ? (
            <a href="/signout" className="navItem">
              Sign Out
            </a>
          ) : (
            <a href="/login" className="navItem">
              Sign In
            </a>
          )}
          <Menu id="hamburgerMenu" />
        </div>
      </div>
    );
  }
}

export default NavBar;
