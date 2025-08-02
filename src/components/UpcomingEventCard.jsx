import React from "react";
import { Link } from "react-router-dom";
import "./UpcomingEventCard.css";
import "./Navbar.css";
import memoriesOfTheFuture from "../assets/memories-of-the-future.jpeg";
function UpcomingEventCard() {
  return (
    <section className="upcoming-event-section">
      <h2 className="upcoming-card-title">Upcoming Events</h2>

      <div className="upcoming-event-card">
        <div className="card-text">
          <div className="title">
            <h3>About TEDxYouth@AssiutSTEM | Memories of the future</h3>
          </div>
          <div className="content">
            <p>
              <span className="red-text">Theme breif</span> Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Quaerat, veniam, vero
              magni nisi, ipsum repellat voluptate sint recusandae quo id quod.
              Placeat impedit reiciendis iure molestiae perspiciatis repellendus
              expedita consequuntur!
            </p>
            <p>
              <span className="red-text">Theme breif</span> Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Quaerat, veniam, vero
              magni nisi, ipsum repellat voluptate sint recusandae quo id quod.
              Placeat impedit reiciendis iure molestiae perspiciatis repellendus
              expedita consequuntur!
            </p>
          </div>
          <div className="upcoming-button">
            <Link path="../about">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </div>
        <img src={memoriesOfTheFuture} alt=" " className="img-container" />
      </div>
    </section>
  );
}
export default UpcomingEventCard;
