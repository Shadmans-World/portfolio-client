import React from 'react';
import Information from './Information/Information';
import AboutMe from './About Me/AboutMe';
import Skills from './Skills/Skills';
import Education from './Education/Education';

const Home = () => {
    return (
        <div>
            {/* Information */}
            <Information/>
            <AboutMe/>
            <Skills/>
            <Education/>
        </div>
    );
};

export default Home;