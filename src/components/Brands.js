import React from "react";
import "./Brands.css";
import badaBIcon from "./imgs/badaBusinessIcon.png";
import sikshaIcon from "./imgs/sikshaIcon.png";
import iskconIcon from "./imgs/iskconIcon.png";
import boardIcon from "./imgs/boardIcon.png";
import iyfIcon from "./imgs/iyfIcon.png";

const Brands = () => {
  return (
    <>
      <div className="row row1 justify-content-center">
        <div class="card col-2 brandCol1 cardP">
          <div class="card-body">
            <div className="row rowBrands">
              <div className="badaImg col-5">
                <img src={badaBIcon} alt="" />
              </div>
              <div className="col-7">
                <h5 class="card-subtitle">Bada Business</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-2 brandCol1 sikshaCard cardB">
          <div class="card-body">
            <div className="row rowBrands">
              <div className="col-4">
                <img src={sikshaIcon} alt="Siksharthakam" />
              </div>
              <div className="col-8">
                <h5 class="card-subtitle">Siksharthakam</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-2 brandCol1 cardY">
          <div class="card-body">
            <div className="row rowBrands">
              <div className="col-5">
                <img src={iskconIcon} alt="ISKCON Gurugram" />
              </div>
              <div className="col-7">
                <h5 class="card-subtitle">ISKCON Gurugram</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div class="card col-2 brandCol1 cardY">
          <div class="card-body">
            <div className="row rowBrands">
              <div className="col-5">
                <img src={boardIcon} alt="Board Infinity" />
              </div>
              <div className="col-7">
                <h5 class="card-subtitle">Board Infinity</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-2 brandCol1 cardB">
          <div class="card-body">
            <div className="row rowBrands">
              <div className="col-5 badaImg">
                <img src={iyfIcon} alt="IYF" />
              </div>
              <div className="col-7">
                <h5 class="card-subtitle">ISKCON Youth Forum</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
