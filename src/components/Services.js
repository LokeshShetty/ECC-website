import React from "react";
import "./Services.css";
import visionIcon from "./imgs/visionIcon.png";
import missionIcon from "./imgs/missionIcon.png";
import servicesIcon from "./imgs/servicesIcon.png";

const Services = () => {
  return (
    <div className="row rowServices justify-content-between">
      <div className="col-3 card1">
        <div class="card">
          <div class="card-body">
            <img src={visionIcon} alt="Our Vision" />
            <h5 class="card-title serviceTitle">Our Vision</h5>
            <p class="card-text">
              Aim that every youth grows holistically in various important
              dimensions of their lives viz. personal excellence, spirituality,
              technology, and professional goals which will eventually result in
              better leaders in society.
            </p>
          </div>
        </div>
      </div>
      <div className="col-3 card2">
        <div class="card">
          <div class="card-body">
            <img src={servicesIcon} alt="Our Services" />
            <h5 class="card-title serviceTitle">Our Services</h5>
            <p class="card-text">
              <b>Education:</b>
              <br />
              Systematic, scientific and practical understanding of knowledge
              and wisdom through various courses and books
              <br />
              <br />
              <b>Support:</b>
              <br /> Personal guidance and support system for helping
              individuals sustain and grow against various obstacles in life
              <br />
              <br />
              <b>Ambience:</b>
              <br /> Providing favorable environment and culture for making it
              easier to convert knowledge into wisdom
            </p>
          </div>
        </div>
      </div>
      <div className="col-3 card3">
        <div class="card">
          <div class="card-body">
            <img src={missionIcon} alt="Our Mission" />
            <h5 class="card-title serviceTitle">Our Mission</h5>
            <p class="card-text">
              To solve the root cause in today&apos;s society&apos;s lack of
              values &amp; spirituality, and to create, preserve and promote it
              among youth through systematic education and training programs for
              sustainable peace and happiness all over the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
