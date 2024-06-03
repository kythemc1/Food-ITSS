import React, { useContext, useEffect, useState } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import './ServiceSingle.css';
import { AuthContext } from '../../../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const ServiceSingle = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData();
    const {_id, title, image_url, rating, location, amenities, details} = service;
    const [reviews, setReviews] = useState([]);
    const [starFilter, setStarFilter] = useState('all');

const handleStarFilter = (event) => {
    setStarFilter(event.target.value);
};

const filteredReviews = reviews.filter((review) => {
    if (starFilter === 'all') {
        return true;
    } else {
        const rating = review.rating;
        if (starFilter === '5') {
            return rating === 5;
        } else if (starFilter === '4') {
            return rating === 4;
        } else if (starFilter === '3') {
            return rating === 3;
        } else if (starFilter === '2') {
            return rating === 2;
        } else if (starFilter === '1') {
            return rating === 1;
        }
    }
});

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const data = {
            userId: user.uid,
            userName: user.displayName,
            userImg: user.photoURL,
            serviceId: _id,
            serviceTitle: title,
            serviceImgURL: image_url,
            details: review
        }
        fetch('https://food-monster-server.vercel.app/reviews/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                toast.success('Review Added Successfully')
                form.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(()=>{
    fetch(`https://food-monster-server.vercel.app/reviews/${_id}`)
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[reviews])

    



    return (
        <div>
            <div className="hero hero-service " style={{ backgroundImage: `url("${image_url}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content ml-20 text-neutral-content">
                    <div className="my-16 text-white">
                        <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
                        <div className='flex items-center text-xl font-semibold '>
                            <BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarHalf className='star-color mr-2'/> {rating?.number}
                        </div>
                        <div className='pt-10'>
                            {/* <h2 className='font-semibold text-xl '></h2> */}
                            <div className='w-full md:w-6/12 my-2'>                             
                                <div> <FaLocationDot/> {location}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-24 text-black bg-white'>
                {amenities ? <div>
                    <div className='mb-2'>
                    <h2 className='font-semibold text-2xl mb-3 pt-8'>About the business</h2>
                    {details?.specialties && 
                    <div className='my-2'>
                        <h2 className='font-semibold text-md mb-2'>Specialties</h2>
                        {details.specialties}    
                    </div>}
                    {details?.history && 
                    <div className='my-2'>
                        <h2 className='font-semibold text-md mb-2'>History</h2>
                        {details.history}    
                    </div>}
                </div>
                <div className="divider"></div>
                </div> : <></>}
                
                
                <div className='pb-8 bg-white'>
                    <h2 className='font-semibold text-2xl pb-8 '>Reviews</h2>
                    <div>
                        {reviews ? reviews.map(review=> 
                            <div key={review._id} className="card bg-zinc-100 shadow-xl my-4">
                                <div className="card-body">
                                    <>  
                                        <p className="card-title text-sm">
                                            <div className="avatar ">
                                                <div className="w-8 rounded-full border-2 border-zinc-200 ">
                                                    <img src={review.userImg} alt=""/>
                                                </div>
                                            </div>
                                            {review.userName} <BsStarFill className='star-color'/><BsStarFill className='star-color'/><BsStarFill className='star-color'/><BsStarFill className='star-color'/><BsStarHalf className='star-color'/>
                                        </p>
                                    </>
                                    <p>{review.details}</p>
                                    <div className="flex justify-end mb-2">
                                        <FaHeart className= 'text-gray-400'/>
                                    </div>
                                </div>
                            </div>) : <h4>No review yet</h4>  
                        }
                    </div>
                </div>
                {/* <div className="divider"></div>
                <div className='mb-5'>
                    <h2 className='font-semibold text-2xl my-3'>Add Reviews</h2>
                    {
                    user?.uid ? 
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4 w-full md:w-6/12">
                            <textarea className="textarea textarea-bordered" name='review' placeholder="Write review"></textarea>
                        </div>
                        <input type="submit" className='btn red-button' value="Submit review" />
                        <Toaster />
                    </form>: 
                    <Link to="/login" className='btn red-button'>You must login to add a review</Link> 
                    
                    }
                    
                </div> */}
            </div>
        </div>
    );
};

export default ServiceSingle;