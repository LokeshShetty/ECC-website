import React from "react";
import linkedinIcon from "./imgs/linkedinIcon.png";
import instaIcon from "./imgs/instaIcon.png";
import facebookIcon from "./imgs/facebookIcon.png";
import gmailIcon from "./imgs/gmailIcon.png";
import whatsappIcon from "./imgs/whatsappIcon.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="row rowContact">
      <div className="col-2">
        <a href="https://in.linkedin.com/company/ethic-craft-club">
          <img src={linkedinIcon} alt="" />
          <p>LinkedIn</p>
        </a>
      </div>
      <div className="col-2">
        <a href="https://instagram.com/ethiccraftlpu">
          <img src={instaIcon} alt="" />
          <p>Instagram</p>
        </a>
      </div>
      <div className="col-2">
        <a href="https://facebook.com/ethiccraftlpu">
          <img src={facebookIcon} alt="" />
          <p>Facebook</p>
        </a>
      </div>
      <div className="col-2">
        <a href="mailto:ethiccraftlpu@gmail.com">
          <img src={gmailIcon} alt="" />
          <p>Mail</p>
        </a>
      </div>
      <div className="col-2">
        <a href="https://wa.me/917015240451">
          <img src={whatsappIcon} alt="" />
          <p>WhatsApp</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
