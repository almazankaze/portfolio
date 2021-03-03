import React from "react";

const Experience = () => {
  return (
    <section className="resume-section" id="experience">
      <h1>Experience</h1>

      <div className="experience-container">
        <div className="job">
          <h2>Customer Service</h2>
          <div className="subheading">Best Buy - Sep 2014 to Jan 2021</div>
          <p>
            Provided face-to-face customer service to company clients by
            handling inquiries, transactions, and returns. This included
            introducing and selling company product and services, creating and
            managing client orders, and providing basic technical support for a
            wide range of company products.
          </p>
        </div>

        <div className="job">
          <h2>Shift Leader</h2>
          <div className="subheading">Dunkin Donuts - Jun 2009 to Apr 2012</div>
          <p>
            Managed all aspects of day-to-day operations which included
            supervision and instructing company crew members, coordinating
            facility maintenance, monitoring inventory levels and ordering to
            meet demands, and ensuring new products and components were
            introduced and representable according to company guidelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
