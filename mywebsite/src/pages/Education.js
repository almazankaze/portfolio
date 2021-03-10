import React from "react";
import Morton from "../images/morton.jpg";
import UIC from "../images/uic.jpg";

const Education = () => {
  return (
    <section className="resume-section" id="education">
      <h1>Education</h1>
      <div className="row">
        <div className="col">
          <img src={Morton} alt="morton college" />
          <h3>Morton College</h3>
          <div className="subheading">Associate's Degree</div>
          <div>Computer and Information Sciences and Support Services</div>
          <p>May 2017&emsp;GPA: 3.67</p>
        </div>
        <div className="divider"></div>
        <div className="col">
          <img src={UIC} alt="uic college" />
          <h3>University of Illinois at Chicago</h3>
          <div className="subheading">Bachelor's Degree</div>
          <div>Computer Science - Software Engineering</div>
          <p>December 2020&emsp;Major GPA: 3.48</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
