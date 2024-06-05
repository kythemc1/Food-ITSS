import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../assets/images/home-banner.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero home-hero text-start ml-0 bgcolor-white" style={{ backgroundImage: `url("${image}")`}}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content ml-20 my-28 text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-4xl font-bold text-black">Thưởng thức theo cảm nhận của bạn</h1>
                    <h1 className="mb-5 text-3xl font-bold color-red">Nhanh chóng - Tiện lợi</h1>
                    {/* <p className="mb-5">The meals you love, delivered with care</p> */}
                    <Link to="/signup" className="btn">Bắt đầu</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;