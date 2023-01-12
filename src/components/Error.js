import errorImg from "./imgs/errorImg.png";
import React, { useState } from "react";
import "./Error.css";

const Error = () => {
  setTimeout(function () {
    window.location.href = "/";
  }, 5000);

  const [time, setTime] = useState(5);

  setTimeout(function () {
    setTime(time - 1);
  }, 1000);

  return (
    <div className="container containErr">
      <div className="row">
        <div className="col col-md-6">
          <img src={errorImg} alt="error 404 - not found" />
        </div>
        <h3>Oh, Snap! The page you're looking for isn't available.</h3>
        <p>Please check if there is a typo in the URL.</p>
        <p>You'll be redirected in {time} seconds.</p>
      </div>
    </div>
  );
};

export default Error;
