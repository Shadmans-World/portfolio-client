import React from 'react';
import Information from './Information/Information';
import AboutMe from './About Me/AboutMe';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            {/* Information */}
            <Information/>
            <AboutMe/>
            <Skills/>
        </div>
    );
};

export default Home;