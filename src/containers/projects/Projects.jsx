import React, {useContext} from "react";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
import catering from "../../assets/images/catering.png";
import scraps from "../../assets/images/scraps.png";
import bookmela from "../../assets/images/bookmela.png";
import placeme from "../../assets/images/placeme.png";
import eventmatters from "../../assets/images/eventmatters.png";

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  // if (!skillsSection.display) {
  //   return null;
  // }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade bottom duration={1000}>
          <div className="section works" id="works-section">
            <div className="wrapper">
              <div className="title">Projects</div>

              <div className="row box-items">
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated">
                  <div className="image">
                    <a href="#popup-1" className="has-popup">
                      <img src={eventmatters} />
                    </a>
                  </div>
                  <div className="content-box">
                    <div className="category">Mockups</div>
                    <a href="#popup-1" className="name has-popup">
                      Tiny House
                    </a>
                    <p>Tiny House Project is a nonprofit organization...</p>
                  </div>
                  <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        {/* <img src="./img/eventmatters.png" alt=""> */}
                      </div>
                      <div className="desc">
                        <div className="category">Prototype</div>
                        <h4>Tiny House</h4>
                        <p>
                          Tiny House Project is a nonprofit organization that
                          provides shelter, housing and supportive services to
                          adults experiencing chronic homelessness in India.
                        </p>
                        {/* <a href="#" className="btn btn_animated"><span className="circle">View Project</span></a>  */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-m-12 col-t-6 col-d-4 box-item f-graphic animated">
                  <div className="image">
                    <a href="#popup-2" className="has-popup">
                      <img src={bookmela} />
                    </a>
                  </div>
                  <div className="content-box">
                    <div className="category">Prototype</div>
                    <a href="#popup-2" className="name has-popup">
                      Bookmela
                    </a>
                    <p>Bookmela is a website which will allow you to...</p>
                  </div>
                  <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src={bookmela} />
                      </div>
                      <div className="desc">
                        <div className="category">Prototype</div>
                        <h4>Bookmela</h4>
                        <p>
                          Bookmela is a website which will allow you to download
                          free books and one can upload books to the server
                        </p>
                        {/* <a href="#" className="btn btn_animated"><span className="circle">View Project</span></a>  */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated">
                  <div className="image">
                    <a href="#popup-3" className="has-popup">
                      <img src={catering} />
                    </a>
                  </div>
                  <div className="content-box">
                    <div className="category">Prototype</div>
                    <a href="#popup-3" className="name has-popup">
                      Catering
                    </a>
                    <p>
                      This website services like quality food delivery in
                      bulk...
                    </p>
                  </div>
                  <div id="popup-3" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src={catering} alt="" />
                      </div>
                      <div className="desc">
                        <div className="category">Prototype</div>
                        <h4>Catering</h4>
                        <p>
                          This website services like quality food delivery in
                          bulk for some events or occasions.
                        </p>
                        {/* <a href="#" className="btn btn_animated"><span className="circle">View Project</span></a>  */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated">
                  <div className="image">
                    <a href="#popup-4" className="has-popup">
                      <img src={scraps} alt="" />
                    </a>
                  </div>
                  <div className="content-box">
                    <div className="category">Prototype</div>
                    <a href="#popup-1" className="name has-popup">
                      Scraps
                    </a>
                    <p>This website allow you to sell you old product...</p>
                  </div>
                  <div id="popup-4" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        {/* <img src="./img/scraps.png" alt=""> */}
                      </div>
                      <div className="desc">
                        <div className="category">Prototype</div>
                        <h4>Scraps</h4>
                        <p>
                          This website allow you to sell you old product like
                          mobile, laptop, bike etc.
                        </p>
                        {/* <a href="#" className="btn btn_animated"><span className="circle">View Project</span></a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-graphic animated">
                  <div className="image">
                    <a href="#popup-5" className="has-popup">
                      <img src={placeme.png} alt="" />
                    </a>
                  </div>
                  <div className="content-box">
                    <div className="category">Prototype</div>
                    <a href="#popup-2" className="name has-popup">
                      Placeme
                    </a>
                    <p>Placeme is designed for students seeking for a job...</p>
                  </div>
                  <div id="popup-5" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        {/* <img src="./img/placeme.png" alt=""> */}
                      </div>
                      <div className="desc">
                        <div className="category">Prototype</div>
                        <h4>Placeme</h4>
                        <p>
                          Placeme is designed for students seeking for a job. In
                          this website one can search his desired job's and also
                          add a job for recruitment.
                        </p>
                        {/* <a href="#" className="btn btn_animated"><span className="circle">View Project</span></a>  */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated">
                  <div className="image">
                    <a href="#popup-6" className="has-popup">
                      <img src="./img/crypto.png" alt="" />
                    </a>
                  </div>
                  <div className="content-box">
                    <div className="category">Prototype</div>
                    <a href="#popup-3" className="name has-popup">
                      Crypto
                    </a>
                    <p>Crypto is a website which will provide information...</p>
                  </div>
                  <div id="popup-6" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        {/* <img src="./img/crypto.png" alt=""> */}
                      </div>
                      <div className="desc">
                        <div className="category">Prototype</div>
                        <h4>Crypto</h4>
                        <p>
                          Crypto is a website which will provide information
                          about Cryptocurrency market. The API is took from
                          bitbns website.
                        </p>
                        {/* <a href="#" className="btn btn_animated"><span className="circle">View Project</span></a>  */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col col-m-12 col-t-6 col-d-4 box-item f-graphic animated">
                <div className="image">
                  <a href="#popup-7" className="has-popup">
                    <img src="./img/ebay.png" alt="" />
                  </a>
                </div>
                <div className="content-box">
                  <div className="category">Prototype</div>
                  <a href="#popup-2" className="name has-popup">
                    Ebuy
                  </a>
                  <p>Ebuy is website where you can order...</p>
                </div>
                <div id="popup-7" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="./img/ebay.png" alt="">
                    </div>
                    <div className="desc">
                      <div className="category">Prototype</div>
                      <h4>Ebuy</h4>
                      <p>
                        Ebuy is website where you can order items online and
                        place the order
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
                {/* <div className="col col-m-12 col-t-6 col-d-4 box-item f-graphic animated">
                <div className="image">
                  <a href="#popup-8" className="has-popup">
                    <img src="./img/tracker.png" alt="" />
                  </a>
                </div>
                <div className="content-box">
                  <div className="category">Prototype</div>
                  <a href="#popup-2" className="name has-popup">
                    Tracker
                  </a>
                  <p>Tracker helps you to log the daily...</p>
                </div>
                <div id="popup-8" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="./img/tracker.png" alt="">
                    </div>
                    <div className="desc">
                      <div className="category">Prototype</div>
                      <h4>Tracker</h4>
                      <p>
                        Tracker helps you to log the daily task, it can be
                        workout or run etc
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
              {/* <div className="clear" style={{ textAlign: "right" }}>
              <h4>Blogs</h4>
              <a href="./blogs/blog.html">See More</a>
            </div> */}
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