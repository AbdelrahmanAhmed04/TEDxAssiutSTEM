import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PastEventSection.css";
import PastEventCard from "./PastEventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import capacitorCardImg from "../assets/capacitor-card-img.jpg";
import theGoldenRecordCardImg from "../assets/the-golden-record-card-img.jpg";
import assiutCollageFairCardImg from "../assets/assiut-collage-fair-card-img.jpg";

function PastEventSection({ deviceType }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 960 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 960, min: 576 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="past-event-section">
      <h2 className="section-header">Our Past Events</h2>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        centerMode={deviceType == "mobile" ? true : false}
        keyBoardControl={true}
        containerClass="carousel-container"
        // deviceType={props.deviceType}
        itemClass="carousel-item"
      >
        <PastEventCard
          title="Assiut Collage Fair"
          subTitle="#know_your_future"
          description="It was a unique event, held for the first time in Upper Egypt."
          imgURL={assiutCollageFairCardImg}
          path="../assiut-collage-fair"
        />
        <PastEventCard
          title="TEDxYouth@AssiutSTEM2020"
          subTitle="#the_golden_record"
          description="The Golden Record is a present from a small distant world."
          imgURL={theGoldenRecordCardImg}
          path="../tedxassiutstem2020"
        />
        <PastEventCard
          title="TEDxYouth@AssiutSTEM2019"
          subTitle="#capacitor"
          description="Our very first event were our team was firstly founded!"
          imgURL={capacitorCardImg}
          path="../tedxassiutstem2019"
        />
      </Carousel>
    </section>
  );
}
export default PastEventSection;
