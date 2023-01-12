import React from "react";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Services from "./Services";
import Glance from "./Glance";
import Intro from "./Intro";
import EventCards from "./EventCards";
import Contact from "./Contact";
import heartIcon from "./imgs/heartIcon.png";
import "./Home.css";
import Brands from "./Brands";

const Home = () => {
  return (
    <div className="home ">
      <div className="container contain1">
        <Intro />
        <div className="container">
          <h3 className="reach">Our Reach</h3>
          <Cards />
          <h3 className="service">What do we do?</h3>
          <Services />
        </div>
      </div>
      <Glance />
      <div className="container contain2">
        <h3 className="service">Brands We Collaborate With</h3>
        <Brands />
        <h3 className="subgroup">Explore Our Subgroups</h3>
        <Carousel />
        <h3 className="event">Events &amp; Courses</h3>
        <EventCards />
        <h3 className="connect">Let's Connect</h3>
        <Contact />
      </div>
      <p className="heart">
        Made with <img src={heartIcon} alt="Love" /> by Ethic Craft Club
      </p>
    </div>
  );
};

export default Home;
