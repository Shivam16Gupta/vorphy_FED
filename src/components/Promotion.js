import React from "react";
import "../assets/css/promotion.css";
import img1 from "../assets/images/Mockup-916x1024.png";
import img2 from "../assets/images/appStore.png";
import img3 from "../assets/images/play store.png";

function Promotion() {
  return (
    <div>
      <div className="promo">
        <div className="app">
          <img className="mock" src={img1} alt="" />
        </div>
        <div className="appdesc">
          <h3 style={{ color: "#E21F3A" }}>Download the app now</h3>
          <h1>
            See how you can use VORPHY to enhance student learning and
            understanding
          </h1>
          <p>
            VORPHY will take you to a fun, virtual-tour of activity based
            learning. Our XR experiences and simulations assists the child in
            grabbing the concepts concisely through a series of interactive real
            environment lessons.
          </p>
          <div className="stores">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
