import React from "react";
import atAGlance from "./imgs/atAGlance.png";
import "./Glance.css";

const Glance = () => {
  return (
    <div className="row rowGlance bg-light">
      <div className="colGlance1 col-sm-6">
        <img src={atAGlance} alt="ECC At A Glance" style={{ width: "70%" }} />
      </div>
      <div className="colGlance2 col-sm-6">
        <h3>ECC At A Glance</h3>
        <p>
          We are on a mission to promote Personal Effectiveness &amp; Spiritual
          Awareness to the youth through
        </p>
        <ul>
          <li>
            Systematic Training Courses &amp; Interactive Seminars by Leaders,
            CEOs, Technical Leads &amp; Elite Personalities
          </li>
          <li>
            Industry Professional Mentorship for Career, Lifestyle, Personality
            &amp; Spiritual Guidance
          </li>
          <li>
            Engaging Community for 3 sub groups with regular quality content
            sharing and QnA
          </li>
          <li>
            Study Groups and Book Reading Club plus Great Association of
            like-minded people from community
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Glance;
