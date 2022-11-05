import React from "react";
import { slack, github } from "../../assets";
import Footer from "./Footer";
import Links from "./Links";
import Profile from "./Profile";
const Home = () => {
  return (
    <>
      <Profile />
      <Links />

      <div className="code">
        <img src={slack} alt="slack_logo" className="slack_logo" />
        <a href="https://github.com/D3troit98/mylinktreee.git">
          <img src={github} alt="github_link" className="source_code" />
        </a>
      </div>
      <div className="line" />
      <Footer />
    </>
  );
};

export default Home;
