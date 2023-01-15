import React from "react";
import "../assets/css/aboutus.css";
import img1 from "../assets/images/MicrosoftTeams-image-2.png";
import img2 from "../assets/images/MicrosoftTeams-image-1.png";

function AboutUs() {
  return (
    <div>
      <div className="about">
        <div className="imgs">
          <img src={img1} alt="" className="mt1"/>
          <img src={img2} alt="" className="mt2"/>
        </div>
        <div className="content">
          <span className="heading">About Us</span>
          <span className="topic">Changing The Reality!</span>
          <p className="desc">
            We at VORPHY are providing you with an incredibly engaging simulated
            learning environment where the students can equip their stem-based
            curriculum according to new NEP guidelines with revolutionary
            virtual experiences via XR.
          </p>
          <p className="desc">
            Extended Reality often referred to as XR includes the combination of
            Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality
            (MR). It extends your reality by simulating the real environment
            using accessible sensors, networks, and shared online virtual
            worlds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
