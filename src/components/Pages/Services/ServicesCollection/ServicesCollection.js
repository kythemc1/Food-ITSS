import React, { useEffect, useState } from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCollection = () => {
    const services = useLoaderData();

    return (
        <div className='pb-16 pt-16 bg-white'>
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
                                    {service.title}
                                    </h2>
                                    <div className='flex items-center'>
                                    <BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarHalf className='star-color mr-2'/> {service?.rating?.number}
                                    </div>
                                    <p>{service.details.specialties.slice(0, 100) + '...'}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/services/${service._id}`} className="badge" style={{
                                        ":hover": {
                                            backgroundColor: "#FF3A44",
                                            opacity: 0.8,
                                            cursor: "pointer"
                                        }
                                    }}>More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesCollection;