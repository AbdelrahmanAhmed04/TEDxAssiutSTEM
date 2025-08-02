import React from "react";
// import { Link } from "react-router-dom";
import "./VideoHeroSection.css";

function VideoHeroSection(props) {
  return (
    <div className="video-hero-section">
      <video className="videoTag" autoPlay muted>
        <source src={props.backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}
export default VideoHeroSection;
