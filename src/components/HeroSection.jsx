import React from "react";
import "../App.css";
import "./HeroSection.css";
import Typed from "react-typed";
import { style } from "@mui/system";

function HeroSection(props) {
  console.log(props.backgroundURL);

  return (
    <div
      className={
        props.videoURL === "" ? "hero-section img-background" : "hero-section"
      }
      style={{
        backgroundImage:
          props.videoURL === "" ? `url(${props.backgroundURL})` : "none",
      }}
    >
      {() => {
        if (props.backgroundURL === "") {
          return (
            <video
              className="video-background"
              src={props.videoURL}
              autoPlay
              loop
              muted
            />
          );
        } else return;
      }}
      <h2 className="hero-text">
        <span className="first-line">{props.firstLine}</span>
        <br />
        <span className="second-line">{props.secondLine}</span>
        <Typed
          className="auto-typed"
          strings={props.autoType}
          typeSpeed={40}
          loop={true}
          backDelay={2000}
          backSpeed={20}
        />
      </h2>

      {/* {() => {
        console.log(props);
        if (typeof props.autoType === "string") {
          return <span className="style-hero">{props.autoType}</span>;
        } else if (typeof x === "array") {
          return ( );
        }
      }} */}
    </div>
  );
}

export default HeroSection;
