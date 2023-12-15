import React from "react";
import "./Link.css";
import linkArrow from "../assets/arrow_link.png";

function Link({ link, textLink }) {
  return (
    <div className="link-wrapper">
      <p className="link-description">Уже есть аккаунт?</p>
      <a className="link" href={link}>
        {textLink}
      </a>
      <img src={linkArrow} />
    </div>
  );
}

export default Link;