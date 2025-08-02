import React from "react";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutCard.css";
import "./Navbar.css";
import aboutImg from "../assets/about-img.png";
function AboutCard() {
  return (
    <div className="about-card">
      <div
        style={{ backgroundImage: `url(${aboutImg})` }}
        className="img-container"
      ></div>
      <div className="card-text">
        <div className="title">
          <h3>About TEDxYouth@AssiutSTEM</h3>
        </div>
        <div className="content">
          <p>
            TEDxYouth@AssiutSTEM is the first TEDx Event in upper Egypt, it has
            been around in multiple forms since 2019. In this short time, we’ve
            been recognized on as one of the top TEDx events in upper Egypt.
            We’ve built a meaningful community and demonstrated an exceptional
            commitment to ideas worth spreading, community mentorship and TED
            values. <br /> We are a non-profit, volunteer-led organization.
            Together, we seek out the most inspiring and innovative solutions
            that go beyond limitations, beyond labels, pushing boundaries to
            create the kind of world we all want to live in.
            <br /> The TEDxYouth@AssiutSTEM family includes our core team, over
            150 volunteers who collectively make up our team, over 20 speaker
            alumni and a network of dedicated partners who support our work.
          </p>
        </div>
        <div className="button">
          <Link path="../about">
            <button className="btn">Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AboutCard;
