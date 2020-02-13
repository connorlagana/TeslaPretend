import React, { Component } from "react";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

class Model3Footer extends Component {
  render(props) {
    return (
      <div className="model3Footer">
        <div className="cashDiv">
          <h3>Cash</h3>
          <KeyboardArrowDown />
        </div>
        <div id="dividerFooter" />
        <div className="pricesDiv">
          <div className="insidePricesDiv">
            <h2>${(this.props.price - 6300).toLocaleString()}</h2>
            <p>After potential savings</p>
          </div>
          <div className="insidePricesDiv">
            <h2>${this.props.price.toLocaleString()}</h2>
            <p>Purchase price</p>
          </div>
          <div id="estPay">
            <p>Estimate Payment</p>
          </div>
        </div>
        <div id="dividerFooter" />
        <div className="nextFooterClass">
          <div>Estimated Delivery: 5-7 weeks</div>
          <button id="nextButton">Next</button>
        </div>
      </div>
    );
  }
}

export default Model3Footer;
