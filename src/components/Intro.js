import React from "react";
import eccIcon from "./imgs/eccIcon2.png";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="row rowIntro">
      <div className="col-6 colIntro">
        <h1>Ethic Craft Club</h1>
        <h5 className="h5Intro">MARCHING TOWARDS VALUES</h5>
        <button className="btn btnIntro1">Join Us</button>
        <button className="btn btnIntro2">Know More</button>
      </div>
      <div className="col-6">
        <div className="row rowIntro2">
          <img
            src={eccIcon}
            alt="Ethic Craft Club Logo"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
