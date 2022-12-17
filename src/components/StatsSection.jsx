import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StatsSection.css";
import "./Navbar.css";
function StatsSection() {
  return (
    <div className="container">
      <p className="intro-text">
        TEDxYouth@AssiutSTEM is the first TEDx Event in upper Egypt, it has been
        around in multiple forms since 2019. In this short time, we’ve been
        recognized on as one of the top TEDx events in upper Egypt. We’ve built
        a meaningful community and demonstrated an exceptional commitment to
        ideas worth spreading, community mentorship and TED values.
      </p>
      <div className="stats-block">
        <ul className="stats-list">
          <li className="stats-item">
            <div className="stats-item-div">
              <p className="stats-number">1st</p>
              <p className="stats-description">
                TEDx community in the Upper Egypt
              </p>
            </div>
          </li>
          <li className="stats-item">
            <div className="stats-item-div">
              <p className="stats-number">3</p>
              <p className="stats-description">Pase events </p>
            </div>
          </li>{" "}
          <li className="stats-item">
            <div className="stats-item-div">
              <p className="stats-number">20+</p>
              <p className="stats-description">Speakers alumni </p>
            </div>
          </li>
          <li className="stats-item">
            <div className="stats-item-div">
              <p className="stats-number">1500+</p>
              <p className="stats-description">Total attendees </p>
            </div>
          </li>
          <li className="stats-item">
            <div className="stats-item-div">
              <p className="stats-number">300+</p>
              <p className="stats-description">Community members </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default StatsSection;
