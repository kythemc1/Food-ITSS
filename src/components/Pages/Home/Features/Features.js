import React from 'react';
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";

const Features = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 py-12' style={{ backgroundColor: `rgb(244 244 245)`}}>
           <div className='text-center mx-auto mb-5 md:mb-0'>
                <FaSearch className='mx-auto w-10 h-10 mb-4 color-red'/>
                <h4 className='text-2xl font-bold mb-1 text-black'>Tìm kiếm</h4>
                <p>Tìm kiếm nhà hàng</p>
            </div> 
           <div className='text-center mx-auto mb-5 md:mb-0'>
                <FaCheckCircle className='mx-auto w-10 h-10 mb-4 color-red'/>
                <h4 className='text-2xl font-bold mb-1 text-black'>Đánh giá</h4>
                <p>Xem đánh giá của nhà hàng</p>
            </div> 
           <div className='text-center mx-auto mb-5 md:mb-0'>
                <RiWechatLine className='mx-auto w-10 h-10 mb-4 color-red'/>
                <h4 className='text-2xl font-bold mb-1 text-black'>Liên hệ</h4>
                <p>Liên hệ với nhà hàng</p>
            </div> 
        </div>
    );
};

export default Features;