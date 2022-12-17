import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link onClick={props.closeHumburger} className="button" to={props.path}>
      <button className="btn">{props.title}</button>
    </Link>
  );
}
export default Button;
