import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Education from "./education/Education";
import ScrollToTopButton from "./topButton/Top"
import SplashScreen from "./SplashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import Particles from "../components/particles/Particles";
import Discription from "./discription/Discription";
import WorkExperience from "./workExperience/WorkExpercience";
import Course from "./course/Course";
import Footer from "../components/footer/Footer";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  

  return (
    <>
    {isShowingSplashAnimation && splashScreen.enabled ? (
      <SplashScreen />
    ) : (
      <div className="page" id="home-section">
        <div className={isDark ? "dark-mode" : null}>
          <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
            <>
              <Particles />
              {/* <Header /> */}
              <div className={isDark ? "dark-menu container" : "container"}>
                <Greeting />
                <Discription />
                <WorkExperience />
                <Skills />
                <Course />
                <Education />
                <Projects />
                <Footer />
                <ScrollToTopButton />
              </div>
            </>
          </StyleProvider>
        </div>
      </div>
    )}
  </>
  );
};

export default Main;
