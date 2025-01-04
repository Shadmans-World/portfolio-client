import React from 'react';
import Information from './Information/Information';
import AboutMe from './About Me/AboutMe';

const Home = () => {
    return (
        <div>
            {/* Information */}
            <Information/>
            <AboutMe/>
        </div>
    );
};

export default Home;