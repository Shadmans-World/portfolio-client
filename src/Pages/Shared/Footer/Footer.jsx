import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
        <div className='bg-deepOcean text-white py-4 text-center'>
             <p className='text-white'>&copy; {currentYear} Shadman. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;