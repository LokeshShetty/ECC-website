import React from "react";
import vedasMeta from "./imgs/vedasMeta.png";
import businessYoga from "./imgs/businessYoga.jpg";
import techOut from "./imgs/TechItOut.png";
import intellectualWar from "./imgs/intellectualWar.png";
import timeMgmt from "./imgs/timeMgmt.png";
import "./EventCards.css";

const EventCards = () => {
  return (
    <>
      <div className="row rowEventCards justify-content-between">
        <div className="col-3">
          <div class="card cardY">
            <img src={vedasMeta} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">From Vedas to Metaverse</h5>
              <p className="card-text">
                A session dealing with where our Civilization is heading towards
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card cardP">
            <img src={businessYoga} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Business Yoga</h5>
              <p className="card-text">
                Official Guinness World Record Event for the World's Largest
                Webinar
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card cardB">
            <img src={techOut} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Tech It Out</h5>
              <p className="card-text">
                A 4-week collaborative discussion program on programming and
                logic
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row rowEventCards2 rowEventCards justify-content-between">
        <div className="col-3">
          <div class="card cardB">
            <img src={intellectualWar} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Intellectual Warriors</h5>
              <p className="card-text">
                A series dealing with essential Spirituality and Personal Growth
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card cardP">
            <img src={timeMgmt} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Time Management</h5>
              <p className="card-text">
                A session to polish up on the skills of managing time, habits
                and life
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card cardY">
            <div class="card-body bodyLink">
              <a class="card-subtitle" href="/">
                See More <br />
                {/* <img src={rightArrowIcon} alt="Right Arrow" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCards;
