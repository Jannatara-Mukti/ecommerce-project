import React from 'react';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
    return (
       <div className='container mx-auto'>
            <div className='text-xs flex justify-between py-4'>
                <div className='space-x-3'>
                <ul className='list-none flex space-x-3 text-gray-800'>
                    <a href="#" className='text-black'>chat with us</a>
                    <a href="#" className='text-black'>+420 XX XXX XX</a>
                    <NavLink to="/home"><li>Home</li></NavLink>
                </ul>
                </div>
                <div className='space-x-3'>
                    <ul className='list-none flex space-x-3 text-gray-800'>
                        <NavLink to="/blog"><li>Blog</li></NavLink>
                        <NavLink to="/aboutus"><li>About Us</li></NavLink>
                        <NavLink to="/login"><li>Login</li></NavLink>
                        <NavLink to="/addItem"><li>Add Item</li></NavLink>
                        <NavLink to="/newAdmin"><li>Add Admin</li></NavLink>
                        <NavLink to="/manageProducts"><li>Manage Products</li></NavLink>
                        <NavLink to="/manageOrders"><li>Manage Orders</li></NavLink>
                        <button className=''>Log Out</button>
                    </ul>
                </div>
            </div>
            <hr className='container mx-auto'/>
           
       </div>
        
    );
};

export default Topbar;