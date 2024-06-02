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
        <div className='my-8 md:my-16 mx-8 md:mx-0'>
            <div className='text-center my-12'>
                <h2 className='text-4xl font-bold color-red'>Popular this month in your city</h2>
                <p className='text-gray-500 pt-5'>The easiest way to your favorite food</p>
            </div>
            <div className='mx-auto md:w-11/12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service=><div key={service._id}>
                            <div className="card serviceCard w-full md:mx-0 bg-base-100 shadow-xl">
                                <PhotoProvider>
                                    <PhotoView key={service._id} src={service.image_url}>
                                        <figure><img src={service.image_url} alt="Shoes" /></figure>
                                    </PhotoView>
                                </PhotoProvider>
                                <div className="card-body">
                                    <h2 className="card-title text-xl">
                                    {service?.title}
                                    </h2>
                                    <div className='flex items-center'>
                                    <BsStarFill className='color-red mr-1'/><BsStarFill className='color-red mr-1'/><BsStarFill className='color-red mr-1'/><BsStarFill className='color-red mr-1'/><BsStarHalf className='color-red mr-2'/> {service?.rating?.number}
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-sm flex items-center mr-3'><RiEBike2Fill className='color-red mr-2'/>{service?.amenities?.delivery}</span>
                                        <span className='text-sm flex items-center'><IoCart className='color-red mr-2'/>{service?.amenities?.takeout}</span>
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
                    <Link to="/services" className='btn red-button'>Load More</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;