import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Topbar from '../../Shared/Topbar/Topbar';

const Register = () => {
    return (
        <div>
             <Topbar />
            <div className='container mx-auto bg-indigo-700 py-16 mt-7'>
                <h2 className='text-3xl font-bold text-white pb-5'>Please Register</h2>
                <div className='bg-white w-80 mx-auto p-16 rounded'>
                    <input type="text" placeholder='name' className='form-input rounded border-indigo-700 mb-5' />
                    <input type="email" placeholder='email' className='form-input rounded border-indigo-700 mb-5' />
                    <input type="password" placeholder='password' className='form-input rounded border-indigo-700 mb-5' />
                    <input type="password" placeholder='Re-enter password' className='form-input rounded border-indigo-700 mb-5' />
                    <div className='flex justify-between items-center'>
                        <button type='submit' className='bg-indigo-700 py-3 px-5 text-white font-medium rounded'>Register</button>
                        <NavLink to="/login"><a href="#" className='text-sm text-indigo-700'>Login Here</a></NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;