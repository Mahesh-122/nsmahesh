import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import profile from "../../assets/images/profilepicture.jpg";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div id="section">
        <div className="st-box">
          <div className="st-image">
            <img src={profile} alt="" />
          </div>
          <div className="st-title">N S Mahesh</div>
          <div className="st-subtitle">Frontend Developer</div>
          <SocialMedia />
          {/* <div className="st-soc">
						<a target="blank" href="https://www.facebook.com/mahesh.naik.1614/" className="btn_animated">
							<span className="circle"><i className="icon ion ion-logo-facebook"></i></span>
						</a>
						<!-- <a target="blank" href="https://github.com/Mahesh-122" className="btn_animated">
							<span className="circle"><i className="icon ion ion-logo-github"></i></span>
						</a> -->
						<a target="blank" href="https://twitter.com/mahinaik123" className="btn_animated">
							<span className="circle"><i className="icon ion ion-logo-twitter"></i></span>
						</a>
						<a target="blank" href="https://www.linkedin.com/in/n-s-mahesh-a29550191/" className="btn_animated">
							<span className="circle"><i className="icon ion ion-logo-linkedin"></i></span>
						</a>
						<a target="blank" href="https://mailto:maheshnaik122@gmail.com" className="btn_animated">
							<span className="circle"><i className="icon ion ion-logo-google"></i></span>
						</a>
						<a target="blank" href="https://www.instagram.com/n_s_mahesh/" className="btn_animated">
							<span className="circle"><i className="icon ion ion-logo-instagram"></i></span>
						</a>
						
					</div> */}
        </div>
      </div>
      {/* <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
           
          </div>
        </div>
      </div> */}
    </Fade>
  );
}
