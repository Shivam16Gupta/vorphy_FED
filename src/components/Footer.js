import React from "react";
import "../assets/css/footer.css";
import img1 from "../assets/images/logo.png";
import img2 from "../assets/images/appStore.png";
import img3 from "../assets/images/play store.png";
import img4 from "../assets/images/payment.png";
import img5 from "../assets/images/apeejay_satya.png";
import img6 from "../assets/images/driiv.png";
import img7 from "../assets/images/gnoit.jpeg";
import img8 from "../assets/images/startup.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="section1">
        <img src={img1} alt="" className="complog" />
        <div>
        <img src={img2} alt="" className="apstore" />
        <img src={img3} alt="" className="pstore" />
        </div>
        <span>+91 93558 75283</span>  
        <span>saksham.saini@vorphy.com </span> 
        <span>Payment Method</span>     
          <img src={img4} alt="" className="pay" />
        </div>
        <div className="section2">
          
        <span className="">For Kidz</span> 
        <span>Cardsly </span>
        <span>Magical Book </span>
        <span>For Champ </span>
        <span>(Coming Soon) </span>
        <span>Class 9 </span>
        <span>Class 10</span>
        <span>Class 11 </span>
        <span>Class 12</span>
        </div>
        <div className="section3">For Junior 
        
        <span>Class 6 </span>
        <span>Class 7 </span>
        <span>Class 8</span>
        </div>
        <div className="section4">
        Our Partners 
        <div><img src={img5} alt="" className="partners part1" />
        <img src={img6} alt="" className="partners part2" />
        <img src={img7} alt="" className="partners part3" /></div>
        Recognized By:
        <img src={img8} alt="" className="gov" />
        </div>
      </div>
      <div className="copyright">
        Copyright © 2022 Vorphy | Powered by Vorphy 
        Privacy Policy Terms &
        Condition
      </div>
    </div>
  );
}

export default Footer;
