import React from "react";

import teslaLogo from "../../../images/tesla.svg";
import americanFlag from "../../../images/americanFlag.svg";

const Model3Header = () => {
  return (
    <div className="model3Header">
      <div className="model3HeaderLeftDiv">
        <a href="/">
          <img src={teslaLogo} id="teslaLogo" />
        </a>
      </div>
      <div className="model3HeaderNavMain">
        <ol>
          <li>
            {" "}
            <a className="buyHeaderNavItem" href="/model3/design/battery">
              Car
            </a>
          </li>
          <li>
            <a className="buyHeaderNavItem" href="/model3/design/exterior">
              Exterior
            </a>
          </li>
          <li>
            <a className="buyHeaderNavItem" href="/model3/design/interior">
              Interior
            </a>
          </li>
          <li>
            <a className="buyHeaderNavItem" href="/model3/design/autopilot">
              Autopilot
            </a>
          </li>
          <li>
            <a className="buyHeaderNavItem" href="/model3/design/autopilot">
              Payment
            </a>
          </li>
        </ol>
      </div>
      <div className="model3HeaderRightDiv">
        <img src={americanFlag} id="americanFlag" />
      </div>
    </div>
  );
};

export default Model3Header;
