import React, { useContext } from 'react';
import { FaAd, FaUserEdit } from 'react-icons/fa';
import { MdOutlineRateReview } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import './SidebarProfile.css'

const SidebarProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='my-8'>
            <div className='text-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        {user?.photoURL && <img src={user?.photoURL}  alt="user"/>}                       
                    </div>
                </div>
                <h4 className='text-xl font-bold mt-2'>{user?.displayName && user?.displayName}</h4>
            </div>
            <div className='mt-5'>
                <ul className="menu bg-base-100 w-full md:w-64 p-2 md:mx-auto rounded-box">
                    <li className='mb-3'>
                        <NavLink to='/edit-profile' className="sidebar-nav">
                        <FaUserEdit className='h-5 w-5'/>
                        Edit profile
                        </NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink to='/add-service' className="sidebar-nav">
                        <FaAd className='h-5 w-5'/>
                        Add service
                        </NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink to='/my-reviews' className="sidebar-nav">
                        <MdOutlineRateReview className='h-5 w-5'/>
                        My reviews
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SidebarProfile;