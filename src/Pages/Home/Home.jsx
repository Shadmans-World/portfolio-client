import React from "react";
import Information from './Information/Information';
import AboutMe from './About Me/AboutMe';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Shadman</title>
            </Helmet>
            <div id="information">
                <Information />
            </div>
            <div id="about">
                <AboutMe />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="education">
                <Education />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
