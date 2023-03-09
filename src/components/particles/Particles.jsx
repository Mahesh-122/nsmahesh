import React, {useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {useCallback} from "react";
import particles from "../../assets/images/particles.jpg";
import "../particles/Particles.scss";

function Particless() {
  const options = {
    particles: {
      number: {
        value: 75,
        density: {
          enable: false,
          value_area: 1000,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
        width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: '../images/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40 ,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.7,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    fullScreen: false,
    fpsLimit: 30,
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },

    retina_detect: true
  };
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Fade triggerOnce>
      <div className="started-bg" id="cursourpoint">
        <div
          className="slide"
          style={{backgroundImage: "url(" + particles + ")"}}
        >
          <Particles id="tsparticles" options={options} init={particlesInit} />
        </div>
      </div>
    </Fade>
  );
}

export default Particless;
