import React from "react";
import practicalSpirituality from "./imgs/practicalSpirituality.png";
import personalExcellence from "./imgs/personalGrowth.png";
import technion from "./imgs/technion.png";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel carousel-dark slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div
        class="carousel-inner"
        // style={{ marginLeft: "20rem", paddingRight: "40rem" }}
      >
        <div class="carousel-item active">
          <div className="row mb-5 align-items-center">
            <div className="colCar col-sm-6">
              <h3>Practical Spirituality</h3>
              <p>
                To share essential knowledge of Spirituality in a scientific and
                practical manner. Connect with something bigger than yourself
                and understand the world around us, why it is the way it is and
                what is the real purpose of existence.
              </p>
              <button className="btn btn-sm carouselBtn1">Explore</button>
            </div>
            <div className="colCar col-sm-6">
              <img
                src={practicalSpirituality}
                alt="Practical Spirituality"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row mb-5 align-items-center">
            <div className="colCar col-sm-6">
              <h3>Personal Excellence</h3>
              <p>
                Enable one to live and work purposefully towards a vision, in
                alignment with one's values and in a state of constant learning
                about oneself to reach one's true maximum potential in personal
                excellence and life management.
              </p>
              <button className="btn btn-sm carouselBtn2">Explore</button>
            </div>
            <div className="colCar col-sm-6">
              <img
                src={personalExcellence}
                alt="Personal Excellence"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row mb-5 align-items-center">
            <div className="colCar col-sm-6">
              <h3>Technion</h3>
              <p>
                To provide people an amazing platform to learn real-world
                industry relevant skills and share knowledge collaboratively in
                the field of Computer Science &amp; Technology and use those
                skills to create something for the social good.
              </p>
              <button className="btn btn-sm carouselBtn3">Explore</button>
            </div>
            <div className="colCar col-sm-6">
              <img src={technion} alt="Technion" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
