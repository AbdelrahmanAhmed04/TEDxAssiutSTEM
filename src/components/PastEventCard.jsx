import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PastEventCard.css";

function PastEventCard(props) {
  return (
    <Link style={{ textDecoration: "none" }} to={props.path}>
      <div
        className="past-event-card"
        style={{
          backgroundImage: `linear-gradient(
            0deg,
            rgba(0, 0 , 0, 0.8) 10%,
            rgba(0, 0, 0, 0) 100%
        ),url(${props.imgURL})`,
        }}
      >
        <h3 className="card-title">{props.title}</h3>
        <p className="card-subtitle">{props.subTitle}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </Link>
  );
}
export default PastEventCard;
