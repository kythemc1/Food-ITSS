import React, { useContext, useEffect, useState } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import './ServiceSingle.css';
import { AuthContext } from '../../../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceSingle = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData();
    const {_id, title, image_url, rating, location, amenities, details} = service;
    const [reviews, setReviews] = useState([]);
    const [starFilter, setStarFilter] = useState('all');
    const [likedItemList, setLikedItemList] = useState([]);

    // handle change liked item list
    const handleLikedItemList = (index) => {
        // check if existed => remove
        if (likedItemList.includes(index)) 
            setLikedItemList((prev) => prev.filter((e) => e !== index))
        else 
            setLikedItemList((prev) => [...prev, index])
    }

    console.log('====================================');
    console.log("likedItemList: ", likedItemList);
    console.log('====================================');

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

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`https://food-monster-server.vercel.app/reviews/${_id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
    
        fetchReviews();
    
        return () => {
            console.log("Cleanup useEffect");
        };
    }, [_id]);
    

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
                            <div className='w-full flex space-between md:w-6/12 my-2'>                             
                                 <FaLocationDot className='text-xl' style={{marginRight:"4px",marginTop:"-2px"}}/> {location}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-24 text-black bg-white pb-10'>
                {amenities ? <div>
                    <div className='mb-2'>
                    <h2 className='font-semibold text-2xl mb-3 pt-8'>About the business</h2>
                    {details?.specialties && 
                    <div className='my-2'>
                        <h2 className='font-semibold text-md mb-2'>Specialties</h2>
                        {details.specialties}    
                    </div>}
                    <div className="flex flex-wrap justify-center">
                    {Array(5).fill(0).map((_, index) => (
                        <div key={index} className=" shadow-xl w-48 mt-8 mr-8 rounded-lg">
                        <div className=  "w-48  rounded-lg border-1 border-zinc-200">
                            <img className="rounded-t-lg object-cover w-full h-48" src="https://mmmrecipes.com/wp-content/uploads/2024/05/Raspberry-Cheesecake-Cupcakes-vfh.png" alt="Shoes" />                    
                        </div>
                        <div className="text-black bg-zinc-100 " >
                            <h2 className="text-l">
                                Bun cha
                            </h2>
                            <div className='flex items-center '>
                            <BsStarFill className='star-color mr-1 '/><BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarFill className='star-color mr-1'/><BsStarHalf className='star-color mr-2'/> {service?.rating?.number}
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    {details?.history && 
                    <div className='my-2'>
                        <h2 className='font-semibold text-md mb-2'>History</h2>
                        {details.history}    
                    </div>}
                </div>
                </div> : <></>}
             </div>    
                <div className='px-24 text-black bg-zinc-100 pb-4'>
                    <h2 className='font-semibold text-2xl mb-3 pt-8 '>Reviews</h2>
                    <div>
                        {reviews ? reviews.map((review, index)=> 
                            <div key={review._id} className="card bg-white shadow-xl my-4">
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
                                    <div className="flex justify-end mb-2" onClick={() => handleLikedItemList(index)}>
                                        {likedItemList.includes(index) ? <FaHeart className= 'text-gray-400' /> : <FaHeart className= 'color-red'/>
}                                    </div>
                                </div>
                            </div>) : <h4>No review yet</h4>  
                        }
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