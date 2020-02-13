import React from "react";
import model3MainPic from "../../images/model3Main.jpg";
import NavBar from "../nav/NavBar.js";
import weirdDumbFucky from "../../images/weirdDumbFucky.svg";

const Model3Main = () => {
  return (
    <div>
      <img src={model3MainPic} id="mainHero" />
      <NavBar />
      <div className="model3WholeFrameMain">
        <div className="topModel3Main">
          <div>Tesla</div>
          <div>Model 3</div>
        </div>
        <div className="bottomModel3Main">
          <div id="secondsBottomModel3Main">
            <div>
              <img src={weirdDumbFucky} />
              <div>3.2s</div>
            </div>
            <div>0-60 mph</div>
          </div>
          <div id="rangeBottomModel3Main"></div>
        </div>
      </div>
    </div>
  );
};

export default Model3Main;
