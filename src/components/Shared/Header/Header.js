import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../logo.png';
import avatar from '../../../assets/images/user.png';
import { AuthContext } from '../../../context/AuthProvider';
import './Header.css';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOutUser()
        .then(()=>{
            navigate("/");
        })
        .catch(error=> console.error(error))
    }

    return (
        <div className="navbar px-6 py-4 lg:px-20 bgcolor-white">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="color-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bgcolor-white color-black rounded-box w-52">
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to="/services"><li>Services</li></NavLink>
                        {/* <NavLink to="/blog"><li>Blog</li></NavLink>
                        <NavLink to="/contact"><li>Contact Us</li></NavLink>
                        <NavLink to="/login"><li>Login</li></NavLink>
                        <NavLink to="/signup"><li>SignUp</li></NavLink> */}
                    </ul>
                </div>
                <div className='flex'>
                    <img className='ml-3 lg:ml-0' src={logo} alt="" />
                    <NavLink className="btn btn-ghost color-black font-bold text-xl lg:text-2xl">Food Monster</NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                <NavLink to="/" className='mr-4 font-semibold color-black'><li>Home</li></NavLink>
                    <NavLink to="/services" className='mr-4 font-semibold color-black '><li>Services</li></NavLink>
                    {/* <NavLink to="/blog" className='mr-4 font-semibold'><li>Blog</li></NavLink> */}
                </ul>
            </div>
            <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {user?.photoURL ? <img src={user.photoURL} alt="" /> :  <img src={avatar} alt="User" />}
                    </div>
                </label>
                {/* {
                    user?.uid ? 
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <NavLink to="/edit-profile" className="justify-between bg-transparent text-black">
                            Profile
                        </NavLink>
                        </li>
                        <li onClick={handleSignOut}><NavLink className="bg-transparent text-black">Logout</NavLink></li>
                    </ul> : <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bgcolor-white rounded-box w-52">
                        <li>
                        <NavLink to="/login" className="justify-between bg-transparent text-black">
                            Login
                        </NavLink>
                        </li>
                        <li><NavLink to="/signup" className="bg-transparent text-black">Sign Up</NavLink></li>
                    </ul>
                } */}
                
            </div>
            </div>
        </div>
    );
};

export default Header;