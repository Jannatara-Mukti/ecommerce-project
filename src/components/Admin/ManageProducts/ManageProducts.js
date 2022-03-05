import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Topbar from '../../Shared/Topbar/Topbar';

const ManageProducts = () => {
    return (
        <div>
            <Topbar />
            <div className='bg-gray-500 container mx-auto p-20 mt-14 text-white'>
                <table class="table-auto">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image Url</th>
                        <th>Update Item</th>
                        <th>Delete Item</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className='md:p-7'>Vegetables</td>
                    <td className='md:p-7'>$15</td>
                    <td className='md:p-8'>url</td>
                    <td className='md:p-8'>
                        <NavLink to="/updateProduct"><button className='bg-white text-black rounded py-2 px-3'>Update</button></NavLink>    
                    </td>
                    <td className='md:p-8'><button className='bg-white text-black rounded py-2 px-3'>Delete</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default ManageProducts;