import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Topbar from '../../Shared/Topbar/Topbar';

const Login = () => {
    return (
        <div>
            <Topbar />
            <div className='container mx-auto bg-gray-700 py-16 mt-7'>
                <h2 className='text-3xl font-bold text-white pb-5'>Please Login</h2>
                <div className='bg-white w-80 mx-auto p-16 rounded'>
                    <input type="email" placeholder='email' className='form-input rounded border-gray-700 mb-5' />
                    <input type="password" placeholder='password' className='form-input rounded border-gray-700 mb-5' />
                    <div className='flex justify-between items-center'>
                        <button type='submit' className='bg-gray-700 py-3 px-4 text-white font-medium rounded'>Login</button>
                        <NavLink to="/register"><a href="#" className='text-sm text-gray-700'>Register Here</a></NavLink>
                    </div>
                    <p>-------------------------</p>
                    <button type='submit' className='bg-gray-700 py-4 px-11 mt-2 text-white font-medium rounded'>Google Login</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;