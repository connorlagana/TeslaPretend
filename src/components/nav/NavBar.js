import React from "react";
import teslaWhite from "../../images/teslaWhite.svg";
import Menu from "@material-ui/icons/Menu";

const NavBar = () => {
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
          <a href="/model3" className="navItem">
            Model 3
          </a>
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
        <a href="/Shop" className="navItem">
          Shop
        </a>
        <a href="/login" className="navItem">
          Sign In
        </a>
        <Menu id="hamburgerMenu" />
      </div>
    </div>
  );
};

export default NavBar;
