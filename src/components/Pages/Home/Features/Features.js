import React from 'react';
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";

const Features = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 py-12' style={{ backgroundColor: `#F7F7F7`}}>
           <div className='text-center mx-auto mb-5 md:mb-0'>
                <FaSearch className='mx-auto w-10 h-10 mb-4 color-red'/>
                <h4 className='text-2xl font-bold mb-1'>Search</h4>
                <p>Search Restaurants</p>
            </div> 
           <div className='text-center mx-auto mb-5 md:mb-0'>
                <FaCheckCircle className='mx-auto w-10 h-10 mb-4 color-red'/>
                <h4 className='text-2xl font-bold mb-1'>Review</h4>
                <p>Compare Restaurants You Find</p>
            </div> 
           <div className='text-center mx-auto mb-5 md:mb-0'>
                <RiWechatLine className='mx-auto w-10 h-10 mb-4 color-red'/>
                <h4 className='text-2xl font-bold mb-1'>Connect</h4>
                <p>Contact Restaurants You Like</p>
            </div> 
        </div>
    );
};

export default Features;