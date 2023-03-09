import React, {useContext} from "react";
import "../discription/Discription.scss";
import "../../assets/scss/Basic.scss";
// import "../../assets/scss/Layout.scss";
import emoji from "react-easy-emoji";
// import SoftwareSkill from "../../components/softwareDiscription/SoftwareSkill";
import {DiscriptionSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal"; // import codingPerson from "../../assets/lottie/codingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Discription() {
  const {isDark} = useContext(StyleContext);
  if (!DiscriptionSection.display) {
    return null; 
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="wrapper">
        <Fade bottom duration={1000}>
          <div className="section about" id="about-section">
            <div className="content-box d-flex">
              <div className="row ">
                <div className="col col-m-12 col-t-5 col-d-5">
                  <div className="info-list">
                    <ul>
                      <li>
                        <strong>
                          <span>Job:</span>
                        </strong>{" "}
                        Frontend Developer
                      </li>
                      <li>
                        <strong>
                          <span>Address:</span>
                        </strong>{" "}
                        Bangalore, Karnataka
                      </li>
                      <li>
                        <strong>
                          <span>Phone:</span>
                        </strong>{" "}
                        <a href="tel:9663054850">+91 9663054850</a>
                      </li>
                      <li>
                        <strong>
                          <span>E-mail:</span>
                        </strong>{" "}
                        <a href="mailto:maheshnaik122@gmail.com">
                          maheshnaik122@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col col-m-12 col-t-7 col-d-7">
                  <div className="text-box">
                    <p>
                      <strong>Hello! I’m N S Mahesh</strong>
                      <span className="wave-emoji">{emoji("👋")}</span>
                    </p>
                    <p>
                      Looking for a challenging career and be a part of
                      progressive organization that gives a scope to enhance my
                      knowledge and utilizing my skills towards the growth of
                      the organization.
                    </p>
                    <p>
                      I, N S Mahesh, hereby declare that the information
                      contained herein is true and correct to the best of my
                      knowledge and belief.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </Fade>
        {/* <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {DiscriptionSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {DiscriptionSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {DiscriptionSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade> */}
      </div>
    </div>
  );
}
