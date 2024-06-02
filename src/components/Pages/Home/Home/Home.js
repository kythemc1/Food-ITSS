import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <HomeServices></HomeServices>
            <Features></Features>
            <About></About>
        </div>
    );
};

export default Home;