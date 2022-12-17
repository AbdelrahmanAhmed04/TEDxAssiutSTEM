import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-section">
      <div className="header">
        <p className="title">Get in touch</p>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          voluptatum!
        </p>
      </div>
      <div className="contact-form">
        <div className="contact-info">
          <div className="top-contact">
            <p className="title">Contact info</p>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              laboriosam commodi reiciendis cumque delectus. Distinctio,
              necessitatibus nulla. Obcaecati, possimus ab!
            </p>
            <p className="contact-p">
              <span className="icon"></span> 01000947764 | 01096044255
            </p>
            <p className="contact-p">
              <span className="icon"></span> 01000947764 | 01096044255
            </p>
          </div>
          <div className="social-media">
            <a href="#">
              <span className="icon">facebook</span>
            </a>
            <a href="#">
              <span className="icon">linkedin</span>
            </a>
            <a href="#">
              <span className="icon">twitter</span>
            </a>
          </div>
        </div>
        <div className="inquiry-form">
          <p className="title">Contact us</p>
          <form action="">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="text" />
            <label htmlFor="phone">Phone number</label>
            <input name="phone" id="phone" type="text" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Send your inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;
