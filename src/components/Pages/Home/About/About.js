import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-14 p-16 bg-white'>
            <div className="card bg-base-100 shadow-xl items-center" style={{ backgroundColor: `rgb(244 244 245)`}}>
                <div className="card-body w-full md:w-10/12">
                    <h2 className="card-title mx-auto text-2xl mb-3 text-black">Are You A Local Restaurant?</h2>
                    <p className='text-center mb-5'>Connect With More Clients</p>
                    <div className="card-actions justify-center">
                    <button className="w-full btn ">Join Food Monster today</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl items-center" style={{ backgroundColor: `rgb(244 244 245)`}}>
                <div className="card-body w-full md:w-10/12">
                    <h2 className="card-title mx-auto text-2xl mb-3 text-black">About Food Monster</h2>
                    <p className='text-center mb-5'>CFinding Local Restaurants is easy with eats-usa. Search our website to instantly connect with Local Restaurants.</p>
                    <div className="card-actions justify-center">
                    <button className="w-full btn">Get listed today</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;