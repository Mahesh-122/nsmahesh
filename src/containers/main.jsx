import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
// import StackProgress from "./skillProgress/skillProgress";
// import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
// import Blogs from "./blogs/Blogs";
// import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topButton/Top";
// import Twitter from "./twitter-embed/twitter";
// import Profile from "./profile/Profile";
import SplashScreen from "./SplashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import Particles from "../components/particles/Particles";
import Discription from "./discription/Discription";
import WorkExperience from "./workExperience/WorkExpercience";
import Course from "./course/Course";
// import "./Main.scss";

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
    <div className="page">
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Particles />
            <div className="container">
              {/* <Header /> */}
              <Greeting />
              <Discription />
              <WorkExperience />
              <Skills />
              <Course />
              <Education />
              <Projects />
              {/* <StackProgress />
            
           
          
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer /> */}
              <ScrollToTopButton />
            </div>
          </>
          )} 
        </StyleProvider>
      </div>
    </div>
  );
};

export default Main;
