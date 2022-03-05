import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Topbar from '../../Shared/Topbar/Topbar';

const NewAdmin = () => {
    return (
        <div>
            <Topbar />
            <div className='container mx-auto bg-purple-700 py-16 mt-8'>
                <h2 className='text-3xl font-bold text-white pb-5'>Add a New Admin</h2>
                <div className='bg-white w-96 mx-auto p-10 rounded'>
                    <input type="email" placeholder='Enter Admin Email' className='form-input rounded border-purple-700 mb-5 px-7' />
                  
                    <button type='submit' className='bg-purple-700 py-3 px-5 text-white font-medium rounded'>Add Admin</button>
                        
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NewAdmin;