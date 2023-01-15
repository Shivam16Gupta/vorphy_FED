import React from "react";
import "../assets/css/chooseus.css";
import img1 from "../assets/images/Conceptual-Learning.jpg";
import img2 from "../assets/images/Activity-Based-Learning.jpg";
import img3 from "../assets/images/Experiential Learning.png";
import img4 from "../assets/images/Assessment Based.png";

function ChooseUs() {
  return (
    <div>
      <div className="choose">
        <div className="offers">
          <h1>Conceptual Learning</h1>
          <p>
            Focusing on building concepts by relating them to the real-world
            experience through our content in Augmented Reality (AR)
          </p>
          <img src={img1} alt="" />
          <p>
            Testimonial My daughter used to spend nearly 5-6 hours every day in
            learning the simplest of concepts, but she used to always complain
            of not remembering them. Thanks to Practically’s immersive 3D
            videos, her retention rate has improved significantly and she is
            absolutely happy about it Priyanka Agarwal Parent of Nidhi Agarwal,
            6th Grade
          </p>
        </div>
        <div className="offers">
          <h1>Activity Based Learning</h1>
          <p>
            VORPHY provides rich and varied 3D simulations that encourage
            students to actively participate in the learning-by-doing process.
          </p>
          <img src={img2} alt="" />
          <p>
            Testimonial Vorphy focuses on improving my sons’ concentration and
            has enhanced his skill to think beyond what is expected. My child
            has grown in a way he never had with traditional learning. I am so
            pleased and confined now with this new way of learning any child can
            grab the maximum output. Preeti Singh Parent of Keshav Singh, 6th
            Grade
          </p>
        </div>
        <div className="offers">
          <h1>Experiential Learning</h1>
          <p>
            Participant-centered, active learning that engages all learners in
            emotionally engaging learning experiences such as science
            experiments & art projects.
          </p>
          <img src={img3} alt="" />
          <p>
            Testimonial Vorphy has enabled my child to grab the information in a
            more realistic way. Through augmented reality-based modules it’s
            easy for my daughter to catch and revise the stuff. Moreover, they
            have created small lesson plans which are engaging and interactive
            so that students should not get tired. Ishani Bansal Parent of
            Sonali Bansal, 6th Grade
          </p>
        </div>
        <div className="offers">
          <h1>Assessment Based</h1>
          <p>
            Test based learning that involves engaging the students with
            immersive experiences. VORPHY provides real-time feedback to the
            child through active-learning components.
          </p>
          <img src={img4} alt="" />
          <p>
            Testimonial My Son lacks concentration in school but with the Vorphy
            app he is able to relate to his subject.Vorphy has made math easy
            with its interactive 3d activities Rakshita Jain Parent of Aayushi
            Jain, 6th Grade
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
