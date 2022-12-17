import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PastEventSection2.css";

import PastEventCard2 from "./PastEventCard2";
import capacitorImg from "../assets/capacitor-img.jpg";
import goldenRecordImg from "../assets/golden-record-img.jpeg";
import assiutCollageFairImg from "../assets/assiut-collage-fair-img.jfif";

function PastEventSection2(props) {
  return (
    <section className="past-event-section-2">
      <h2 className="section-header">Our Past Events</h2>
      <PastEventCard2
        title="TEDxYouth@AssiutSTEM2019"
        subTitle="#Capacitor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        "
        imgURL={capacitorImg}
        path="../tedxassiutstem-2019"
      />{" "}
      <PastEventCard2
        title="TEDxYouth@AssiutSTEM2020"
        subTitle="#The_Golden_Record"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      "
        imgURL={goldenRecordImg}
        path="../tedxassiutstem-2020"
      />{" "}
      <PastEventCard2
        title="Assiut Collage fair"
        subTitle="#Control_Your_future"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    "
        imgURL={assiutCollageFairImg}
        path="../assiut-collage-fair"
      />
    </section>
  );
}
export default PastEventSection2;
