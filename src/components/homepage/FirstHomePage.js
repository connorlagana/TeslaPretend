import React from "react";
import mainHeroNarrow from "../../images/mainHeroNarrow.jpg";
import NavBar from "../nav/NavBar.js";
import CenterConsole from "./CenterConsole.js";

const FirstHomePage = () => {
  return (
    <div>
      <img src={mainHeroNarrow} id="mainHero" />
      <NavBar />
      <CenterConsole />
    </div>
  );
};

export default FirstHomePage;
