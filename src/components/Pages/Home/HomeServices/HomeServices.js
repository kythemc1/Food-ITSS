import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import './HomeServices.css';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';



const HomeServices = () => {
    const services = useLoaderData();
    
    return (
        <div className=' bg-white p-4'>
            <div className='text-center my-12'>
                <h2 className='text-4xl font-bold text-black'>Gợi ý cho bạn</h2>
                <p className='text-black-500 pt-5'>Dễ dàng tìm dược món ăn yêu thích</p>
            </div>
            <div className='mx-auto md:w-11/12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service=><div key={service._id}>
                            <div className="card serviceCard w-full md:mx-0 bg-zinc-100 shadow-xl">
                                <PhotoProvider>
                                    <PhotoView key={service._id} src={service.image_url}>
                                        <figure><img src={service.image_url} alt="Shoes" /></figure>
                                    </PhotoView>
                                </PhotoProvider>
                                <div className="card-body text-black">
                                    <h2 className="card-title text-xl">
                                    {service?.title}
                                    </h2>
                                    <div className='flex items-center'>
                                    <BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarHalf className='star-color mr-2'/> {service?.rating?.number}
                                    </div>
                                    <p>{service.details.specialties.slice(0, 100) + '...'}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/services/${service._id}`} className="badge">More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className='text-center mt-10'>
                    <Link to="/services" className='btn red-button'>Xem thêm</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;