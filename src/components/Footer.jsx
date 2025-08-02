import React from "react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        maiores provident officiis natus repellat veniam. Id eveniet deserunt
        velit amet.
      </div>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        <button>Get involved</button>
      </a>
      <div className="social-media">
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <span className="icon">facebook</span>
        </a>
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <span className="icon">linkedin</span>
        </a>
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <span className="icon">twitter</span>
        </a>
      </div>
      <div className="footer-body">
        <h3>What is TEDx</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni
          recusandae repellendus. Perferendis delectus beatae quas, corrupti
          provident aut error quo culpa non illum fugit molestias debitis
          exercitationem labore quia in aperiam, harum voluptate. Est,
          laboriosam? Maiores velit quasi obcaecati dolore molestiae quod sunt
          esse, ab, ipsum praesentium corporis natus modi odio debitis deserunt
          fugiat accusantium possimus quae animi incidunt neque reiciendis eos
          expedita eaque. Esse, nam. Cum, expedita. Commodi animi reiciendis
          excepturi alias officiis voluptatem odit. Similique voluptate sunt non
          reprehenderit praesentium, aut harum id sapiente, distinctio
          consequuntur possimus cumque maiores omnis explicabo quas blanditiis
          provident eos. Nobis, perspiciatis?
        </p>
      </div>
      <p className="copy-right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, magni!
      </p>
    </section>
  );
}
export default Footer;
