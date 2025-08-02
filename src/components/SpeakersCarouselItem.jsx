import React from "react";
import { Link } from "react-router-dom";
import "./SpeakerCarouselItem.css";
// import ahmedMohamed from "../assets/alumni-images/first-season/speakers/ahmed-mohamed.png";

function SpeakersCarouselItem(props) {
  return (
    <div className="carsousel-item">
      <div className="text">
        <p className="title">Mr. Ahmed Mohamed</p>
        <p className="subtitle">Bioinformatics professor at Assiut Universty</p>
        <p className="description">
          <span className="block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit ut dolores beatae, illum minima cupiditate ipsa
            voluptates veritatis excepturi, architecto corporis dolore nulla
            autem optio nostrum quisquam non, dolorem provident!
          </span>
          <span className="block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit ut dolores beatae, illum minima cupiditate ipsa
            voluptates veritatis excepturi, architecto corporis dolore nulla
            autem optio nostrum quisquam non, dolorem provident!
          </span>
        </p>
        <Link path="#">
          <button className="btn">Learn more</button>
        </Link>
      </div>
      <div className="img">
        <img src={require("../assets/about-img.png")} alt="Ahmed Mohamed" />
      </div>
    </div>
  );
}
export default SpeakersCarouselItem;
