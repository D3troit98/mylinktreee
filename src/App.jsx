import React from "react";
import { slack, github } from "./assets";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Profile from "./components/Profile";
import "./App.scss";
const App = () => {
  return (
    <div className="app_container">
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
    </div>
  );
};

export default App;
