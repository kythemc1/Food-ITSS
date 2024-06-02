import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarProfile from '../components/Pages/User/SidebarProfile/SidebarProfile';
import UserPageBanner from '../components/Pages/User/UserPageBanner/UserPageBanner';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';

const User = () => {
    return (
        <div>
            <Header></Header>
            <UserPageBanner></UserPageBanner>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-3/12'>
                    <SidebarProfile></SidebarProfile>
                </div>
                <div className='w-full md:w-9/12 my-10 mx-10'>
                    <Outlet></Outlet>
                </div> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default User;