import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/auth';
import image from '../../../assets/images/login.png';
import { AuthContext } from '../../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {

    const {loginUser, googleSignIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result=> {
            const user = result.user;
            setLoading(false);
            form.reset();
            setError('')
            setAuthToken(user);
            toast.success('Login Successful')
            navigate(from, {replace: true});
        })
        .catch(error=> setError(error))
    }

    const socialSignIn = () => {
        googleSignIn()
        .then(result=> {
            const user = result.user;
            setAuthToken(user);
            navigate(from, {replace: true});
        })
        .catch(error=> setError(error))
    }


    return (
        <div className='flex flex-col md:flex-row items-center my-16 mx-5'>
            <div className="w-full md:w-6/12">
                <img src={image} alt="" />
            </div>
            <div className='w-full md:w-6/12'>
                <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body form pb-5">
                        <h2 className='font-bold color-red text-center mb-4'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <input type="submit" className='btn' value="Login" />
                            <Toaster></Toaster>
                        </div>
                    </form>
                    <label className="label">
                        <Link className="label-text-alt link link-hover color-red Error">{error}</Link>
                    </label>
                    <div className='flex justify-center mb-5'>
                        <Link onClick={socialSignIn} className='social-login  ml-3 flex items-center'>
                        <FcGoogle className='mr-3'/>
                        Continue with Google
                        <Toaster/>
                        </Link>
                    </div>
                    <div className='mx-auto mb-5'>
                        <p>New to the Food Monster? <Link to="/signup" className='color-red'>Sign Up here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
