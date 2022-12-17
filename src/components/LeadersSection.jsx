import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LeadersSection.css";
import LeaderCard from "./LeaderCard";
import leadersData from "./leaders";

function LeadersSection(props) {
  console.log(leadersData);

  return (
    <section className="leader-section">
      <h3 className="title">Meet our leaders</h3>
      <div className="cards">
        {leadersData.map((item, index) => (
          <LeaderCard
            name={item.name}
            position={item.position}
            img={item.imgURL}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default LeadersSection;
