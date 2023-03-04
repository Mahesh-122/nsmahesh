import React, {useContext} from "react";
// import "./Skills.scss";
// import {skillsSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  // if (!skillsSection.display) {
  //   return null;
  // }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade bottom duration={1000}>
          <div className="wrapper">
            <div className="section skills" id="skills-section">
              <div className="title">Skills</div>
              <div className="row">
                <div className="col col-m-12 col-t-6 col-d-6">
                  <div className="content-box animated">
                    <div className="i_title">
                      <div className="icon">
                      <i className="fa fa-cog icon" aria-hidden="true"></i>
                      </div>
                      <div className="name">Professional</div>
                    </div>
                    <div className="skills">
                      <ul>
                        <li>
                          <div className="name">JavaScript</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "90%"}}>
                              <span className="percent">
                              <i className="fa fa-check icon" aria-hidden="true"></i>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="name">ReactJs</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "70%"}}>
                              <span className="percent">
                                <i
                                  className="fa fa-check icon"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="name">HTML</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "95%"}}>
                              <span className="percent">
                                <i
                                  className="fa fa-check icon"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="name">CSS</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "90%"}}>
                              <span className="percent">
                                <i
                                  className="fa fa-check icon"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="name">Node.js</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "25%"}}>
                              <span className="percent">
                                <i
                                  className="fa fa-check icon"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-6">
                  <div className="content-box animated">
                    <div className="i_title">
                      <div className="icon">
                      <i className="fa fa-user icon" aria-hidden="true"></i>
                      </div>
                      <div className="name">Personal</div>
                    </div>
                    <div className="skills">
                      <ul>
                        <li>
                          <div className="name">Communication</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "95%"}}>
                              <span className="percent">
                                <i
                                  className="fa fa-check icon"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="name">Team Work</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "90%"}}>
                              <span className="percent">
                                <i
                                  className="fa fa-check icon"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="name">Leadership</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "60%"}}>
                              <span className="percent">
                                <i
                                  className="fa fa-check icon"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="name">Creativity</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "90%"}}>
                              <span className="percent">
                                <i
                                  className="fa fa-check icon"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="name">Language</div>
                          <div className="progress">
                            <div className="percentage" style={{width: "72%"}}>
                              <span className="percent">
                                <i
                                  className="fa fa-check icon"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
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
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
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
