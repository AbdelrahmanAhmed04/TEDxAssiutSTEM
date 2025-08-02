import React from "react";
import { Link } from "react-router-dom";
import "./PastEventCard2.css";

function PastEventCard2(props) {
  return (
    <div className="past-event-card-2">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${props.imgURL})`,
        }}
      ></div>
      <div className="card-text">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-subtitle">{props.subTitle}</p>
        <p className="card-description">{props.description}</p>
        <Link style={{ textDecoration: "none" }} to={props.path}>
          <button className="btn">Go to our album</button>
        </Link>
      </div>
    </div>
  );
}

export default PastEventCard2;
