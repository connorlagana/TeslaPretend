import React from "react";
import model3MainPic from "../../images/model3Main.jpg";
import NavBar from "../nav/NavBar.js";
import speedThingy from "../../images/speedThingy.svg";

const Model3Main = () => {
  return (
    <div className="model3Main">
      <img src={model3MainPic} id="mainHero" />
      <NavBar />
      <div className="model3WholeFrameMain">
        <div className="topModel3Main">
          <div>Tesla</div>
          <div id="underTeslaModel3Title">Model 3</div>
        </div>
        <div className="bottomModel3Main">
          <div id="secondsBottomModel3Main">
            <div id="topBottomModel3Main">
              <img src={speedThingy} id="speedThingy" />
              <div>3.2s</div>
            </div>
            <div>0-60 mph</div>
          </div>
          <div id="topBottomModel3Main">
            <div>322mi</div>
          </div>
          <div>
            <div>Range</div>
          </div>
          <div id="topBottomModel3Main">
            <div>322mi</div>
            <div>Range</div>
          </div>

          <div id="rangeBottomModel3Main"></div>
        </div>
      </div>
    </div>
  );
};

export default Model3Main;
