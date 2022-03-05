import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Topbar from '../../Shared/Topbar/Topbar';

const ManageOrders = () => {
    return (
        <div>
            <Topbar />
            <div className='bg-emerald-700 container mx-auto p-10 mt-14 text-white'>
                <table class="table-auto">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Customer Email</th>
                        <th>Product Price</th>
                        <th>Update Status</th>
                        <th>Delete Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className='md:p-7'>Vegetables</td>
                    <td className='md:p-7'>abc@gmail.com</td>
                    <td className='md:p-8'>$15</td>
                    <td className='md:p-8'>
                        <button className='bg-white text-black rounded py-2 px-3'>Update</button>
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

export default ManageOrders;