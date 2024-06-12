import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-14 p-16 bg-white'>
            <div className="card bg-base-100 shadow-xl items-center" style={{ backgroundColor: `rgb(244 244 245)`}}>
                <div className="card-body w-full md:w-10/12">
                    <h2 className="card-title mx-auto text-2xl mb-3 text-black">Bạn là chủ nhà hàng?</h2>
                    <p className='text-center mb-5'>Liên hệ vói nhiều khách hàng hơn</p>
                    <div className="card-actions justify-center">
                    <button className="w-full btn ">Tham gia ngay</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl items-center" style={{ backgroundColor: `rgb(244 244 245)`}}>
                <div className="card-body w-full md:w-10/12">
                    <h2 className="card-title mx-auto text-2xl mb-3 text-black">Về Food Monster</h2>
                    <p className='text-center mb-5'>Dễ dàng tìm kiếm Nhà hàng gần đây thật dễ dàng với eats-usa. Tìm kiếm trên trang web của chúng tôi để kết nối ngay với Nhà hàng gần đây.
.</p>
                    <div className="card-actions justify-center">
                    <button className="w-full btn">Xem ngay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;