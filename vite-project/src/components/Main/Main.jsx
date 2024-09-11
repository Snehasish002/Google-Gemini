import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {

  

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <i className="fa-regular fa-compass"></i>
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <i className="fa-regular fa-lightbulb"></i>
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <i className="fa-regular fa-message"></i>
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter prompt here" />
            <div>
              <i className="fa-regular fa-images"></i>
              <i className="fa-solid fa-microphone"></i>
              <i className="fa-regular fa-paper-plane"></i>
            </div>
          </div>
          <p className="bottom-info">
            ©copyright - snehasishmohanty9439@gmail.com
        </p>
        </div>
       
      </div>
    </div>
  );
};

export default Main;
