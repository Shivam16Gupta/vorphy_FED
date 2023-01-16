import React from "react";
import "../assets/css/landing.css";
import img1 from "../assets/images/slide1-1-1-1.jpg";
import img4 from "../assets/images/Vorphy_Champs.jpg";
import img3 from "../assets/images/Vorphy_Junior.jpg";
import img2 from "../assets/images/Vorphy_Kidz.jpg";

function Landing() {
  return (
    <div>
      <div className="landing">
        <div id="slideshow">
          <div className="slide-wrapper">
            <div className="slide">
              <div className="slide-number">
                <p className="para1">
                  <h1 className="org" style={{ color: "#E21F3A" }}>VORPHY</h1>
                  Vorphy is a simple, engaging, and interactive learning App for
                  kids studying in Kindergarten to K-12, focusing on STEM-based
                  learning using Extended Reality and Mixed reality. It works on
                  the basis of creating a virtual world – real or fictional –
                  that users can see and interact with.
                </p>
              </div>
              <img src={img1} alt="" className="src" />
            </div>
            <div className="slide">
              <div className="slide-number">
                <p className="para2">
                  <h3>VORPHY FOR KIDS</h3>A division of Vorphy helps kids in
                  building the basis of early education with our different
                  variants like cards, AR books, and washable books we at vorphy
                  focus on giving the best content to kids in the age group 2-10
                  years of age.
                </p>
              </div>
              <img src={img2} alt="" className="src" />
            </div>
            <div className="slide">
              <div className="slide-number">
                <p className="para3">
                  <h3>VORPHY FOR JUNIORS</h3>
                  Vorphy junior targets the K-8 segment, using our AR and
                  VR-driven content based on our current NEP-2020 policy we are
                  creating content that will change the future of learning in a
                  most innovative manner.
                </p>
              </div>
              <img src={img3} alt="" className="src" />
            </div>
            <div className="slide">
              <div className="slide-number">
                <p className="para4">
                  <h3>VORPHY FOR CHAMPS</h3> Vorphy Champs work on the k-8 to
                  k-12 segment in initializing the advanced form of knowledge
                  using a stem-based curriculum in VR it engages the student to
                  explore the unexplored (Coming Soon).
                </p>
              </div>
              <img src={img4} alt="" className="src" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
