import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OurStory.css";
import aboutImg from "../assets/about-img.png";
function OurStory() {
  return (
    <section className="our-story-section">
      <div className="card-text">
        <div className="title">
          <h3>Our Story</h3>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            veniam, vero magni nisi, ipsum repellat voluptate sint recusandae
            quo id quod. Placeat impedit reiciendis iure molestiae perspiciatis
            repellendus expedita consequuntur!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            veniam, vero magni nisi, ipsum repellat voluptate sint recusandae
            quo id quod. Placeat impedit reiciendis iure molestiae perspiciatis
            repellendus expedita consequuntur! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quaerat, veniam, vero magni nisi,
            ipsum repellat voluptate sint recusandae quo id quod. Placeat
            impedit reiciendis iure molestiae perspiciatis repellendus expedita
            consequuntur!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            veniam, vero magni nisi, ipsum repellat voluptate sint recusandae
            quo id quod. Placeat impedit reiciendis iure molestiae perspiciatis
            repellendus expedita consequuntur! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quaerat, veniam, vero magni nisi,
            ipsum repellat voluptate sint recusandae quo id quod. Placeat
            impedit reiciendis iure molestiae perspiciatis repellendus expedita
            consequuntur!
          </p>
        </div>
      </div>
      <img src={aboutImg} className="img-container" />
    </section>
  );
}
export default OurStory;
