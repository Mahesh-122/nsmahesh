import React, {useEffect, useState} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {useCallback} from "react";
import particles from "../../assets/images/particles.jpg";
import "../particles/Particles.scss";
// import "./assets/css/style.css";
// import "./assets/css/owl.carousel.css";
// import "./assets/css/animate.css";

function Particless() {
  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },

      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#090909"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#64dffa",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    fullScreen: false,
    fpsLimit: 30,
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },

    retina_detect: true
  };
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);
  return (
    <div className="started-bg">
      <div
        className="slide"
        style={{backgroundImage: "url(" + particles + ")"}}
      >
        <Particles id="tsparticles" options={options} init={particlesInit} />
      </div>
    </div>
  );
}

export default Particless;
