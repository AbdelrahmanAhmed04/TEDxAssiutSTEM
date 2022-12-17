import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import "./Navbar.css";
function Dropdown(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={props.closeHumburger}
      className="nav-item"
    >
      <Link onClick={handleClick} className="nav-link" to={props.path}>
        {props.title} <i className="fas fa-caret-down" />
      </Link>
      <ul className={dropdown ? "dropdown-menu active" : "dropdown-menu"}>
        {props.dropdownItem.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.className} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
export default Dropdown;
