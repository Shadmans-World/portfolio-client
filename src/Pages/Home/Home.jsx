import React from 'react';
import Information from './Information/Information';
import AboutMe from './About Me/AboutMe';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
          
            <Information/>
            <AboutMe/>
            <Skills/>
            <Education/>
            <Projects/>
        </div>
    );
};

export default Home;