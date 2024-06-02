import React from 'react';
import BgImage from '../../../../assets/images/blog-banner.jpg'

const BlogBanner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("${BgImage}")` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="my-16">
                    <h1 className="mb-5 text-5xl font-bold">Our Blog</h1>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;