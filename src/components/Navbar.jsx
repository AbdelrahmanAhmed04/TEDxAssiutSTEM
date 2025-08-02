import React, { useState } from "react";
import "../App.css";
import "./Navbar.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import dropdownItems from "./DropdownItems";
import whiteLogo from "../assets/white-logo.png";

const {
  assiutCollageFair,
  tedxAssiut2020,
  tedxAssiut2019,
  ted,
  tedx,
  ourStory,
  ourTeam,
} = dropdownItems;

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const handleHumburger = () => setHamburger(!hamburger);
  const closeHumburger = () => setHamburger(false);
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(true);
  return (
    <nav>
      <Link to="../">
        <span className="logo">
          <img src={whiteLogo} alt="TEDxYouth@AssiutSTEM Logo" />
        </span>
      </Link>
      <div onClick={handleHumburger} className="menu-icon">
        <i className={hamburger ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className={hamburger ? "nav-menu  active" : "nav-menu "}>
        <li onClick={closeHumburger} className="nav-item">
          <Link className="nav-link" to="../">
            Home
          </Link>
        </li>
        <li onClick={closeHumburger} className="nav-item">
          <Link className="nav-link" to="../memories-of-the-future">
            Memories of the future
          </Link>
        </li>

        <Dropdown
          closeHumburger={closeHumburger}
          title="Archive"
          path="../events"
          dropdownItem={[assiutCollageFair, tedxAssiut2020, tedxAssiut2019]}
        />

        <Dropdown
          closeHumburger={closeHumburger}
          title="About"
          path="../about"
          dropdownItem={[ted, tedx, ourStory, ourTeam]}
        />
        <li onClick={closeHumburger} className="nav-item">
          <Button
            closeHumburger={closeHumburger}
            title="Book your Ticket"
            path="../book-your-ticket"
          ></Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
