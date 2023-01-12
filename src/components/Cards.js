import React from "react";
import "./Cards.css";
import citiesIcon from "./imgs/citiesIcon.png";
import collegeIcon from "./imgs/collegeIcon.png";
import mentorIcon from "./imgs/mentorIcon.png";
import memberIcon from "./imgs/memberIcon.png";
import eventIcon from "./imgs/eventIcon.png";

const Cards = () => {
  return (
    <div className="rowPlus row justify-content-between">
      <div class="cardPlus card col-2">
        <div class="card-body">
          <div className="row">
            <div className="col-4">
              <img src={collegeIcon} alt="Colleges" />
            </div>
            <div className="col-8">
              <h4 class="card-title">100+</h4>
              <h5 class="card-subtitle mb-2">Colleges</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="cardPlus card col-2">
        <div class="card-body">
          <div className="row">
            <div className="col-4">
              <img src={citiesIcon} alt="Cities" />
            </div>
            <div className="col-8">
              <h4 class="card-title">30+</h4>
              <h5 class="card-subtitle mb-2">Cities</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="cardPlus card col-2">
        <div class="card-body">
          <div className="row">
            <div className="col-4">
              <img src={eventIcon} alt="Events" />
            </div>
            <div className="col-8">
              <h4 class="card-title">200+</h4>
              <h5 class="card-subtitle mb-2">Events</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="cardPlus card col-2">
        <div class="card-body">
          <div className="row">
            <div className="col-4">
              <img src={memberIcon} alt="Members" />
            </div>
            <div className="col-8">
              <h4 class="card-title">650+</h4>
              <h5 class="card-subtitle mb-2">Members</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="cardPlus card col-2">
        <div class="card-body">
          <div className="row">
            <div className="col-4">
              <img src={mentorIcon} alt="Mentors" />
            </div>
            <div className="col-8">
              <h4 class="card-title">75+</h4>
              <h5 class="card-subtitle mb-2">Mentors</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
