import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import UpcomingEventCard from "./components/UpcomingEventCard";
import backgroundPic from "./assets/hero-pic2.png";
import PastEventSection2 from "./components/PastEventSection2";
import Footer from "./components/Footer";

function Events() {
  return (
    <div>
      <HeroSection
        firstLine="Not just a team,"
        secondLine="We are "
        autoType={["connection of thinkers", "collection of ideas"]}
        backgroundURL={backgroundPic}
        videoURL=""
      />
      <UpcomingEventCard />
      <PastEventSection2 />
      <Footer />
    </div>
  );
}

export default Events;
