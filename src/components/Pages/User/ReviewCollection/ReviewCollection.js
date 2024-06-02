import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import './ReviewCollection.css';
import toast, { Toaster } from 'react-hot-toast';

const ReviewCollection = () => {
    const {user} = useContext(AuthContext);
    const [userReviews, setUserReviews] = useState([]);
    useEffect(()=>{
        fetch(`https://food-monster-server.vercel.app/${user?.uid}/reviews`)
        .then(res=>res.json())
        .then(data=> setUserReviews(data))
    },[userReviews])


    const handleDelete = (_id) => {
        fetch(`https://food-monster-server.vercel.app/reviews/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            toast.error('Review Deleted')
        })
    }


    return (
        <div>
            <h2 className='text-3xl font-semibold mb-5'>My Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Restaurant Name</th>
                        <th>Review</th>
                        <th>Reviewer</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {userReviews.map(userRev=> 
                        <tr key={userRev._id}>
                        <th>
                        <button onClick={()=>handleDelete(userRev._id)} className="btn btn-circle red-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            <Toaster />
                        </button>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="w-12 h-12">
                                <img src={userRev?.serviceImgURL} alt="ServiceImage" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{userRev?.serviceTitle}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {userRev?.details}
                        </td>
                        <td><b>{userRev?.userName}</b></td>
                        <td>
                            <Link className='btn red-button'>Edit review</Link>
                        </td>
                        </tr>
                    )
                        }
                    
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewCollection;