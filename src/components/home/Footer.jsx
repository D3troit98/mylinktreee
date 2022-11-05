import React from "react";
import { zuri, i4g } from "../../assets";
const Footer = () => {
  return (
    <footer>
      <div className="line" />
      <img src={zuri} alt="zuri logo" className="zuri-logo" />
      <p className="footer-text">HNG Internship 9 Frontend Task</p>
      <img src={i4g} alt="i4g logo" className="i4g-logo" />
    </footer>
  );
};

export default Footer;
