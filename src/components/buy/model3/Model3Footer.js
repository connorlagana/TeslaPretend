import React from "react";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const Model3Footer = () => {
  return (
    <div className="model3Footer">
      <div className="cashDiv">
        <h3>Cash</h3>
        <KeyboardArrowDown />
      </div>
      <div id="dividerFooter" />
      <div className="pricesDiv">
        <div className="insidePricesDiv">
          <h2>$33,690</h2>
          <p>After potential savings</p>
        </div>
        <div className="insidePricesDiv">
          <h2>$39,990</h2>
          <p>Purchase price</p>
        </div>
        <div id="estPay">
          <p>Estimate Payment</p>
        </div>
      </div>
      <div id="dividerFooter" />
      <div className="nextFooterClass">
        <h4>Estimated Delivery: 5-7 weeks</h4>
        <button id="nextButton">Next</button>
      </div>
    </div>
  );
};

export default Model3Footer;
