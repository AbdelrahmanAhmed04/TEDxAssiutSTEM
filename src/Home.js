import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import AboutCard from "./components/AboutCard";
import PastEventsSection from "./components/PastEventSection";
import backgroundPic from "./assets/hero-pic1.png";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="home">
      <HeroSection
        firstLine="Not just a team,"
        secondLine="We are a "
        autoType={[
          "family of rebels",
          "movement of ideas",
          "collection of culture",
        ]}
        backgroundURL={backgroundPic}
        videoURL=""
      />
      <StatsSection />
      <AboutCard />
      <PastEventsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
