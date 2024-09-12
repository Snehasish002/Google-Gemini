import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt } = useContext(Context);

  const loadPrompt = async (prompt) => {

    setRecentPrompt(prompt)
    await onSent(prompt)
  }



  const clickMenu = () => {
    setExtended((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <i onClick={clickMenu} className="fa-solid menu fa-bars"></i>
        <div className="new-chat">
          <i className="fa-solid fa-plus"></i>
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? 
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <i className="fa-regular fa-message"></i>
                  <p>{item.slice(0,18)} ....</p>
                </div>
              );
            })}
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
