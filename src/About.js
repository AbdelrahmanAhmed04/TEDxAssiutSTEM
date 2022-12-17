import React from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import VideoHeroSection from "./components/VideoHeroSection";
import OurStory from "./components/OurStory";
import tedxIntro from "./assets/tedx-intro.mp4";
import LeadersSection from "./components/LeadersSection";
import Footer from "./components/Footer";

function About() {
  return (
    <div>
      <VideoHeroSection backgroundVideo={tedxIntro} />
      <AboutSection />
      <OurStory />
      <LeadersSection />
      <Footer />
    </div>
  );
}

export default About;
