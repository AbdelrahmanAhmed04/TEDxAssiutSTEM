import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LeaderCard.css";

function LeaderCard(props) {
  return (
    <Link path={props.path}>
      <div className="leader-card">
        <img src={props.img} alt={props.name} />
        <p className="name">{props.name}</p>
        <p className="position">{props.position}</p>
      </div>
    </Link>
  );
}

export default LeaderCard;
