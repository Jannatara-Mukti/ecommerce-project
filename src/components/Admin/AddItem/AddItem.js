import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Topbar from '../../Shared/Topbar/Topbar';

const AddItem = () => {
    return (
        <div>
             <Topbar />
            <div className='container mx-auto bg-cyan-700 py-16'>
                <h2 className='text-3xl font-bold text-white pb-5'>Add an Product Item</h2>
                <div className='bg-white w-96 mx-auto p-10 rounded'>
                    <input type="text" placeholder='Item name' className='form-input rounded border-cyan-700 mb-5 px-7' />
                    <input type="url" placeholder='Item Image Url' className='form-input rounded border-cyan-700 mb-5 px-7' />
                    <input type="number" placeholder='Item Price' className='form-input rounded border-cyan-700 mb-5 px-7' />
                  
                    <button type='submit' className='bg-cyan-700 py-3 px-5 text-white font-medium rounded'>Add Product Item</button>
                        
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddItem;