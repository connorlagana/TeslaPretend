import React from "react";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const Model3Footer = () => {
  return (
    <div className="model3Footer">
      <div className="cashDiv">
        <h3>Cash</h3>
        <KeyboardArrowDown />
      </div>
      <div id="pricesDiv">
        <div>
          <h2>$33,690</h2>
          <p>After potential savings</p>
        </div>
        <div>
          <h2>$39,990</h2>
          <p>Purchase price</p>
        </div>
      </div>
    </div>
  );
};

export default Model3Footer;
