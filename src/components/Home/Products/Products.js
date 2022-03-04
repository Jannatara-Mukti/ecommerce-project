import React from 'react';
import fruits from '../../../images/fruits.jpg';
import drinks from '../../../images/drinks.jpg';
import bakery from '../../../images/bakery.jpg';

const Products = () => {
    return (
        <div className='container mx-auto'>          
            <div className='grid md:grid-cols-3 gap-4'>
                <div className='w-64 shadow-lg rounded-2xl p-3 mx-auto space-y-2'>
                    <div class="bg-gray-400 rounded-2xl p-2">
                        <img className='h-48 w-full' src={fruits} alt="" />
                    </div>
                    
                    <h3 class="text-xl font-bold">Frtuits and Vegetables</h3>
                    <div className='md:flex justify-between'>
                        <h5 className='text-xl text-red-400'>$12</h5>
                        <a href="#" className='text-white px-6 py-2 bg-green-500 rounded-xl font-medium'>Buy Now</a>
                    </div>
                </div>
                 {/* More products... */}
                 <div className='w-64 shadow-lg rounded-2xl p-3 mx-auto space-y-2'>
                    <div class="bg-gray-400 rounded-2xl p-2">
                        <img className='h-48 w-full' src={drinks} alt="" />
                    </div>
                    
                    <h3 class="text-xl font-bold">Drinks</h3>
                    <div className='md:flex justify-between'>
                        <h5 className='text-xl text-red-400'>$12</h5>
                        <a href="#" className='text-white px-6 py-2 bg-green-500 rounded-xl font-medium'>Buy Now</a>
                    </div>
                </div>
                <div className='w-64 shadow-lg rounded-2xl p-3 mx-auto space-y-2'>
                    <div class="bg-gray-400 rounded-2xl p-2">
                        <img className='h-48 w-full' src={bakery} alt="" />
                    </div>
                    
                    <h3 class="text-xl font-bold">Bakery Food</h3>
                    <div className='md:flex justify-between'>
                        <h5 className='text-xl text-red-400'>$12</h5>
                        <a href="#" className='text-white px-6 py-2 bg-green-500 rounded-xl font-medium'>Buy Now</a>
                    </div>
                </div>
            </div>
      </div>

      
   
    );
};

export default Products;
