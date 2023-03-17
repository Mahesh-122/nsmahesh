import React, {useContext, useState} from "react";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import Button from "../button/Button";
import {
  greeting
  // workExperiences,
  // skillsSection,
  // openSource,
  // blogSection,
  // talkSection,
  // achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  // const viewExperience = workExperiences.display;
  // const viewOpenSource = openSource.display;
  // const viewSkills = skillsSection.display;
  // const viewAchievement = achievementSection.display;
  // const viewBlog = blogSection.display;
  // const viewTalks = talkSection.display;

  return (
    <>
      <header>
        <div className={isOpen ? "top-menu active" : "top-menu "}>
          <ul className={isDark ? "dark-menu " : "menu"}>
            <li className="active">
              <a className="btn_animated" href="#home-section">
                <span className="circle">
                  <span
                    className="ink animate"
                    style={{
                      height: "300px",
                      width: "300px",
                      top: "-113px",
                      left: "145px"
                    }}
                  ></span>
                  Home
                </span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#about-section">
                <span className="circle">About</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#experience-section">
                <span className="circle">Experience</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#skills-section">
                <span className="circle">Skills</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#course-section">
                <span className="circle">course</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#education-section">
                <span className="circle">Education</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#works-section">
                <span className="circle">Projects</span>
              </a>
            </li>
            {/* <li>
						<a className="btn_animated" href="#blog-section"><span className="circle">Blogs</span></a>
					</li>  */}
          </ul>
          <a href="#" className="menu-btn" onClick={ToggleSidebar}>
            <span></span>
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
