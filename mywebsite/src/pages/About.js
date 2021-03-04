import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import ResumePic from "../images/resumeImg.png";
import CatImg from "../images/cat.jpg";
import Resume from "../johnResume.pdf";

const resumeIcon = {
  backgroundImage: "url(" + ResumePic + ")",
  backgroundSize: "25px",
  backgroundRepeat: "no-repeat",
  display: "inline-block",
  position: "relative",
  width: "25px",
  height: "25px",
};

const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="about-content">
        <div className="about-left">
          <div className="about-info">
            <h1>John Almazan</h1>
            <div className="subheading">
              Cicero, IL 60804 ·
              <a
                style={{ textTransform: "lowercase" }}
                href="mailto:almazanjohn20@gmail.com"
              >
                {" "}
                almazanjohn20@gmail.com
              </a>{" "}
              ·
              <a
                style={resumeIcon}
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                {null}
              </a>
            </div>

            <p>
              Hello! My name is John! I am a motivated and personable individual
              with an Associate's degree in Computer Information Systems and a
              Bachelor's degree in Computer Science. I love technology and
              especially love troubleshooting, solving problems, and
              interpreting client needs so that I can complete a task
              efficiently and have created a product that will benefit the end
              user.
            </p>
            <p>
              Besides that, I am always keeping up with the latest technology
              and look forward to learning something new that I can incorporate
              in my next project.
            </p>
          </div>

          <ul>
            <li className="list-social-icons">
              <a
                href="https://linkedin.com/in/john-almazan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="list-social-icons">
              <a
                href="https://github.com/almazankaze"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="list-social-icons">
              <a href="/">
                <AiFillFacebook />
              </a>
            </li>
            <li className="list-social-icons">
              <a href="/">
                <AiFillYoutube />
              </a>
            </li>
          </ul>
        </div>

        <img src={CatImg} alt="me and my cat"></img>
      </div>
    </section>
  );
};

export default About;
