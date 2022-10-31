import React from "react";
import { pic, shareIcon, shareDots, toolTip } from "../assets";

const Profile = () => {
  return (
    <div className="profile_container">
      <img src={pic} alt="profile_picture" id="profile__img" />
      <span id="twitter">@duruaku_lithium</span>
      <div className="share-btn">
        <img src={shareDots} alt="share_dot" className="share-dot" />
        <img src={shareIcon} alt="share_icon" className="share-icon" />
        <img src={toolTip} alt="tooltip" className="tool-tip" />
      </div>
      <span id="slack">@Ebuka Duruaku</span>
    </div>
  );
};

export default Profile;
