import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  
  const clickMenu = () => {
    setExtended(prev => !prev)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <i  onClick={clickMenu} className="fa-solid menu fa-bars"></i>
        <div className="new-chat">
          <i className="fa-solid fa-plus"></i>
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? 
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <i className="fa-regular fa-message"></i>
              <p>What is react...</p>
            </div>
          </div>
         : null}
      </div>

      <div className="bottom">
        <div className="buttom-item recent-entry">
          <i className="fa-regular fa-circle-question"></i>
          {extended ? <p>Help</p> : null}
        </div>
        <div className="buttom-item recent-entry">
          <i className="fa-solid fa-clock-rotate-left"></i>
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="buttom-item recent-entry">
          <i className="fa-solid fa-gear"></i>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
